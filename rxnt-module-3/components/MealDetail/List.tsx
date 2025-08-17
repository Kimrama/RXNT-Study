import { View, Text, StyleSheet } from "react-native";
function List({ data }: { data: any[] }) {
    return (
        <View style={styles.listItem}>
            {data.map((item) => (
                <Text key={item}> * {item}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: "#e2b497",
    },
});

export default List;
