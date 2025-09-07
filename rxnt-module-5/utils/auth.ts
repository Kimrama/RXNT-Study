import axios from "axios";
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export function createUser(email: string, password: string) {
    return authenticate("signUp", email, password);
}

export function login(email: string, password: string) {
    return authenticate("signInWithPassword", email, password);
}

async function authenticate(mode: string, email: string, password: string) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    const response = await axios.post(url, {
        email,
        password,
        returnSecureToken: true,
    });
    return response.data.idToken;
}
