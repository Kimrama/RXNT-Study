import React, { PropsWithChildren, ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

interface CardProps {
    children: ReactNode;
}

function Card({ children }: CardProps) {
    return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
    card: {
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primaryBlue,
        borderRadius: 8,
        elevation: 4,
        alignItems: "center",
    },
});

export default Card;
