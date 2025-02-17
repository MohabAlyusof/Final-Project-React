
import { createContext, useState } from 'react';
import { doctors } from '../assets/assets';
export const AppContext = createContext();
const AppContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    function login(email, password) {
        const storedUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!storedUser) {
            return { success: false, message: "No user found. Please register first." };
        }
        if (storedUser.email === email && storedUser.password === password) {
            setCurrentUser(storedUser);
            return { success: true, message: "Login successful!" };
        } else {
            return { success: false, message: "Invalid email or password." };
        }
    }
    function register(name, email, password) {
        if (localStorage.getItem("currentUser")) {
            return { success: false, message: "A user is already registered. Please log in." };
        }
        const newUser = { name, email, password };
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        setCurrentUser(newUser);
        return { success: true, message: "Registration successful!" };
    }
    const value = {
        doctors,
        currentUser,
        setCurrentUser,
        login,
        register
    };
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
export default AppContextProvider;