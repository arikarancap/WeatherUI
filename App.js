// import { StyleSheet, Text, StatusBar, View, useWindowDimensions, ScrollView, ImageBackground, Animated, TouchableOpacity } from 'react-native'
// import React, { useRef } from 'react'
// import { Search, Header } from './src/screens'
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { getStatusBarHeight } from 'react-native-status-bar-height'
// // import  night2  from './assets/images/night2.jpg';
// import { IMG, Locations } from './src/constants'
// const App = () => {
//   const { width: windowWidth, height: windowHeight } = useWindowDimensions()
//   const scrollX = useRef(new Animated.Value(0)).current;

//   const WeatherIcon = (weatherType) => {
//     if (weatherType == 'Sunny') {
//       return <IMG.sunSvg width={34} height={34} fill={'#fff'} />
//     }
//     if (weatherType == 'Night') {
//       return <IMG.moonSvg width={34} height={34} fill={'#fff'} />
//     }
//     if (weatherType == 'Cloudy') {
//       return <IMG.cloudySvg width={34} height={34} fill={'#fff'} />
//     }
//     if (weatherType == 'Rainy') {
//       return <IMG.rainSvg width={34} height={34} fill={'#fff'} />
//     }
//   }
//   return (
//     <View>
//       <StatusBar animated={true} backgroundColor={'#0E2954'} barStyle={'light-content'} showHideTransition={0} hidden={false} />
//       <ScrollView
//         horizontal={true}
//         pagingEnabled={true}
//         showsHorizontalScrollIndicator={false}
//         onScroll={Animated.event([
//           {
//             nativeEvent: {
//               contentOffset: {
//                 x: scrollX,
//               },
//             },
//           },
//         ],
//           { useNativeDriver: false },
//         )}
//         scrollEventThrottle={1}
//       >
//         {Locations.map((location, index) => {
//           console.log(location.weatherType)
//           let bgImg;
//           if (location.weatherType == 'Sunny') {
//             bgImg = IMG.sunny
//           } else if (location.weatherType == 'Night') {
//             bgImg = IMG.night2
//           } else if (location.weatherType == 'Cloudy') {
//             bgImg = IMG.cloudy
//           } else if (location.weatherType == 'Rainy') {
//             bgImg = IMG.rainy
//           }
//           return (
//             <View key={index} style={{ width: windowWidth, height: windowHeight }} >
//               <ImageBackground source={bgImg} style={{ flex: 1 }}
//               >
//                 <View
//                   style={{
//                     flex: 1,
//                     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//                     padding: 20,
//                   }}
//                 >
//                   <View style={styles.topInfoWrapper} >
//                     <View>
//                       <Text style={styles.city} >{location.city}</Text>
//                       <Text style={styles.time} >{location.dateTime}</Text>
//                     </View>
//                     <View>
//                       <Text style={styles.temparature} >{location.temparature} </Text>
//                       <View style={{ flexDirection: 'row' }} >
//                         {WeatherIcon(location.weatherType)}
//                         <Text style={styles.weather} >{location.weatherType} </Text>
//                       </View>
//                     </View>
//                   </View>
//                   <View style={styles.InfoWrapper} ></View>
//                   {/* ...Bottom Info Wrapper... */}
//                   <View style={styles.bottomInfoWrapper} >
//                     <View style={{ alignItems: 'center' }} >
//                       <Text style={styles.infoText} >Wind</Text>
//                       <Text style={[styles.infoText, { fontSize: 24 }]} >{location.wind}</Text>
//                       <Text style={styles.infoText}>Km/h</Text>
//                       <View style={styles.infobar} >
//                         <View style={{ width: location.wind / 2, height: 5, backgroundColor: '#69F0AE' }} ></View>
//                       </View>

//                     </View>
//                     <View style={{ alignItems: 'center' }} >
//                       <Text style={styles.infoText} >Rain</Text>
//                       <Text style={[styles.infoText, { fontSize: 24 }]} >{location.rain}</Text>
//                       <Text style={styles.infoText}>%</Text>
//                       <View style={styles.infobar} >
//                         <View style={{ width: location.rain / 2, height: 5, backgroundColor: '#F44336' }} ></View>
//                       </View>
//                     </View>

