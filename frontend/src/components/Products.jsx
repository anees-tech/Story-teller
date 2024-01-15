import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ src, alt, heading, onClick, detail, price }) => {
  return (
    <div className="card w-72 h-100 glass bg-gray-100 rounded-xl overflow-hidden px-5 py-5 my-6">
      <figure>
        <img src={src} alt={alt} className="object-cover w-full h-40 md:h-48 lg:h-56 xl:h-64 rounded-t-xl" />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <div>
          <h2 className="card-title">{heading}</h2>
          <p className="mb-4">{detail}</p>
          <p className="text-xl font-bold">{price}</p>
        </div>
        <button
          onClick={onClick}
          className='px-5 py-2 text-sm tracking-wider text-black font-semibold uppercase transition-colors duration-300 transform bg-rose-300 rounded-lg lg:w-auto hover:bg-rose-400 focus:outline-none focus:bg-rose-400'
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Product;
