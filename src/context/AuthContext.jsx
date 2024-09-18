import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [authState, setAuthState] = useState({
        isAuth: false,
        username: null,
        name: null,
        roles: [],
        token: null,
        status: 'pending',
    });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token && isValidToken(token)) {
            try {
                const decoded = jwtDecode(token);
                fetchUserData(decoded.sub, token);
            } catch (error) {
                console.error("Failed to decode JWT:", error);
                localStorage.removeItem('token');
                setAuthState((prevState) => ({ ...prevState, status: 'done' }));
            }
        } else {
            setAuthState({
                isAuth: false,
                username: null,
                name: null,
                roles: [],
                token: null,
                status: 'done',
            });
        }
    }, []);

    function login(JWT) {
        if (isValidToken(JWT)) {
            localStorage.setItem('token', JWT);
            try {
                const decoded = jwtDecode(JWT);
                fetchUserData(decoded.sub, JWT);
            } catch (error) {
                console.error("Failed to decode JWT during login:", error);
            }
        } else {
            console.error("Invalid JWT received:", JWT);
        }
    }

    function logout() {
        localStorage.clear();
        setAuthState({
            isAuth: false,
            username: null,
            name: null,
            roles: [],
            token: null,
            status: 'done',
        });

        console.log('User is signed out!');
        navigate('/');
    }

    useEffect(() => {
        console.log(authState);
        if (authState.status === 'done' && authState.isAuth) {
            // Check if the user has an admin role in the updated state
            if (authState.roles.includes('ROLE_ADMIN')) {
                navigate('/blog');
            } else if (authState.roles.includes('ROLE_USER')) {
                navigate('/mysync');
            }
            // Add more roles and navigations as needed
        }
    }, [authState, navigate]);

    async function fetchUserData(username, token) {
        try {
            const result = await axios.get(`http://localhost:8080/users`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            setAuthState({
                isAuth: true,
                username: result.data.username,
                name: result.data.name,
                roles: result.data.authorities, // Ensure this returns a list of roles
                token: token,
                status: 'done',
            });

        } catch (e) {
            console.error("Error fetching user data:", e);
            setAuthState({
                isAuth: false,
                username: null,
                name: null,
                roles: [],
                token: null,
                status: 'done',
            });
        }
    }

    function isValidToken(token) {
        return typeof token === 'string' && token.split('.').length === 3;
    }

    const contextData = {
        ...authState,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {authState.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
