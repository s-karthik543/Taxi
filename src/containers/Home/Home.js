import React, { Component } from 'react'
import {
    View,
    Text,
    StatusBar,
    Platform
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as HomeActions from '../../actions/HomeActions'

import Map from './Map'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Fab from '../../components/Fab'
import Fare from '../../components/Fare'
import FindDriver from './FindDriver'

const taxiLogo = require("../../../assets/img/taxi_logo_white.png")
const carMarker = require("../../../assets/img/carMarker.png")
class Home extends Component {

    componentDidMount() {
        console.log("Data")
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor('#cc3f00')
        }
        // this.props.getCurrentLocation()

        setTimeout(() => {
            this.props.getNearByDrivers()
        }, 1000)
    }
    render() {
        const { region } = this.props
        const { status } = this.props.booking

        return (
            <View style={{ flex: 1 }}>
                {status !== "pending" &&
                    <View style={{ flex: 1 }}>
                        <Header logo={taxiLogo} />

                        <Map region={region}
                            getInputData={this.props.getInputData}
                            toggleSearchResultModal={this.props.toggleSearchResultModal}
                            getAddressPredictions={this.props.getAddressPredictions}
                            resultTypes={this.props.resultTypes}
                            predictions={this.props.predictions}
                            getSelectedAddress={this.props.getSelectedAddress}
                            selectedAddress={this.props.selectedAddress}
                            carMarker={carMarker}
                            nearByDrivers={this.props.nearByDrivers} />

                        <Fab onPressAction={() => this.props.bookCar()} />

                        {this.props.fare &&
                            <Fare fare={this.props.fare} />}
                        <Footer />
                    </View> ||
                    <FindDriver selectedAddress={this.props.selectedAddress} />
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        region: state.home.region,
        inputData: state.home.inputData || {},
        resultTypes: state.home.resultTypes || {},
        predictions: state.home.predictions || [],
        selectedAddress: state.home.selectedAddress || {},
        fare: state.home.fare,
        nearByDrivers: state.home.nearByDrivers || [],
        booking: state.home.booking || {}
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(HomeActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)