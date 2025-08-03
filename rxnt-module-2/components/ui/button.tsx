import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";
import React, { ReactNode } from "react";

interface ButtonProps {
    children: string | ReactNode;
    onPress?: () => void;
}

function Button({ children, onPress }: ButtonProps) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                onPress={onPress}
                android_ripple={{ color: "#1dc0cc" }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 8,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
    },
    pressed: {
        opacity: 0.75,
    },
});

export default Button;
