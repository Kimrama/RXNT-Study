import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/ui/title";
import Colors from "../constants/colors";
import Button from "../components/ui/button";

interface GameOverScreenProps {
    startNewGameHandler: () => void;
    endRound: number;
    userNumber: number;
}
function GameOverScreen({
    startNewGameHandler,
    endRound,
    userNumber,
}: GameOverScreenProps) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/success.png")}
                />
            </View>
            <View>
                <Text style={styles.mainText}>
                    Your Device need{" "}
                    <Text style={styles.textHighlight}>{endRound}</Text> Round
                    to guess{" "}
                    <Text style={styles.textHighlight}>{userNumber}</Text>
                </Text>
                <Button onPress={startNewGameHandler}>Start New Game</Button>
            </View>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        overflow: "hidden",
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.cyan700,
        margin: 36,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    mainText: {
        fontFamily: "open-sans",
        fontSize: 18,
        color: "white",
        marginBottom: 10,
    },
    textHighlight: {
        backgroundColor: Colors.primaryBlue,
        padding: 8,
        borderRadius: 8,
        fontWeight: "bold",
    },
});
