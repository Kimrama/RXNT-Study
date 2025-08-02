import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    ScrollView,
    Button,
} from "react-native";
import { useState } from "react";

import InputComponent from "./components/inputComponent";
import WorkListComponent from "./components/workListComponent";

export default function App() {
    const [workList, setWorkList] = useState<string[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    function handleSave(workInput: string) {
        if (workInput.trim() === "") {
            return;
        }

        setWorkList((currentList) => [...currentList, workInput]);
    }

    return (
        <View style={styles.container}>
            <Button
                title="Add Work"
                onPress={() => {
                    setIsModalVisible(true);
                }}
            />
            {isModalVisible && (
                <InputComponent
                    handleSave={handleSave}
                    visibleState={isModalVisible}
                    setModalFunction={setIsModalVisible}
                />
            )}
            <Text style={{ fontSize: 20, margin: 10 }}>Work List</Text>
            <ScrollView>
                {workList.map((work, index) => (
                    <WorkListComponent key={index} workTitle={work} />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        padding: 40,
        flex: 1,
    },
});