//                     <View style={{ alignItems: 'center', }} >
//                       <Text style={styles.infoText} >Humidity</Text>
//                       <Text style={[styles.infoText, { fontSize: 24 }]} >{location.humidity}</Text>
//                       <Text style={styles.infoText}>%</Text>
//                       <View style={styles.infobar} >
//                         <View style={{ width: location.rain / 2, height: 5, backgroundColor: 'blue' }} ></View>
//                       </View>
//                     </View>
//                   </View>
//                 </View>
//               </ImageBackground>
//             </View>
//           )
//         })}
//       </ScrollView>
//       {/* ...App Header... */}
//       <View style={styles.appHeader} >
//         <TouchableOpacity
//           onPress={() => { console.log("Search Bar Pressed...") }}
//         >
//           <IMG.searchSvg width={24} height={24} fill="#fff" />
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => { console.log("Menu Bar Pressed...") }}
//         >
//           <IMG.menuSvg width={24} height={24} fill="#fff" />
//         </TouchableOpacity>
//       </View>
//       {/* .....indiaction Wrapper..... */}
//       <View
//         style={styles.indicationWrapper}
//       >
//         {Locations.map((locations, index) => {
//           const width = scrollX.interpolate(
//             {
//               inputRange: [
//                 windowWidth * (index - 1),
//                 windowWidth * (index),
//                 windowWidth * (index + 1)
//               ],
//               outputRange: [
//                 5, 12, 5
//               ],
//               extrapolate: 'clamp'
//             }
//           )
//           return (
//             <Animated.View key={index} style={[styles.normalDot, { width }]} />
//           )
//         })}
//       </View>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   normalDot: {
//     height: 5,
//     width: 5,
//     marginHorizontal: 4,
//     borderRadius: 4,
//     backgroundColor: 'white',

//   },
//   topInfoWrapper: {
//     flex: 1,
//     marginTop: 160,
//     // borderColor: 'red',
//     // borderWidth: 2,
//     justifyContent: 'space-between'

//     // backgroundColor: 'blue',/
//   },
//   appHeader: {
//     position: 'absolute',
//     top: 0,
//     width: '100%',
//     height: getStatusBarHeight() + 30,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     // borderWidth: 1,
//     // borderColor: 'red',
//     alignItems: 'flex-end',
//     paddingHorizontal: 20

//   },
//   InfoWrapper: {
//     borderColor: 'rgba(255, 255, 255,0.9)',
//     marginTop: 20,
//     borderWidth: 1,
//   },
//   bottomInfoWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginVertical: 20
//   },
//   indicationWrapper: {
//     position: 'absolute',
//     top: 140,
//     left: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center'

//   },
//   city: {
//     color: '#fff',
//     fontSize: 40,
//     fontFamily: 'Lato-Light',
//     fontWeight: 'bold',
//   },
//   time: {
//     color: '#fff',
//     fontSize: 18,
//     fontFamily: 'Lato-Light',
//     fontWeight: 'bold',
//   },
//   temparature: {
//     color: '#fff',
//     fontSize: 85,
//     fontFamily: 'Lato-Regular',
//     // fontWeight: 'bold',
//   },
//   weather: {
//     color: '#fff',
//     fontFamily: 'Lato-Regular',
//     fontWeight: 'bold',
//     fontSize: 25,
//     lineHeight: 34,
//     marginLeft: 10,
//   },
//   infoText: {
//     color: '#fff',
//     fontFamily: 'Lato-Regular',
//     fontWeight: 'bold',
//     fontSize: 14,
//     lineHeight: 34,
//     marginLeft: 10,

//   },
//   infobar: {
//     width: 55,
//     height: 5,
//     backgroundColor: 'rgba(255,255,255,0.5)',
//   }
// })
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const DirectionLayout = () => {
  const [direction, setDirection] = useState('ltr');

  return (
    <PreviewLayout
      label="direction"
      selectedValue={direction}
      values={['ltr', 'rtl']}
      setSelectedValue={setDirection}>
      <View style={[styles.box, { backgroundColor: 'powderblue' }]} />
      <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
      <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default DirectionLayout;