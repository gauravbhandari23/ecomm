import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {
  const { productId } = useParams();
  const { products,currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState(null);
  const [size,setSize] =useState('')

  const fetchProductData = () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image && item.image.length > 0 ? item.image[0] : null); // Initialize with the first image
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className='w-[24%] sm:w-full flex-shrink-0 cursor-pointer'
                alt=""
                onClick={() => setImage(item)} // Correctly set image on click
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>
        {/* product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 ms:w-4/5'>  {productData.description}</p>

            <div className='flex flex-col gap-4 my-8'>
              <p>Select size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size ?'border-orange-500':''}`} key={index} >{item}</button>
                ))}

              </div>

            </div>
            <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add TO Cart</button>
                <hr className='mt-8 sm:w-4/5' />
                <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                    <p>100% original</p>
                    <p>COD available</p>
                    <p>Return and Exchnage</p>
                </div>
        </div>
      </div>
     
     
      {/* Description and review section */}

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'> Description</b>
          <p className='border px-5 py-3 text-sm'> Reviews(12)</p>


        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui ipsa sequi unde!</p>
        </div>

      </div>
    </div>
  ) : (
    <div className="opacity-100">Loading...</div> // Show loading text
  );
};

export default Product;