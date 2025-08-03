import { Text, StyleSheet } from "react-native";
interface TitleProps {
    children: string;
}
function Title({ children }: TitleProps) {
    return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 24,
        fontWeight: "bold",
        color: "#0597a3",
        textAlign: "center",
        borderWidth: 3,
        borderColor: "#0597a3",
        padding: 12,
        marginTop: 24,
    },
});

export default Title;
