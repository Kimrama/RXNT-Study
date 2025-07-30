import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { useState } from "react";

function DeleteButton({ onPress }) {
    return (
        <Pressable onPress={onPress} style={styles.deleteButton}>
            <Text style={{ color: "white" }}>Delete</Text>
        </Pressable>
    );
}

function WorkItem({ work, onDeleteItem }) {
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const [deleteState, setDeleteState] = useState(false);
    function deleteHandler() {
        onDeleteItem(work.id);
        setDeleteState(true);
        setShowDeleteButton(false);
    }
    function longPressHandler() {
        setShowDeleteButton(true);
    }
    function shortPressHandler() {
        setShowDeleteButton(false);
    }
    return (
        <View style={styles.workContainer}>
            <Pressable
                onLongPress={longPressHandler}
                onPress={shortPressHandler}
                style={({ pressed }) => pressed && styles.pressableStyle}
            >
                <View style={styles.innerWorkView}>
                    <Text style={styles.workText}>{work.text}</Text>
                    {showDeleteButton && (
                        <DeleteButton onPress={deleteHandler} />
                    )}
                </View>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    workContainer: {
        marginVertical: 8,
        backgroundColor: "#ffffff",
        borderRadius: 2,
        borderLeftWidth: 3,
        borderLeftColor: "blue",
    },
    deleteButton: {
        backgroundColor: "red",
        color: "white",
        padding: 8,
    },
    innerWorkView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    workText: {
        padding: 8,
        fontSize: 16,
        color: "#333333",
    },
    pressableStyle: {
        opacity: 0.5,
        backgroundColor: "#f0f0f0",
    },
});

export default WorkItem;
