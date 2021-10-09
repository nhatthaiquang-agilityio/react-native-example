import React, { useContext } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'
import BookContext from '../hooks/bookContext'
import CartItem from './CartItem'
import Separator from './Separator';

function CartList() {
  const {state} = useContext(BookContext);

  return (
    <View
      style={{
        flex: 1
      }}>
      {state.cartItems.length !== 0 ? (
        <FlatList
          data={state.cartItems}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => {
            return (
              <CartItem item={item} />
            )
          }}
        />
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartMessage}>Your cart is empty :'(</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  emptyCartContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyCartMessage: {
    fontSize: 22
  }
})

export default CartList;
