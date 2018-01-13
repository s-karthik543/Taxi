import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import styles from '../utils/Styles'

export default () => {

    //tab bar items
    const tabs = [{
        title: "TaxiCar",
        subTitle: "",
        icon: "car"
    },
    {
        title: "TaxiShare",
        subTitle: "",
        icon: "car"
    },
    {
        title: "Premium",
        subTitle: "",
        icon: "car"
    }, {
        title: "TaxiBike",
        subTitle: "",
        icon: "car"
    }];


    return (
        <View style={styles.footerContainer}>

            {
                tabs.map((obj, index) => {
                    return (
                        <TouchableOpacity key={index} style={{ flex: 1, alignItems: 'center' }}>
                            <Image style={{ tintColor: (index === 0) ? "#FF4F00" : "grey" }} source={require('../../assets/img/ic_car.png')} />
                            <Text style={{ fontSize: 12, color: (index === 0) ? "#FF4F00" : "grey" }}>{obj.title}</Text>
                            <Text style={styles.subText}>{obj.subTitle}</Text>
                        </TouchableOpacity>

                    )
                })
            }

        </View>
    )
}