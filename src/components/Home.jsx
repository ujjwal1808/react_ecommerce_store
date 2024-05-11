import React, { useContext, useState } from 'react'
import Banner1 from '../assets/banner1.jpg'
import Banner2 from '../assets/banner2.jpg'
import Banner3 from '../assets/banner3.jpg'
import Banner4 from '../assets/banner4.jpg'
import Banner5 from '../assets/banner5.jpg'
import Banner7 from '../assets/Banner7.webp'
import Banner8 from '../assets/Banner8.webp'
import products from './mens_products/Product'
import product from './womens_products/womens_products'
import product_ from './kids_products/kids_product'
import ad1 from '../assets/ad1.webp'
import ad2 from '../assets/ad2.webp'
import ad3 from '../assets/ad3.webp'
import ad4 from '../assets/ad4.jpg'
import ad5 from '../assets/ad5.jpg'
import ad6 from '../assets/ad6.webp'
import ad7 from '../assets/ad7.webp'
import ad8 from '../assets/ad8.webp'
import ecomContext from '../context/context'
import { Link } from 'react-router-dom'


const Home = () => {

  const { setTitle } = useContext(ecomContext)
  const { setPrice } = useContext(ecomContext)
  const { setImage } = useContext(ecomContext)
  const { setId } = useContext(ecomContext)
  let slides = [
    Banner2, Banner7, Banner1, Banner3, Banner8, Banner4, Banner5
  ];

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const SinglePage = (image, title, price, id) => {
    setImage(image)
    setTitle(title)
    setPrice(price)
    setId(id)
  }

  return (
    <>
      <div>
        <div className="bg-black text-white p-1 w-full text-xs text-center">
        Shop Our Sale: Big Savings Await! 
        </div>
        <div className="sm:mx-36">


          <div className="overflow-hidden relative ">
            <div
              className={`flex transition ease-out duration-40 `}
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {slides.map((s) => {
                return <img src={s} />;
              })}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
              <button onClick={previousSlide}>
                <span class="material-symbols-outlined text-black font-bold ">
                  arrow_back_ios
                </span>
              </button>
              <button onClick={nextSlide}>
                <span class="material-symbols-outlined text-black font-bold ">
                  arrow_forward_ios
                </span>
              </button>
            </div>

            <div className="absolute bottom-0 py-4 flex w-fit justify-center gap-3 w-full">
              {slides.map((s, i) => {
                return (
                  <div
                    onClick={() => {
                      setCurrent(i);
                    }}
                    key={"circle" + i}
                    className={`rounded-full w-2 h-2 cursor-pointer  ${i == current ? "bg-white" : "bg-gray-500"
                      }`}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='text-center'>
          <h1 className='text-3xl md:text-5xl m-5'>Just Launched!!! 🚀</h1>
          <p className='mt-6'>Summer Collections for men</p>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            {products.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className='my-5 mx-auto border border-gray rounded text-left shadow-md'
              >
                <Link to={`/single-product/${product.title}`} key={product.id} >
                  <div className='overflow-hidden'>
                    <img src={product.image}
                      onClick={() => SinglePage(product.image, product.title, product.price, product.id)}
                      alt="image"
                      className='w-full h-36 sm:h-48 object-cover cursor-pointer'
                    />
                  </div>
                  <div className="p-2">
                    <div className='font-bold'>{product.title}</div>
                    <div className='mt-1'>₹ {product.price}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 md:mt-24">
            <Link to='/mens'>
              <button className='text-white bg-black p-3 md:p-5 px-6 md:px-8'>
                See More
              </button>
            </Link>
          </div>
        </div>
        <div className="w-fit mt-12">
          <img src={ad5} alt="" />
        </div>

        <div className="w-auto m-auto">
          <div className="text m-4">
            <h1 className="text-center text-4xl mb-0 mt-10">Our Best</h1>
            <div className='grid grid-cols-2 gap-4 mt-8'>
              <img src={ad1} alt="" />
              <img src={ad2} alt="" />
              <img src={ad3} alt="" />
              <img src={ad4} alt="" />
            </div>
          </div>
        </div>

        <div className='text-center  place-content-center'>
          <h1 className='text-4xl mt-3'>Champ Collection</h1>
          <div className='grid grid-cols-2 ml-2 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            {product_.slice(0, 4).map((product) => (
              <div key={product.id} className='my-10 mx-auto border border-gray rounded text-left shadow-md'>
                <Link to={`/single-product/${product.title}`} key={product.id}>
                  <div className='overflow-hidden'>
                    <img src={product.image}
                      onClick={() => SinglePage(product.image, product.title, product.price, product.id)}
                      alt="image"
                      className='w-full h-36 sm:h-48 object-cover cursor-pointer'
                    />
                  </div>
                  <div className="p-2">
                    <div className='font-bold'>{product.title}</div>
                    <div className='mt-1'>₹ {product.price}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-24">

            <Link to='/kids'>
              <button className='text-white bg-black p-5 px-8'>
                See More
              </button>
            </Link>
          </div>
        </div>

        <div className='text-center'>
          <h1 className='text-4xl mt-3'>Queens Collection</h1>
          <div className='grid grid-cols-2 m-2 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            {product.slice(0, 8).map((product) => (
              <div key={product.id} className='my-10 mx-auto border h-fit border-gray rounded text-left shadow-md'>
                <Link to={`/single-product/${product.title}`} key={product.id}>
                  <div className='overflow-hidden mb-3'>
                    <img src={product.image}
                      onClick={() => SinglePage(product.image, product.title, product.price, product.id)}
                      alt="image"
                      className='w-full h-36 sm:h-48 object-cover cursor-pointer'
                    />
                  </div>
                  <div className="p-2">
                    <div className='font-bold'>{product.title}</div>
                    <div className='mt-1'>₹ {product.price}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-24">
            <Link to='/womens'>
              <button className='text-white bg-black p-5 px-8'>
                See More
              </button>
            </Link>
          </div>
        </div>
        <div className='mb-1' >
          <img src={ad6} alt="" className='my-1' />
          <div className='grid grid-cols-2'>
            <img src={ad7} alt="" />
            <img src={ad8} alt="" />

          </div>
        </div>

      </div>
    </>
  )
}

export default Home