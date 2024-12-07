import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FarmingNews = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/everything',
                    {
                        params: {
                            q: 'farming OR agriculture OR crops OR farmers',
                            language: 'en',
                            sortBy: 'publishedAt',
                            apiKey: 'caadcf556a164990966c4f14f38bee33', // Replace with your NewsAPI key
                        },
                    }
                );
                setArticles(response.data.articles);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching news:', err);
                setError('Failed to load news.');
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <p>Loading news...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Farming News</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {articles.map((article, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '16px',
                            maxWidth: '300px',
                        }}
                    >
                        <img
                            src={article.urlToImage}
                            alt={article.title}
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                        <h2 style={{ fontSize: '18px', margin: '8px 0' }}>
                            {article.title}
                        </h2>
                        <p style={{ fontSize: '14px', color: '#555' }}>
                            {article.description}
                        </p>
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                marginTop: '10px',
                                color: '#007bff',
                                textDecoration: 'none',
                            }}
                        >
                            Read more
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FarmingNews;
