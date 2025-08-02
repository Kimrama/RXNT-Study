import { View, StyleSheet, Text } from "react-native";

interface WorkListComponentProps {
    workTitle: string;
}
export default function WorkListComponent({
    workTitle,
}: WorkListComponentProps) {
    return (
        <View style={styles.workContainer}>
            <Text style={styles.textBox}>{workTitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    workContainer: {
        width: "100%",
        padding: 12,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginBottom: 10,
    },
    textBox: {
        fontSize: 18,
    },
});
