import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'


export default class SplashScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
    }
    render() {
        if (this.state.isLoading) {
            this.navigateToMainScreen()
        }
        return (
            <View style={{ alignItems: 'center', justifyContent: "center", flex: 1, backgroundColor: "#FFFFFF" }}>
                <Image
                    source={require('../assets/connect.gif')}
                    style={{ width: 100, height: 100 }}
                /></View>
        )
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ isLoading: true }) }, 3000)
    }
    navigateToMainScreen = () => {
        console.log({ NavigateTomainScreen: 'selam' })
        this.props.navigation.navigate('MainScreen', {

        })
    }
}
