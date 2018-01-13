import React from 'react'
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import styles from '../utils/Styles'


export default ({ logo }) => {

    return (
        <View style={styles.headerContainer}>

            <TouchableOpacity>
                <Image source={require('../../assets/img/ic_menu.png')} />

            </TouchableOpacity>

            {logo ? <Image resizeMode="center" style={styles.logo} source={logo} />
                :
                <Text style={styles.headerText}>Driver on the way</Text>
            }

            <TouchableOpacity>
                <Image source={require('../../assets/img/ic_card.png')} />
            </TouchableOpacity>
        </View>
    )
}