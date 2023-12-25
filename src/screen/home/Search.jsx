import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';

const Search = () => {
  const navigation = useNavigation()
  const handleFocusInput = ()=>{
    navigation.navigate("Search") 
  }
  return (
    <View className="relative flex flex-row mt-5">
        <TextInput onFocus={handleFocusInput} className="border w-full border-[#fffffff6] rounded-lg py-2 bg-[#F9FAFB] px-3" placeholder="Search products name" />
        <Text className="absolute right-3  top-3 "><Icon name="search"  size={30} color="black" /></Text>
    </View>
  )
}

export default Search