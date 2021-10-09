import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { ADD_TO_CART } from '../hooks/bookReducer';
import BookContext from '../hooks/bookContext';

const BookItem = (props) => {
  const {dispatch} = useContext(BookContext);

  function addItemToCart(item) {
    dispatch({ type: ADD_TO_CART, payload: item });
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
            onPress={() => addItemToCart(props.item)}
            style={styles.button}>
            <Text style={styles.buttonText}>Add +</Text>
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
    backgroundColor: '#24a0ed',
    padding: 5
  },
  buttonText: {
    fontSize: 16,
    color: '#fff'
  }
});

export default BookItem;