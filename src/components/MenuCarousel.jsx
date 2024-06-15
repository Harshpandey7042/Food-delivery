import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PaymentModal from './PaymentModal';

const MenuCarousel = () => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOrderNow = (item) => {
    setSelectedItem(item);
    setPaymentModalOpen(true);
  };

  const handlePaymentModalClose = () => {
    setPaymentModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const menuItems = [
    {
      id: 1,
      title: 'Margherita Pizza',
      description: 'Classic pizza topped with a rich tomato sauce and mozzarella cheese.',
      price: '$10.00',
      image: '/img/mastpizza.jpg',
    },
    {
      id: 2,
      title: 'Big Bowl',
      description: 'Juicy beef burger with lettuce, tomato, and our special sauce.',
      price: '$8.00',
      image: '/img/bigbowl.avif',
    },
    {
      id: 3,
      title: 'Dosa',
      description: 'Crispy South Indian crepe served with coconut chutney and sambar.',
      price: '$5.00',
      image: '/img/dosa.jpeg',
    },
    {
      id: 4,
      title: 'Chomine',
      description: 'Steamed dumplings filled with Momos and served with tangy sauce.',
      price: '$6.00',
      image: '/img/chomine.avif',
    },
    {
      id: 5,
      title: 'Tandoori Chicken',
      description: 'Spicy and flavorful chicken grilled to perfection in a tandoor oven.',
      price: '$12.00',
      image: '/img/masti.jpg',
    },
  ];

  return (
    <div id='menu' className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
          Our Menu
        </h2>
        <Slider {...settings}>
          {menuItems.map((item) => (
            <div key={item.id} className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                  <p className="text-gray-900 font-bold mt-4">{item.price}</p>
                  <button
                    onClick={() => handleOrderNow(item)}
                    className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {isPaymentModalOpen && (
        <PaymentModal
          amount={selectedItem ? parseFloat(selectedItem.price.slice(1)) : 0}
          isOpen={isPaymentModalOpen}
          onClose={handlePaymentModalClose}
        />
      )}
    </div>
  );
};

export default MenuCarousel;
