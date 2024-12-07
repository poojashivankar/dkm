export const loginUser = (email, password) => {
    // Mock login
    if (email.includes("farmer")) {
      return { email, role: "farmer" };
    } else if (email.includes("buyer")) {
      return { email, role: "buyer" };
    }
    return null;
  };
  
  export const logoutUser = () => {
    return null;
  };
  