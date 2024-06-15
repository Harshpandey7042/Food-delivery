import React from 'react';

const restaurants = [
  {
    id: 1,
    name: 'Pizza Hut',
    description: 'Delicious pizzas delivered to your doorstep.',
    image: '/resturant/pizza-hut.webp',
    link: 'https://www.pizzahut.co.in/',
  },
  {
    id: 2,
    name: 'Burger King',
    description: 'Juicy burgers and more, available for online delivery.',
    image: '/resturant/burger-king.jpg',
    link: 'https://www.burgerking.in/',
  },
  {
    id: 3,
    name: "Domino's Pizza",
    description: 'Freshly baked pizzas with a variety of toppings.',
    image: '/resturant/pizza.jpg',
    link: 'https://www.dominos.co.in/',
  },
  {
    id: 4,
    name: 'Swiggy',
    description: 'Order from a wide variety of restaurants through Swiggy.',
    image: '/resturant/Swiggy-Logo.png',
    link: 'https://www.swiggy.com/',
  },
  {
    id: 5,
    name: 'Zomato',
    description: 'Discover and order from the best restaurants in Delhi.',
    image: '/resturant/Zomato1.jpg',
    link: 'https://www.zomato.com/',
  },
  {
    id: 6,
    name: 'KFC',
    description: 'Finger-lickin\' good chicken delivered hot and fresh.',
    image: '/resturant/KFC-.jpg',
    link: 'https://www.kfc.co.in/',
  },
];

const RestaurantsWithDelivery = () => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Restaurants with Online Food Delivery in Delhi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{restaurant.name}</h3>
                <p className="text-gray-600 mt-2">{restaurant.description}</p>
                <a
                  href={restaurant.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-indigo-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
                >
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsWithDelivery;
