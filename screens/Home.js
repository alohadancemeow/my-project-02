import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, Dimensions, ScrollView, TextInput, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons';
import houses from '../constants/houses';
import COLORS from '../constants/color'

const { width } = Dimensions.get('screen');

const Home = ({ navigation }) => {

  const [selected, setSelected] = useState(0)

  const optionList = [
    { title: 'Buy a House', img: require('../assets/images/house1.jpg') },
    { title: 'Rant a House', img: require('../assets/images/house2.jpg') },
  ]

  const categories = ['Popular', 'Recommended', 'Nearest']

  // listOption component
  const ListOptions = () => (
    <View style={styles.optionListsContainer}>
      {optionList.map((item, index) => (
        <View style={styles.optionsCard} key={index}>
          <Image source={item.img} style={styles.optionsCardImage} />
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
        </View>
      ))}
    </View>
  )

  // listCategories component
  const ListCategories = () => (
    <View style={styles.categoryListContainer}>
      {categories.map((item, index) => (
        <Pressable onPress={() => setSelected(index)} key={index}>
          <Text style={[styles.categoryListText, index === selected && styles.activeCategoryListText]}>{item}</Text>
        </Pressable>
      ))}
    </View>
  )


  // card component
  const Card = ({ house }) => (
    <Pressable onPress={() => navigation.navigate('Details', house)}>
      <View style={styles.card}>
        <Image source={house.image} style={styles.cardImage} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{house.title}</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.blue }}>$1500</Text>
        </View>
        <Text style={{ color: COLORS.grey, fontSize: 14, marginTop: 5 }}>{house.location}</Text>
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
            <Text style={styles.facilityText}>100m</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <StatusBar translucent={false} backgroundColor={COLORS.white} barStyle='dark-content' />
      <View style={styles.header}>
        <View>
          <Text style={{ color: COLORS.grey }}>Loaction</Text>
          <Text style={{ color: COLORS.grey, fontSize: 20, fontWeight: 'bold' }}>Thailand</Text>
        </View>
        <Image source={require('../assets/images/person.jpg')} style={styles.profileImage} />
      </View>

      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
          <View style={styles.searchInputContainer}>
            <Icon name='search' size={25} color={COLORS.grey} />
            <TextInput placeholder='Seach address, city, location' />
          </View>
          <View style={styles.sortBtn}>
            <Icon name='tune' color={COLORS.white} size={25} />
          </View>
        </View>

        <ListOptions />
        <ListCategories />

        <FlatList
          data={houses}
          renderItem={({ item }) => <Card house={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
        />

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  optionListsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: COLORS.grey,
  },
  activeCategoryListText: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 250,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  facility: { flexDirection: 'row', marginRight: 15 },
  facilityText: { marginLeft: 5, color: COLORS.grey },
})