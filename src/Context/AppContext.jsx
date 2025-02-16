import { createContext } from 'react';
import { doctors } from '../assets/assets';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    function login(email, password) {
        const storedUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!storedUser) {
            return { success: false, message: "No user found. Please register first." };
        }
        if (storedUser.email === email && storedUser.password === password) {
            return { success: true, message: "Login successful!" };
        } else {
            return { success: false, message: "Invalid email or password." };
        }
    }

    function register(name, email, password) {
        if (localStorage.getItem("currentUser")) {
            return { success: false, message: "A user is already registered. Please log in." };
        }
        localStorage.setItem("currentUser", JSON.stringify({ name, email, password }));
        return { success: true, message: "Registration successful!" };
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

