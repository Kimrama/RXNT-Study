import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    ScrollView,
} from "react-native";
import { useState } from "react";

import InputComponent from "./components/inputComponent";
import WorkListComponent from "./components/workListComponent";

export default function App() {
    const [workList, setWorkList] = useState<string[]>([]);

    function handleSave(workInput: string) {
        if (workInput.trim() === "") {
            return;
        }

        setWorkList((currentList) => [...currentList, workInput]);
    }
    return (
        <View style={styles.container}>
            <InputComponent handleSave={handleSave} />
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
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
