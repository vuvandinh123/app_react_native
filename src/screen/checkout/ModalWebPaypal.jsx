import React, { useState } from "react";
import { Modal, Text, View } from "react-native";
import {
  SafeAreaView,
  TouchableOpacity,
  NativeEventEmitter,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import WebView from "react-native-webview";
import Feather from "react-native-vector-icons/Feather";
import { AppConfig } from "../../../app.config";

const ModalWebPaypal = ({ showGateway, setShowGateway, onMessage, amount }) => {
  const [progClr, setProgClr] = useState("#000");
  const [prog, setProg] = useState(false);
  return (
    <SafeAreaView>
      {showGateway ? (
        <Modal
          visible={showGateway}
          onDismiss={() => setShowGateway(false)}
          onRequestClose={() => setShowGateway(false)}
          animationType={"fade"}
          transparent
        >
          <View className="absolute top-0 left-0 bottom-0 right-0">
            <View className="flex flex-row bg-[#f9f9f9] items-center w-[100vw]">
              <TouchableOpacity
                style={{ padding: 13 }}
                onPress={() => setShowGateway(false)}
              >
                <Feather name={"x"} size={24} />
              </TouchableOpacity>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#00457C",
                }}
              >
                PayPal GateWay
              </Text>
              <View style={{ padding: 13, opacity: prog ? 1 : 0 }}>
                <ActivityIndicator size={24} color={progClr} />
              </View>
            </View>
            <WebView
              source={{ uri: AppConfig.PAYPAL_URL }}
              style={{ flex: 1 }}
              injectedJavaScript={`
    window.reactNativeAmount = ${amount + 3} 
  `}
              onLoadStart={() => {
                setProg(true);
                setProgClr("#000");
              }}
              onLoadProgress={() => {
                setProg(true);
                setProgClr("#00457C");
              }}
              onLoadEnd={() => {
                setProg(false);
              }}
              onLoad={() => {
                setProg(false);
              }}
              onMessage={onMessage}
            />
          </View>
        </Modal>
      ) : null}
    </SafeAreaView>
  );
};

export default ModalWebPaypal;
