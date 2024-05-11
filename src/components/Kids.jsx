import React from 'react'
import { useState, useEffect, useContext } from 'react'
import product_ from './kids_products/kids_product'
import { Link } from 'react-router-dom'
import ecomContext from '../context/context'

const Kids = () => {
  const [next, setNext] = useState(0)
  const [next2, setNext2] = useState(next + 12)
  const [search, setSearch] = useState('')
  const [style, setStyle] = useState('')
  const [styleprev, setStyleprev] = useState('')
  const [Value, setValue] = useState('block')
  const [countValue, setCountValue] = useState('block')
  const [Value2, setValue2] = useState('hidden')
  const [Value3, setValue3] = useState('hidden')
  const [Value4, setValue4] = useState('hidden')
  const [Value5, setValue5] = useState('hidden')

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };


  const applyFilter = () => {

    if (!checkboxes.checkbox1 && !checkboxes.checkbox2 && !checkboxes.checkbox3 && !checkboxes.checkbox4) {
      alert("please select the filter");
    }
    else if (checkboxes.checkbox2) {
      setValue('hidden')
      setCountValue('hidden')
      setValue2('block')
    }
    else if (checkboxes.checkbox1) {
      setValue('hidden')
      setCountValue('hidden')
      setValue3('block')
    }
    else if (checkboxes.checkbox3) {
      setValue('hidden')
      setCountValue('hidden')
      setValue4('block')
    }

    else if (checkboxes.checkbox4) {
      setValue('hidden')
      setCountValue('hidden')
      setValue5('block')
    }
  }

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  var count = product_.length

  const { setTitle } = useContext(ecomContext)
  const { setPrice } = useContext(ecomContext)
  const { setImage } = useContext(ecomContext)
  const { setId } = useContext(ecomContext)

  const SinglePage = (image, title, price, id) => {
    setImage(image)
    setTitle(title)
    setPrice(price)
    setId(id)
  }


  useEffect(() => {
    if (next2 > count) {
      setStyle('none')
    }
    else {
      setStyle('')
    }
  }, [setStyle, next2, count])


  useEffect(() => {
    if (next === 0) {
      setStyleprev('none')
    }
    else {
      setStyleprev('')
    }
  }, [setStyle, next, count])


  const nextItem = () => {
    if (next2 < count) {

      setNext(next2);
      setNext2(next2 + 12);
    }
    else {
      alert("No more products... stocks are comming");
    }
  }

  const prevItem = () => {
    if (next > 0) {

      setNext(next - 12);
      setNext2(next2 - 12);
    }
    else {
      alert("df")
    }
  }
  return (
    <>
      <div className='sm:flex gap-10'>
      <div className="m-12">
          <div className="text-sm mb-4">
            <Link to="/" className='opacity-50 hover:opacity-100'>Home</Link><span>/</span><a href="">All Products</a>
          </div>
          <button className="border-2 px-5 rounded-lg hover:text-white hover:bg-black py-1 border-black" onClick={toggleFilter}>Filter</button>
          <div className={`fixed left-0 top-0 h-screen w-64 bg-white shadow-lg transition-transform duration-300 ${isFilterOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
            <button className="absolute top-0 right-0 m-4 focus:outline-none" onClick={toggleFilter}>
              <span className="material-icons-outlined">close</span>
            </button>
            <div className="w-48 mt-12 ">
              <h1 className="text-2xl ml-5">Filter</h1>
              <hr className="border-black w-60" />
              <div className="mt-5 ml-5">
                <h1 className="text-xl mb-3">Price</h1>
                <input type="checkbox" name="checkbox1" checked={checkboxes.checkbox1} onChange={handleCheckboxChange} className="mb-4" /> <label htmlFor="" className="text-sm">Below ₹500 </label> <br />
                <input type="checkbox" name="checkbox2" checked={checkboxes.checkbox2} onChange={handleCheckboxChange} className="mb-4" /> <label htmlFor="" className="text-sm">Below ₹1000 </label><br />
                <input type="checkbox" name="checkbox3" checked={checkboxes.checkbox3} onChange={handleCheckboxChange} className="mb-4" /> <label htmlFor="" className="text-sm">Below ₹1500 </label><br />
                <input type="checkbox" name="checkbox4" checked={checkboxes.checkbox4} onChange={handleCheckboxChange} className="mb-4" /> <label htmlFor="" className="text-sm">Below ₹2000 </label>
              </div>
              <button className="border-2 px-5 rounded-lg hover:text-white hover:bg-black py-1 border-black ml-5" onClick={applyFilter}>SUBMIT</button>
            </div>
          </div>
        </div>
        <div className="product m-2 mr-5 items-center">
          <div>
            <h1 className="text-4xl ">
              Kids Products
            </h1>
            <input
              type="text"
              className='border-black rounded border mt-5 w-72 py-1.5'
              onChange={(e) => setSearch(e.target.value)}
            />{" "} <button className='bg-black text-white p-2 rounded'>Search</button>
            <div className={` ${countValue} text-md mt-5`}>
              {count} Products
            </div>

            <div className={` ${Value} grid grid-cols-2 sm:grid-cols-6 gap-5   `}>
              {product_
                .filter((product) => {
                  if (search === '') {
                    return product;
                  } else if (product.title.toLowerCase().includes(search.toLowerCase())) {
                    return product;
                  }
                })
                .slice(next, next2)
                .map((product) => (
                  <div key={product.id} className=' size-40 border h-fit border-gray rounded text-left '>
                    <Link to={`/single-product/${product.title}`} key={product.id} >
                      <div className='overflow-hidden mb-3'>
                        <img
                          src={product.image}
                          onClick={() => SinglePage(product.image, product.title, product.price, product.id)}
                          alt="image"
                          key={product.id}
                          className='hover:scale-150 transition-all duration-500 cursor-pointer'
                        />
                      </div>
                      <div className="p-2">
                        <div>{product.title}</div>
                        <div>₹ {product.price}</div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>

            <div className={` ${Value2} grid grid-cols-2 sm:grid-cols-6 gap-5   `}>

              {

                product_.filter((products) => {
                  if (checkboxes.checkbox2) {
                    return products.price <= 1000.0;
                  }

                })
                  .map((products) => (

                    <div key={products.id} className=' size-40 border h-fit border-gray rounded text-left '>
                      <Link to={`/single-product/${products.title}`} key={products.id} >

                        <div className=' overflow-hidden mb-3'>
                          <img src={products.image}
                            onClick={() => SinglePage(products.image, products.title, products.price, products.id)}
                            alt="image"
                            key={products.id}
                            className='hover:scale-150 transition-all duration-500 cursor-pointer'
                          />
                        </div>
                        <div className="p-2">
                          <div >{products.title}</div>
                          <div>₹ {products.price}</div>
                        </div>

                      </Link>
                    </div>

                  ))

              }
            </div>

            <div className={` ${Value3} grid grid-cols-2 sm:grid-cols-6 gap-5  `}>

              {

                product_.filter((products) => {
                  if (checkboxes.checkbox1) {
                    return products.price <= 500.0;
                  }

                })
                  .map((products) => (

                    <div key={products.id} className=' size-40 border h-fit border-gray rounded text-left '>
                      <Link to={`/single-product/${products.title}`} key={products.id} >

                        <div className=' overflow-hidden mb-3'>
                          <img src={products.image}
                            onClick={() => SinglePage(products.image, products.title, products.price, products.id)}
                            alt="image"
                            key={products.id}
                            className='hover:scale-150 transition-all duration-500 cursor-pointer'
                          />
                        </div>
                        <div className="p-2">
                          <div >{products.title}</div>
                          <div>₹ {products.price}</div>
                        </div>

                      </Link>
                    </div>

                  ))

              }
            </div>

            <div className={` ${Value4} grid grid-cols-2 sm:grid-cols-6 gap-5   `}>

              {

                product_.filter((products) => {
                  if (checkboxes.checkbox3) {
                    return products.price <= 1500.0;
                  }

                })
                  .map((products) => (

                    <div key={products.id} className=' size-40 border h-fit border-gray rounded text-left '>
                      <Link to={`/single-product/${products.title}`} key={products.id} >

                        <div className=' overflow-hidden mb-3'>
                          <img src={products.image}
                            onClick={() => SinglePage(products.image, products.title, products.price, products.id)}
                            alt="image"
                            key={products.id}
                            className='hover:scale-150 transition-all duration-500 cursor-pointer'
                          />
                        </div>
                        <div className="p-2">
                          <div >{products.title}</div>
                          <div>₹ {products.price}</div>
                        </div>

                      </Link>
                    </div>

                  ))

              }
            </div>

            <div className={` ${Value5} grid grid-cols-2 sm:grid-cols-6 gap-5  `}>

              {

                product_.filter((products) => {
                  if (checkboxes.checkbox4) {
                    return products.price <= 2000.0;
                  }

                })
                  .map((products) => (

                    <div key={products.id} className=' size-40 border h-fit border-gray rounded text-left '>
                      <Link to={`/single-product/${products.title}`} key={products.id} >

                        <div className=' overflow-hidden mb-3'>
                          <img src={products.image}
                            onClick={() => SinglePage(products.image, products.title, products.price, products.id)}
                            alt="image"
                            key={products.id}
                            className='hover:scale-150 transition-all duration-500 cursor-pointer'
                          />
                        </div>
                        <div className="p-2">
                          <div >{products.title}</div>
                          <div>₹ {products.price}</div>
                        </div>

                      </Link>
                    </div>

                  ))

              }
            </div>
            <div className={`flex ${countValue} justify-center text-3xl mt-20`}>
              <button onClick={prevItem} style={{ display: styleprev }}>{'<'}</button>
              <button onClick={nextItem} style={{ display: style }}>{'>'}</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Kids