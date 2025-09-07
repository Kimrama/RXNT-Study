import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../utils/auth";
import { useState, useContext } from "react";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const context = useContext(AuthContext);

    async function signupHandler({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) {
        setIsAuthenticating(true);
        try {
            const token = await createUser(email, password);
            context.authenticate(token);
        } catch (error) {
            Alert.alert(
                "Authentication failed",
                "Could not create user. Please check your credentials."
            );
            setIsAuthenticating(false);
        }
    }
    if (isAuthenticating) {
        return <LoadingOverlay message="Creating user..." />;
    }
    return <AuthContent isLogin={false} onAuthenticate={signupHandler} />;
}

export default SignupScreen;
