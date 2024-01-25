import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { fetchData } from "../AxiosHttps/axiosHttpRequests";
import { useNavigate, useParams } from "react-router-dom";

function ShowItem() {
  const [item, setItem] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  const productDetail = params.productDetail;

  useEffect(() => {
    const fetchProductDetails = async () => {
      const apiData = await fetchData(`/api/products/${productDetail}`);
      const data = await apiData;
      if (apiData) {
        setItem(data);
      }
    };

    fetchProductDetails();
  }, [productDetail]);

  function handleOnClick() {
    navigate("/buyNow");
  }

  const {
    productName,
    productDetails,
    productPara,
    productImage,
    productPrice,
    productAlt,
  } = item;
  // console.log(item);
  return (
    <>
      <Navbar />
      <div className="item">
        <div className="flex px-10 py-5 justify-center ">
          <div className="image ">
          <img className=' image-full w-2/4 h-2/2' src={`http://localhost:3000/${productImage}`} alt={productAlt} />
          </div>
          <div>
            <h2 className="tex-white font-extrabold text-2xl">
              {productName}
            </h2>
            <h4>{productDetails}</h4>
            <p>{productPara}</p>
            <h2 className="font-extrabold text-3xl">{productPrice}</h2>
            <button
              onClick={handleOnClick}
              className="px-5 py-2 mt-6 text-sm tracking-wider text-black font-semibold uppercase transition-colors duration-300 transform bg-rose-300 rounded-lg lg:w-auto hover:bg-rose-400 focus:outline-none focus:bg-rose-400"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowItem;
