import { NativeModules } from 'react-native';

const { RNMomosdk } = NativeModules;

export default {
    requestPayment(params) {
        return RNMomosdk.requestPayment(params);
    }
}