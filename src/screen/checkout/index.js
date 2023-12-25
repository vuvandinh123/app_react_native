import React, { useCallback, useState } from "react";
import { View, Text, TouchableOpacity, NativeEventEmitter, SafeAreaView, Modal, ActivityIndicator, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TopBar } from "../../components/common";
import WebView from "react-native-webview";
import { SelectList } from "react-native-dropdown-select-list";
import ModalWebPaypal from "./ModalWebPaypal";
import ModalWebMomo from "./ModalWebMomo";
import { postRequest } from "../../api/request"


const CheckoutScreen = ({ route }) => {
    const [showGateway, setShowGateway] = useState(false);
    const [showGatewayMomo, setShowGatewayMomo] = useState(false);
    const [uriMomo, setUriMomo] = useState('');
    const { cartAr } = useSelector((state) => state.cart);
    const { user, token } = useSelector((state) => state.auth)
    const total = cartAr?.reduce((a, b) => a + b.total, 0);
    const navigation = useNavigation();
    const [address, setAddress] = useState(null);
    const [selected, setSelected] = React.useState("Paypal");
    const [idMomo, setIdMomo] = useState(null);
    const addOrder = async () => {
        const product = []
        for (let i = 0; i < cartAr.length; i++) {
            const element = cartAr[i];
            product.push({
                product_id: element.id,
                quantity: element.qty,
                price: element.price,
                shipping_id: 1,
            })
        }
        const data = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: address?.phone,
            address: `${address.streetAddress} ${address.city}`,
            user_id: user.id,
            order_detail: product,
        }
        try {
            const res = await postRequest('/orders', data, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                },
            });
            if (res) {
                navigation.navigate('CheckoutSuccess', { data: res });

            } else {
                alert('that bai');
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handlePressCheckout = () => {
        if (selected === "Paypal") {
            setShowGateway(true);
        }
        else if (selected === "Momo") {
            const fetch = async () => {
                const amount = total * 24000;
                const res = await postRequest("/payment_momo", { amount: amount });
                setUriMomo(res.uri);
                setIdMomo(res.orderId);
                setShowGatewayMomo(true);
            }
            fetch();
        }

    };
    useFocusEffect(
        useCallback(() => {
            AsyncStorage.getItem("address").then((value) => {
                if (value) {
                    const add = JSON.parse(value);
                    const addressFind = add.find((address) => address.active === true);
                    setAddress(addressFind);
                }
            });
        }, [])
    );
    async function onMessage(e) {
        let data = e.nativeEvent.data;
        setShowGateway(false);
        let payment = JSON.parse(data);
        if (payment.status === 'COMPLETED') {
            await addOrder();
        } else {
            alert('PAYMENT FAILED. PLEASE TRY AGAIN.');
        }
    }
    const handleCloseMomo = () => {
        const fetch = async () => {
            const res = await postRequest("/checkOrder", { orderId: idMomo });
            if (res.resultCode == 0) {
                await addOrder();
                alert('PAYMENT SUCCESS.');

            }
            else {
                alert('PAYMENT FAILED. PLEASE TRY AGAIN.');
            }
        }
        fetch();
        setShowGatewayMomo(false);
    }
    function onMessage2(e) {
        let data = e.nativeEvent.data;
        console.log("message", data);
    }
    const payment = [
        {
            key: 1,
            value: "Paypal"
        },
        {
            key: 2,
            value: "Momo"
        },
        {
            key: 3,
            value: "Payment on delivery"
        }
    ]
    const handlePressAddress = () => {
        navigation.navigate("Profile", {
            screen: "ScreenAddress",
            params: {
                prev: "Checkout",
            },
        });
    };
    return (
        <View className="mt-10 relative h-[100vh]">
            <View className="mx-5">
                <TopBar title="Checkout" isSearch={true}></TopBar>
            </View>
            <View className="mx-5">
                <View className="">
                    <TouchableOpacity
                        onPress={handlePressAddress}
                        className="bg-gray-200 flex flex-row rounded-lg justify-between items-center mt-3 p-5"
                    >
                        <View>
                            <Text className="capitalize text-[12px] text-gray-400 mb-2">
                                Shipping address
                            </Text>
                            <Text className=" font-medium  mb-1 text-base capitalize">
                                {address
                                    ? `${address.streetAddress} ${address.city} `
                                    : "Add address"}
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text className="text-black font-semibold">
                                    <AntDesign name="right" size={20}></AntDesign>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
                <View className="">
                    <View className="bg-gray-200 relative flex flex-row rounded-lg justify-between items-center mt-3 p-5">
                        <View>
                            <Text className="capitalize text-[12px] text-gray-400 mb-2">
                                Payment Method
                            </Text>
                            <SelectList
                                className=""
                                setSelected={(val) => setSelected(val)}
                                data={payment}
                                search={false}
                                boxStyles={{ borderWidth: 0, backgroundColor: "#fff", width: 320, maxWidth: "100%" }}
                                dropdownStyles={{ borderWidth: 0, backgroundColor: "#fff", width: 320, maxWidth: "100%" }}
                                defaultOption={{ key: "Paypal", value: "Paypal" }}
                                save="value"
                            />
                        </View>
                    </View>
                </View>
                <ModalWebPaypal showGateway={showGateway} amount={total} setShowGateway={setShowGateway} onMessage={onMessage} />
                <ModalWebMomo onMessage={onMessage2} handleCloseMomo={handleCloseMomo} showGateway={showGatewayMomo} setShowGateway={setShowGatewayMomo} uri={uriMomo} />
            </View>

            <View className="bg-white h-60 bottom-0 left-0 right-0 absolute">
                <View className="mt-10 mx-5 mb-5">
                    <View className="flex mb-3 flex-row justify-between">
                        <Text className="font-bold text-gray-500">Subtotal</Text>
                        <Text className="font-bold">${total}</Text>
                    </View>
                    <View className="flex mb-3 flex-row justify-between">
                        <Text className="font-bold text-gray-500">Shipping Cost</Text>
                        <Text className="font-bold">$3.00</Text>
                    </View>
                    <View className="flex mb-3 flex-row justify-between">
                        <Text className="font-bold text-gray-500">Tax</Text>
                        <Text className="font-bold">$0.00</Text>
                    </View>
                    <View className="flex mb-3 flex-row justify-between">
                        <Text className="font-bold text-gray-500">Total</Text>
                        <Text className="font-semibold text-xl">${total + 3}</Text>
                    </View>

                    <View>

                        <TouchableOpacity
                            onPress={handlePressCheckout}
                            className="rounded-full flex flex-row justify-between px-8 items-center bg-blue-500 py-3 mt-3 border-gray-100"
                        >
                            <Text className="font-semibold text-base text-white">
                                ${total + 3}
                            </Text>
                            <Text className="text-center text-white font-semibold text-base">
                                Place Order
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CheckoutScreen;
