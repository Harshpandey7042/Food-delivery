import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: 'The Best Italian Recipes',
      description: 'Explore the most delicious Italian dishes you can easily make at home.',
      image: '/img/goodBowl.avif',
      link: '#'
    },
    {
      title: 'Best Indian Noodles',
      description: 'Discover simple and tasty vegan meals for a healthy lifestyle.',
      image: '/img/imgblog1.jpg',
      link: '#'
    },
    {
      title: '10 Quick & Easy Vegan Meals',
      description: 'Discover simple and tasty vegan meals for a healthy lifestyle.',
      image: '/img/imgblog2.jpg',
      link: '#'
    },
    {
      title: 'HRX Beverages-Juices',
      description: 'Discover simple and tasty vegan meals for a healthy lifestyle.',
      image: '/img/juice.avif',
      link: '#'
    },
    {
      title: 'South Indian dish',
      description: 'Discover simple and tasty vegan meals for a healthy lifestyle.',
      image: '/img/south.avif',
      link: '#'
    },
    {
      title: 'Brewin Cafe',
      description: 'Take a culinary journey around the world with these amazing street foods.',
      image: '/img/sandwich.avif',
      link: '#'
    }
  ];

  return (
    <div id='blog' className="py-24 bg-gray-100">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Our Blog</h1>
        <p className="text-lg text-gray-600">Latest news and recipes from our kitchen</p>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
                <p className="mt-2 text-gray-600">{post.description}</p>
                <a
                  href={post.link}
                  className="mt-4 inline-block text-blue-500 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
