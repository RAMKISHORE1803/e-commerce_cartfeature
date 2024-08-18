"use client"
import { useState, useEffect } from 'react';

export default function DiscountBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const messages = [
    "Our favourite products at new lower prices! Shop now.",
    "Download the IKEA app!",
    "Get 10% instant discount* on American Express® Cards."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [messages.length]);

  return (
    <div className="bg-black text-white p-4">
      <div className="text-xs text-center justify-between items-center md:flex md:flex-row gap-4 md:px-10">
        <p className="hidden md:block flex-1 px-4 md:px-2">
          {messages[0]}
        </p>
        <p className="hidden md:block flex-1 px-4 md:px-2">
          {messages[1]}
        </p>
        <p className="hidden md:block flex-1 px-4 md:px-2">
          {messages[2]}
        </p>
        <div className="md:hidden">
          <p>{messages[activeIndex]}</p>
        </div>
      </div>
    </div>
  );
}
