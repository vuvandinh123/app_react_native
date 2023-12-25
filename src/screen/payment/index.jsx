import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TopBar } from "../../components/common";

const PaymentScreen = () => {
  return (
    <View>
      <View className="mt-10 relative h-[100vh]">
        <View className="mx-5">
          <TopBar title="Payment" isSearch={true}></TopBar>
        </View>
        <View className="mx-5">
          <ScrollView className="max-h-[70vh]">
            <Text className="font-bold text-base mt-5">Paypal</Text>
            <TouchableOpacity
              key={1}
              className={`bg-gray-200 flex flex-row rounded-lg justify-between items-center mt-3 p-5`}
            >
              <View>
                <View className="w-[80vw] flex justify-between flex-row text-[12px] ">
                  <Text className="capitalize ">
                    vuvandinh203@gmail.com
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View className="mx-5">
          {/* {prev == "Checkout" && (
            <TouchableOpacity
              onPress={handlePressNext}
              className="rounded-full bg-[#FF9900] py-3 mt-3 border-gray-100"
            >
              <Text className="text-center text-white font-semibold text-base">
                Continune place Order
              </Text>
            </TouchableOpacity>
          )} */}
        </View>
      </View>
    </View>
  );
};

export default PaymentScreen;
