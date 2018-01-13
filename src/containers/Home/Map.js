import React from 'react'
import {
    View
} from 'react-native'
import MapView from 'react-native-maps'
import styles from '../../utils/Styles'

export default () => {

    return (
        <View style={styles.container}>
            <MapView style={styles.container} />
        </View>
    )
}