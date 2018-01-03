import React, {PropTypes} from 'react';
import {StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Login from "./app/components/login/Login";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './app/reducers';
import devToolsEnhancer from 'remote-redux-devtools';
import {Registration} from "./app/components/registration/Registration";

const store = createStore(
    reducers,
    devToolsEnhancer({realtime: true})
);
export default class App extends React.Component {

    render() {

        function userLoggedIn(store) {
            return (store.user) ? store.user.accessToken !== undefined : false
        }

        return (
            <Provider store={store}>
                <View style={styles.container}>
                    {userLoggedIn(store) ? <Login/> : <Registration/>}
                </View>
            </Provider>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    }
});
