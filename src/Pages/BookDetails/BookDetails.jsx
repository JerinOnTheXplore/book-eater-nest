import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
    const {id} = useParams();
    const bookId=parseInt(id);
    const data = useLoaderData();
    // console.log(data);
    const singleBook = data.find(book=>book.bookId===bookId);
    const {bookName,image}=singleBook || {};

    const handleMarkAsRead = id=>{
        // store with id
        // where to store
        // array or collection
        // if book already exist then show a alert
        // if book not exist then push in the collection or array
        addToStoredDB(id);
    }

    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>
            <button onClick={()=>handleMarkAsRead(id)} className="btn btn-soft m-2 btn-info">Mark as Read</button>
            <button className="btn btn-soft m-2 btn-success">Add to Wishlist</button>
        </div>
    );
};

export default BookDetails;