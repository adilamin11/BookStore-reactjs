import React from 'react';
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">About Our Bookstore</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Welcome to our bookstore, your go-to destination for a world of stories, knowledge, and inspiration! We are passionate about connecting readers with books that spark curiosity, ignite imagination, and enrich lives.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          From timeless classics to the latest bestsellers, our carefully curated collection offers something for everyone. Whether you are a fiction enthusiast, a self-help seeker, or a young reader exploring the wonders of literature, we have you covered.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Our mission is to foster a love for reading by creating a warm and welcoming space for book lovers. We also host regular events, book signings, and reading clubs to bring the community together and celebrate the joy of books.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Thank you for choosing our bookstore. We look forward to being a part of your reading journey. Let us help you find your next great read today!
        </p>
      </div>
      <Link to="/">
      <button className='mt-6 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300 '>Back

</button>
      </Link>
    </div>
  );
}
