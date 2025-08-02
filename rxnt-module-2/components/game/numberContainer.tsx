import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
interface numberContainerProps {
    children: number | string;
}
function NumberContainer({ children }: numberContainerProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primaryBlue,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        color: Colors.primaryBlue,
        fontSize: 36,
        fontWeight: "bold",
    },
});
