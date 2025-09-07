import { createContext, useState } from "react";

type AuthContextType = {
    token: string | null;
    isAuthenticated: boolean;
    authenticate: (token: string) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
    token: null,
    isAuthenticated: false,
    authenticate: (token: string) => {},
    logout: () => {},
});

export default function AuthContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [authToken, setAuthToken] = useState<string | null>(null);
    function authenticate(token: string) {
        setAuthToken(token);
    }
    function logout() {
        setAuthToken(null);
    }
    const value: AuthContextType = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate,
        logout,
    };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
