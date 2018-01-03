import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Button} from "react-native-elements";
import ConnectedLogin, {Login} from "./Login";
import configureStore from 'redux-mock-store'

const initialState = {};
const mockStore = configureStore();
let store;

beforeEach(() => {
    store = mockStore(initialState)
});


it('renders the loading screen', async () => {
    const tree = renderer.create(<ConnectedLogin store={store}/>).toJSON();
    expect(tree).toMatchSnapshot();
});


