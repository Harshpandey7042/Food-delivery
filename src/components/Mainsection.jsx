import React from 'react';

const MainSection = () => {
  return (
    <div id='home' className="bg-gradient-to-r from-yellow-100 to-yellow-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="lg:self-center text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl animate__animated animate__fadeInLeft">
              Delicious Food Delivered to You
            </h2>
            <p className="mt-6 text-lg leading-7 text-gray-700 animate__animated animate__fadeInLeft animate__delay-1s">
              Experience the best culinary delights from the comfort of your home. Our dishes are prepared with the freshest ingredients and delivered hot and fresh to your door. Whether you're craving a classic pizza or a gourmet meal, we've got you covered.
            </p>
            <a
              href="/menu"
              className="mt-10 inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-105 animate__animated animate__fadeInLeft animate__delay-2s"
            >
              View Menu
            </a>
          </div>
          <div className="mt-10 lg:mt-0 flex justify-center items-center">
            <img
              className="mx-auto rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 animate__animated animate__fadeInRight"
              src="/img/jio.png"
              alt="Delicious Food"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
