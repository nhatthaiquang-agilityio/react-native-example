import React, { useContext } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import BookContext from '../hooks/bookContext';

function ShoppingCartIcon() {
  const navigation = useNavigation();
  const {state} = useContext(BookContext);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      style={styles.button}>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{state.cartItems.length}</Text>
      </View>
      <Entypo name="shopping-cart" size={24} color="black" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10
  },
  itemCountContainer: {
    position: 'absolute',
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#FF7D7D',
    right: 22,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default ShoppingCartIcon