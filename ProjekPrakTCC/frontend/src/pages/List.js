import React from 'react';
//import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList'
import BookDetail from '../components/BookDetail'
import BookContextProvider from '../contexts/BookContext';

const List = books => {
    return (
        <BookContextProvider>
            <BookList {...books} />
        </BookContextProvider>
    );
}



export default List;

