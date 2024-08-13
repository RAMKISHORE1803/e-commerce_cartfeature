import React from 'react';

export default function SearchBar() {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="bg-gray-200 rounded-full focus:outline-none hover:bg-gray-300 px-20 py-3"
        style={{ color: 'black' }} // Add inline style
      />
    </div>
  );
}
