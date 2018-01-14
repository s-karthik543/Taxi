import React from 'react'
import {
    Text,
    View,
    Image,
    TextInput
} from 'react-native'
import styles from '../utils/Styles'


export const SearchBox = ({ getInputData, toggleSearchResultModal, getAddressPredictions, selectedAddress }) => {
    const { selectedPickUp, selectedDropOff } = selectedAddress || {}

    handleInput = (key, val) => {

        console.log("Key ", key, " value ", val)
        getInputData({
            key,
            value: val
        })
        getAddressPredictions()
    }

    return (
        <View style={styles.searchBox}>

            <View style={styles.inputWrapper}>
                <Text style={styles.label}>PICK UP</Text>

                <View style={styles.searhContainer}>

                    <Image
                        source={require('../../assets/img/ic_search.png')}
                        style={{ tintColor: '#FF5E3A' }} />

                    <TextInput
                        underlineColorAndroid="transparent"
                        onFocus={() => toggleSearchResultModal("pickUp")}
                        style={styles.inputSearch}
                        placeholder="Choose pick-up location"
                        onChangeText={handleInput.bind(this, "pickUp")}
                        value={selectedPickUp && selectedPickUp.name} />
                </View>
            </View>

            <View style={styles.secondInputWrapper}>
                <Text style={styles.label}>DROP-OFF</Text>

                <View style={styles.searhContainer} >

                    <Image
                        source={require('../../assets/img/ic_search.png')}
                        style={{ tintColor: '#FF5E3A' }} />

                    <TextInput
                        underlineColorAndroid="transparent"
                        onFocus={() => toggleSearchResultModal("dropOff")}
                        style={styles.inputSearch}
                        placeholder="Choose drop-off location"
                        onChangeText={handleInput.bind(this, "dropOff")}
                        value={selectedDropOff && selectedDropOff.name} />

                </View>
            </View>
        </View>
    )
}

export default SearchBox