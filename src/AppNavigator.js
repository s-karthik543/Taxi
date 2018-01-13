import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import Home from './containers/Home/Home'

const Navigator = StackNavigator({
    Home: {
        screen: Home
    }
}, {
        navigationOptions: {
            header: null
        }
    })

class AppNavigator extends Component {

    render() {

        return (<Navigator />)
    }
}

export default AppNavigator