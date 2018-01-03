import 'react-native';
import React from 'react';
import {loginSuccess} from "../../actions";
import user from "./user";

describe('user reducer', () => {

    it('holds user access token', async () => {
        let state = {};

        let newState = user(state, loginSuccess('token'));

        expect(newState.accessToken).toEqual('token');
    });


});



