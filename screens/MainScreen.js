import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import morse from '../utils/morse'
import { Camera, Permissions } from 'expo-camera'
import { Platform } from 'react-native';


export default class MainScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            command: '',
            hasCameraPermission: false,
            type: Camera.Constants.Type.back,
            flashType: "torch"
        }
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    async componentWillMount() {
        const { status } = await Camera.requestPermissionsAsync();
        this.setState({ hasCameraPermission: status === 'granted' });
    }
    toogleFlash = () => {
        let flashType = this.state.flashType == "torch" ? "off" : "torch"
        this.setState({
            flashType
        })
    }
    render() {
        let hasCameraPermission = this.state.hasCameraPermission
        Camera.Constants.Type
        return (
            <View style={{ flex: 1 }}>

                <Button title="open flash" onPress={this.toogleFlash}></Button>
                {hasCameraPermission &&
                    <Camera
                        style={{ flex: 1, width: '100%', height: '100%', alignSelf: 'stretch' }}
                        ref={ref => {
                            this.camera = ref;
                        }}
                        flashMode={this.state.flashType}
                    />
                }
            </View>)

        {/* <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
                <View style={{ flex: 1, flexDirection: "row", top: 50, justifyContent: "center", flexWrap: "wrap" }}>
                    <TextInput placeholder="Your commands here" style={{
                        borderWidth: 1, borderColor: "blue", width: 220, height: 40
                    }}
                        onChangeText={val => this.onChangeText('command', val)}>
                    </TextInput>
                    <TouchableOpacity style={{
                        width: 60, height: 38, borderColor:
                            "blue", borderWidth: 1
                    }}>
                        <Button title="Send" style={{
                        }}
                            onPress={this.openFlash}></Button>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <Camera type={Camera.Constants.Type.back} flashMode='torch' />
                </View>
                <View style={{ flex: 1, flexDirection: "column", justifyContent: "flex-start" }}>
                    <Text>{this.state.command}</Text>
                </View>
                    </View >)*/}

    }
}
