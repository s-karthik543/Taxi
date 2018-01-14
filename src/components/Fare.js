import React from "react";
import { Text, View } from "react-native";

import styles from "../utils/Styles";

export const Fare = ({ fare }) => {
    return (
        <View style={styles.fareContainer}>
            <Text style={styles.fareText}> FARE: RM </Text>
            <Text style={styles.amount}>{fare}</Text>
        </View>

    );
}

export default Fare;