import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView,
    FlatList,
} from "react-native";
import { useState } from "react";
import WorkItem from "./components/workItem";
import WorkInput from "./components/workInput";

export default function App() {
    const [workList, setWorkList] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    function setModalVisibleTrue() {
        setIsModalVisible(true);
    }
    function setModalVisibleFalse() {
        setIsModalVisible(false);
    }
    function addWorkHandler(inputWorkText) {
        setWorkList((currentWorkList) => [
            ...currentWorkList,
            { text: inputWorkText, id: Math.random().toString() },
        ]);
    }
    function removeWorkHandler(id) {
        setWorkList((currentWorkList) =>
            currentWorkList.filter((item) => item.id !== id)
        );
    }

    return (
        <View style={styles.container}>
            <Button title="Add Work" onPress={setModalVisibleTrue} />
            {isModalVisible && (
                <WorkInput
                    closeModal={setModalVisibleFalse}
                    modalState={isModalVisible}
                    addWork={addWorkHandler}
                />
            )}
            <View style={styles.workContainer}>
                <FlatList
                    data={workList}
                    renderItem={(workData) => (
                        <WorkItem
                            work={workData.item}
                            onDeleteItem={removeWorkHandler}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: "#f0f0f0",
    },

    workContainer: {
        marginTop: 8,
        flex: 4,
    },
});
