import { createContext } from 'react';
import { doctors } from '../assets/assets';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    function login(username, password) {
        const storedUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!storedUser) {
            return "No user found. Please register first.";
        }
        if (storedUser.username === username && storedUser.password === password) {
            return "Login successful!";
        } else {
            return "Invalid username or password.";
        }
    }
    function register(username, password) {
        if (localStorage.getItem("currentUser")) {
            return "A user is already registered. Please log in.";
        }
        localStorage.setItem("currentUser", JSON.stringify({ username, password }));
        return "Registration successful!";
    }

    const value = {
        doctors, login, register
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;

