import React from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native'
import styles from '../utils/Styles'

export const SearchResults = ({ predictions, getSelectedAddress }) => {

    hanldeSelectedAddress = (placeID) => {
        getSelectedAddress(placeID)
    }

    return (
        <View style={styles.searchResultsWrapper}>
            <FlatList
                data={predictions}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => {

                    return (
                        <TouchableOpacity
                            onPress={() => hanldeSelectedAddress(item.placeID)}
                            style={styles.searchResultItem}>

                            <Image style={{ tintColor: '#7D7D7D', marginHorizontal: 8 }}
                                source={require('../../assets/img/ic_location_on.png')} />
                            <View style={{ flex: 1 }}>
                                <Text style={styles.primaryText}>{item.primaryText}</Text>
                                <Text style={styles.secondaryText}>{item.secondaryText}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }} />
        </View>
    )
}

export default SearchResults