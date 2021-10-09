import React, {useReducer} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookList from '../components/BookList';
import CartList from '../components/CartList';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import BookContext from '../hooks/bookContext';
import { bookReducer, bookState } from '../hooks/bookReducer';

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  const [state, dispatch] = useReducer(bookReducer, bookState);

  return (
    <NavigationContainer>
      <BookContext.Provider value={{ state, dispatch }}>
        <Stack.Navigator>
          <Stack.Screen
            name='Books'
            component={BookList}
            options={ () => ({
              headerRight: () => {
                return (
                  <ShoppingCartIcon />
                )
              }
            })} />
          <Stack.Screen name='Cart' component={CartList} />
        </Stack.Navigator>
      </BookContext.Provider>
    </NavigationContainer>
  )
}

export default MainStackNavigator;
