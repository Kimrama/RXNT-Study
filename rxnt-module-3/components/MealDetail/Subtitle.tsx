import { Text, View, StyleSheet } from "react-native";
function Subtitle({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subtitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitleContainer: {
        margin: 4,
        padding: 6,
        borderBottomWidth: 2,
        marginHorizontal: 12,
        borderBottomColor: "#e2b497",
    },
});

export default Subtitle;
