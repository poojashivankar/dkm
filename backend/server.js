const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config(); // Load environment variables securely

const app = express();
app.use(bodyParser.json());

// CORS configuration for development
app.use(cors({
    origin: 'http://localhost:5173', // React frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Database connection using environment variables
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'cdac',
    database: process.env.DB_NAME || 'digital_kisan_market'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err.message);
        return;
    }
    console.log('MySQL Connected...');
});

// Registration endpoint
app.post('/register', async (req, res) => {
    const { name, role, mobile_no, email, password, confirm_password } = req.body;

    if (!name || !role || !mobile_no || !email || !password || !confirm_password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (password !== confirm_password) {
        return res.status(400).json({ message: "Passwords don't match" });
    }

    try {
        // Check if user already exists
        const [rows] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
        if (rows.length > 0) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user
        const result = await db.promise().query(
            'INSERT INTO users (name, role, mobile_no, email, password) VALUES (?, ?, ?, ?, ?)',
            [name, role, mobile_no, email, hashedPassword]
        );

        res.status(201).json({ message: 'Registered successfully. You can now log in.' });
    } catch (error) {
        console.error('Registration error: ', error);
        res.status(500).json({ message: 'Database error during registration' });
    }
});

// Login endpoint

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Fetch user from MySQL database
        const [rows] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);

        if (rows.length === 0) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        const user = rows[0]; // Fetch first result

        // Compare hashed passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        // Include role in the response
        res.json({
            success: true,
            user: {
                id: user.id, // Adjust to match your database schema
                name: user.name,
                email: user.email,
                role: user.role, // Example: farmer, buyer, admin
            },
        });
    } catch (error) {
        console.error('Login error: ', error);
        res.status(500).json({ success: false, message: 'Database error during login' });
    }
});

// Start server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
