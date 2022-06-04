import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { Link } from 'react-router-dom';

const BookDetails = ({ book }) => {
    const { removeBook } = useContext(BookContext);
    return (
        
        
            <div className="card-body">
                <h5 className="card-title">Judul : {book.title}</h5>
                <p className="card-text">Author : {book.author}</p>
                <button onClick={() => removeBook(book.id)}>Hapus</button>
                <Link to="/update">Update Book</Link>
                
            </div>
        
        
    );
}

export default BookDetails;