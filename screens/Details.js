import { Image, ScrollView, Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import COLORS from '../constants/color'
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('screen');

const Details = ({ navigation, route }) => {

  const house = route.params
  // console.log(house);


  const InterioImage = ({ image }) => (
    <Image source={image} style={styles.interiorImage} />
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView>
        <View style={styles.backgroundImageContainer}>
          <ImageBackground style={styles.backgroundImage} source={house.image}>
            <View style={styles.header}>
              <View style={styles.headerBtn}>
                <Icon name='arrow-back-ios' size={20} onPress={navigation.goBack} />
              </View>
              <View style={styles.headerBtn}>
                <Icon name='favorite' size={20} color={COLORS.red} />
              </View>
            </View>
          </ImageBackground>

          <View style={styles.virtualTag}>
            <Text style={{ color: COLORS.white }}>Virtual tour</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{house.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.ratingTag}>
                <Text style={{ color: COLORS.white }}>4.8</Text>
              </View>
              <Text style={{ fontSize: 13, marginLeft: 5 }}>155 ratings</Text>
            </View>
          </View>

          <Text style={{ fontSize: 16, color: COLORS.grey }}>{house.location}</Text>

          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <View style={styles.facility}>
              <Icon name='hotel' size={18} />
              <Text style={styles.facilityText}>2</Text>
            </View>
            <View style={styles.facility}>
              <Icon name='bathtub' size={18} />
              <Text style={styles.facilityText}>2</Text>
            </View>
            <View style={styles.facility}>
              <Icon name='aspect-ratio' size={18} />
              <Text style={styles.facilityText}>100m area</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10, color: COLORS.grey }}>{house.details}</Text>

          <FlatList
            data={house.interiors}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <InterioImage image={item} />}
            keyExtractor={item => item.id}
            contentContainerStyle={{ marginTop: 20 }}
            snapToInterval={width - 20}
          />

          <View style={styles.footer}>
            <View>
              <Text style={{ color: COLORS.blue, fontSize: 18, fontWeight: 'bold' }}>$1500</Text>
              <Text style={{ color: COLORS.grey, fontSize: 12, fontWeight: 'bold' }}>Total Price</Text>
            </View>
            <View style={styles.bookNowBtn}>
              <Text style={{ color: COLORS.white }}>Book Now</Text>
            </View>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    height: 350,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  virtualTag: {
    top: -20,
    width: 120,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  interiorImage: {
    width: width / 3 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  footer: {
    height: 70,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  bookNowBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  detailsContainer: { flex: 1, paddingHorizontal: 20, marginTop: 40 },
  facility: { flexDirection: 'row', marginRight: 15 },
  facilityText: { marginLeft: 5, color: COLORS.grey },
})