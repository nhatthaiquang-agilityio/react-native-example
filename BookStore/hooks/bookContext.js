import { createContext } from 'react';
import { bookState } from './bookReducer';

const BookContext = createContext(bookState);

export default BookContext;