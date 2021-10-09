import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import BookContext from '../hooks/bookContext';
import { REMOVE_FROM_CART } from '../hooks/bookReducer';


const CartItem = (props) => {
  const {dispatch} = useContext(BookContext);

  function removeItemFromCart(book) {
    dispatch({ type: REMOVE_FROM_CART, payload: book });
  }

  return (
    <View style={styles.bookItemContainer}>
      <Image source={{ uri: props.item.imgUrl }} style={styles.thumbnail} />
      <View style={styles.bookItemMetaContainer}>
        <Text style={styles.textTitle} numberOfLines={1}>
          {props.item.name}
        </Text>
        <Text style={styles.textAuthor}>by {props.item.author}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => removeItemFromCart(props.item)}
            style={styles.button}>
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bookItemContainer: {
    flexDirection: 'row',
    padding: 10
  },
  thumbnail: {
    width: 100,
    height: 150
  },
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '400'
  },
  textAuthor: {
    fontSize: 16,
    fontWeight: '200'
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#ff333390',
    padding: 5
  },
  buttonText: {
    fontSize: 16,
    color: '#fff'
  },
  emptyCartContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyCartMessage: {
    fontSize: 16
  }
})

export default CartItem;