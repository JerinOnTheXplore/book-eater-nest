import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const bookId=parseInt(id);
    const data = useLoaderData();
    // console.log(data);
    const singleBook = data.find(book=>book.bookId===bookId);
    const {bookName,image}=singleBook;
    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>
            <button className="btn btn-soft m-2 btn-info">Read</button>
            <button className="btn btn-soft m-2 btn-success">Wishlist</button>
        </div>
    );
};

export default BookDetails;