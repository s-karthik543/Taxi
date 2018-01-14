import React from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";

import styles from "../../utils/Styles";

var Spinner = require("react-native-spinkit");

export const FindDriver = ({ selectedAddress }) => {

    const { selectedPickUp, selectedDropOff } = selectedAddress || {};
    return (
        <View style={styles.findDriverContainer} >

            <View style={styles.content}>
                <Text style={styles.text}> Processing your request</Text>
                <Image style={styles.locationIcon}
                    source={require('../../../assets/img/ic_place.png')} />

                <Spinner style={styles.spinner} isVisible size={150} type="Pulse" color="#ffffff" />

                <View style={styles.pickup}>
                    <Text>{selectedPickUp.name}</Text>
                </View>

                <Image style={styles.toArrow} source={require('../../../assets/img/ic_arrow_down.png')}/>
            
                <View style={styles.dropoff}>
                    <Text>{selectedDropOff.name}</Text>
            </View>

            <View>

                <Text style={styles.termsText}>By booking you confirm that you accept our T & C</Text>
                <TouchableOpacity style={styles.cancelBtn}>
                    <Text style={styles.cancelBtnText}>Cancel</Text>

                </TouchableOpacity>
            </View>

        </View>

        </View >

    );
}

export default FindDriver;