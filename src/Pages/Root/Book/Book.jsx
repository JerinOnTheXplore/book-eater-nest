import React, { use } from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';
const Book = ({singleBook}) => {
    console.log(singleBook)
    const {tags,
        bookId
        }=singleBook;
    return (
        <div>
            <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-6">
  <figure className='p-4 w-2/3 bg-gray-100 mx-auto'>
    <img className='h-[166px]'
      src={singleBook.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
     <div className='flex justify-center gap-3'>
     {
        tags.map(tag=><button className='btn'>#{tag}</button>)
     }
     </div> 

    <h2 className="card-title">
      {singleBook.
bookName}
      <div className="badge badge-secondary">{singleBook.yearOfPublishing
      }</div>
    </h2>
    <p>Book By:{singleBook.
author}</p>
     <div className='border-t-2 border-slate-200 border-dashed'></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{singleBook.
category}</div>
      <div className="badge badge-outline">{singleBook.rating} <CiStar size={20} /></div>
    </div>
  </div>
</div>
            </Link>
        </div>
    );
};

export default Book;