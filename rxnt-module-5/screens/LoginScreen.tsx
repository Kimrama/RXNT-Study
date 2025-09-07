import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../utils/auth";
import { useState } from "react";
import { Alert } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const context = useContext(AuthContext);

    async function loginHandler({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) {
        setIsAuthenticating(true);
        try {
            const token = await login(email, password);
            context.authenticate(token);
        } catch (error) {
            Alert.alert(
                "Authentication failed",
                "Could not log you in. Please check your credentials."
            );
            setIsAuthenticating(false);
        }
    }
    if (isAuthenticating) {
        return <LoadingOverlay message="Logging in..." />;
    }
    return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
