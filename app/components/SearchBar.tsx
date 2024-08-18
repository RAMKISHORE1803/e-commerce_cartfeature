import React from 'react';

export default function SearchBar() {
  return (
    <div className="flex items-center max-w-full">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="bg-lightGrey rounded-full focus:outline-none hover:bg-darkGrey px-20 py-3"
        style={{ color: 'black' }}
      />
    </div>
  );
}
