// CatBtns.jsx

import React, { useState } from 'react';

const CatBtns = ({ categories, onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className='flex gap-2 justify-center mt-10 mb-5'>
      <button
        onClick={() => handleCategoryClick('All')}
        className={`px-5 py-2 ${activeCategory === 'All' ? 'bg-rose-800 text-gray-50' : 'bg-rose-500 text-white'} transition-all duration-200 hover:bg-rose-500 hover:text-white rounded-lg`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-5 py-2 ${activeCategory === category ? 'bg-rose-800 text-gray-50' : 'bg-rose-500 text-white'} transition-all duration-200 hover:bg-rose-500 hover:text-white rounded-lg`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CatBtns;
