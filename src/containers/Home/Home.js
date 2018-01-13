import React, { Component } from 'react'
import {
    View,
    Text,
    StatusBar,
    Platform
} from 'react-native'
import Map from './Map'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Fab from '../../components/Fab'

const taxiLogo = require("../../../assets/img/taxi_logo_white.png")

class Home extends Component {

    componentDidMount() {
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor('#cc3f00')
        }
    }
    render() {

        return (
            <View style={{ flex: 1 }}>
                <Header logo={taxiLogo} />
                <Map />
                <Fab />
                <Footer />
            </View>
        )
    }
}

export default Home