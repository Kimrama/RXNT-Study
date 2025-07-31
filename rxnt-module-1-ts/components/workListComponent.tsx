import { View, StyleSheet, Text } from "react-native";

interface WorkListComponentProps {
    workTitle: string;
}
export default function WorkListComponent({
    workTitle,
}: WorkListComponentProps) {
    return (
        <View style={styles.workContainer}>
            <Text>{workTitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    workContainer: {
        width: "80%",
        height: "80%",
        padding: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
    },
});
