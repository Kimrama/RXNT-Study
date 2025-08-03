import { View, Text, StyleSheet } from "react-native";

interface guessLogProps {
    round: number;
    guess: number;
}

function GuessLog({ round, guess }: guessLogProps) {
    return (
        <View style={styles.logContainer}>
            <Text style={styles.text}>Round #{round}</Text>
            <Text style={styles.text}>Guess: {guess}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 8,
        backgroundColor: "white",
    },
    text: {
        fontSize: 18,
    },
});
export default GuessLog;
