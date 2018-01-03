import React from 'react'
import Expo from 'expo'
import {Button} from 'react-native-elements'
import {connect} from 'react-redux'
import {loginSuccess} from "../../actions";

export class Login extends React.Component {
    signInWithGoogleAsync = async () => {
        try {
            const result = await Expo.Google.logInAsync({
                androidClientId: 'xxx',
                scopes: ['profile'],
            });

            if (result.type === 'success') {
                return result
            }
            return {cancelled: true}
        } catch (e) {
            return {error: e}
        }
    };


    onLoginPress = async () => {
        const result = await this.signInWithGoogleAsync();
        console.log(result);
        this.props.loginSuccess(result.accessToken)
    };

    render() {
        return (<Button icon={{name: 'cached'}} title='Login' onPress={this.onLoginPress}/>)
    }
}

const mapDispatchToProps = {
    loginSuccess
};

export default connect(null, mapDispatchToProps)(Login)
