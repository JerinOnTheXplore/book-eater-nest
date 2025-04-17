import React from 'react';
import bookImage from '../../../boi-poka-Book-Vibe-Resources/assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex justify-between items-center p-16'>
            <div>
                <h1>Books to freshen up your bookshelf</h1>
                <button className='btn bg-green-500'>View The List</button>
            </div>
            <div>
                <img className='w-3/12' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;