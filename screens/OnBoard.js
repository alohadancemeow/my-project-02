import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, Pressable } from 'react-native'
import React from 'react'

import COLORS from '../constants/color'

const OnBoard = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent backgroundColor={COLORS.tranparent} />
            <Image source={require('../assets/images/onboardImage.jpg')} style={styles.image} />
            <View style={styles.indicatorContainer}>
                <View style={styles.indicator} />
                <View style={styles.indicator} />
                <View style={[styles.indicator, styles.indicatorActive]} />
            </View>

            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                <View>
                    <Text style={styles.title}>Find your</Text>
                    <Text style={styles.title}>sweet home</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.textStyle}>Schedule visits in just a few clicks</Text>
                    <Text style={styles.textStyle}>Schedule visits in just a few clicks</Text>
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 40 }}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <View style={styles.btn}>
                        <Text style={{ color: COLORS.white }}>Get Started</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default OnBoard

const styles = StyleSheet.create({
    image: {
        height: 420,
        width: '100%',
        borderBottomLeftRadius: 100,
    },
    indicatorContainer: {
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    indicator: {
        height: 3,
        width: 30,
        backgroundColor: COLORS.grey,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    indicatorActive: {
        backgroundColor: COLORS.dark,
    },
    btn: {
        height: 60,
        marginHorizontal: 20,
        backgroundColor: 'black',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    textStyle: {
        fontSize: 16,
        color: COLORS.grey
    },
})