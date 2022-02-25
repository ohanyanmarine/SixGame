import * as React from 'react';
import {SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';
import HomeNavigate from './navigation/HomeNavigate';
import RNPickerSelect from 'react-native-picker-select';
import SelectDropdown from 'react-native-select-dropdown';

function Main() {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#456ff4" /> */}
      <HomeNavigate  />
    </SafeAreaView>
    // <>
    //   {/* <RNPickerSelect
    //     onValueChange={value => console.log(value)}
    //     items={[
    //       {label: 'Arm', value: 'Arm'},
    //       {label: 'Ru', value: 'Ru'},
    //       {label: 'En', value: 'En'},
    //     ]}
    //   /> */}
    //   {/* <RNPickerSelect
    //     placeholder={{}}
    //     items={sports}
    //     onValueChange={value => console.log(value)}
    //     InputAccessoryView={() => null}
    //     style={pickerSelectStyles.inputAndroid}
    //     //value={sports.favSport2}
    //   /> */}
    //   {/* <SelectDropdown
    //     data={languages}
    //     onSelect={(selectedItem, index) => {
    //       console.log(selectedItem, index);
    //     }}
    //     buttonTextAfterSelection={(selectedItem, index) => {
    //       // text represented after item is selected
    //       // if data array is an array of objects then return selectedItem.property to render after item is selected
    //       return selectedItem;
    //     }}
    //     rowTextForSelection={(item, index) => {
    //       // text represented for each item in dropdown
    //       // if data array is an array of objects then return item.property to represent item in dropdown
    //       return item;
    //     }}
    //     defaultValue={languages[0]}
    //   /> */}
      
    // </>
  );
}

const pickerSelectStyles = StyleSheet.create({
  // inputAndroid: {
  //   fontSize: 16,
  //   paddingHorizontal: 10,
  //   paddingVertical: 8,
  //   borderWidth: 0.5,
  //   borderColor: 'purple',
  //   borderRadius: 8,
  //   color: 'black',
  //   paddingRight: 30, // to ensure the text is never behind the icon
  // },
});

export default Main;
