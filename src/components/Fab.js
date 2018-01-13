import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "../utils/Styles";

export default ({ }) => {
    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.fabContainer}>
            <Text style={styles.btnText}> Book </Text>
        </TouchableOpacity>

    );
}