import React, { useEffect, useState } from "react";
import CategoryFilters from "./CategoryFilters";
import Products from "./Products";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import { fetchData } from "../AxiosHttps/axiosHttpRequests";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  const [item, setItem] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState(item);

  const filterProductsByCategory = (productCategory) => {
    if (productCategory === "All") {
      setFilteredProducts(item);
    } else {
      const filtered = item.filter(
        (product) => product.productCategory === productCategory
      );
      setFilteredProducts(filtered);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const apiData = await fetchData("/api/products");
      const data = await apiData;
      if (apiData) {
        setItem(data);
      }
    };
    fetchDataFromApi();
  }, []);
  
  useEffect(() => {
    setFilteredProducts(item);
  }, [item]);

  // console.log(item)
  // console.log(process.env.REACT_APP_CALLBACK_URL)
    function handleOnClick({ alt, src, heading, detail, para, id, price }) {
        // console.log(id);
        navigate(`product-details/${id}`, {
            state: {
                alt: alt,
                src: src,
                heading: heading,
                detail: detail,
                para: para,
                id: id,
                price: price,
            },
        });
    }

  return (
    <>
      <Navbar />
      <div className="bg-[#18181b] p-10">
        <CategoryFilters
          categories={["Floral Candles", "Fall Candles"]}
          onSelectCategory={filterProductsByCategory}
        />

        <div className="flex flex-wrap items-center px-50 gap-5 justify-center">
          {filteredProducts.map((item, index) => (
            <Products
              onClick={() =>
                handleOnClick({
                  alt: item.productName,
                  src: item.productImage,
                  heading: item.productName,
                  category: item.productCategory,
                  para: item.productDescription,
                  id: item.productId,
                  price: item.productPrice,
                })
              }
              key={item.productId}
              src={item.productImage}
              alt={item.productName}
              heading={item.productName}
              para={item.productDescription}
              detail={item.productDescription}
              id={item.productId}
              price={item.productPrice}
            />
          ))}
        </div>
      </div>

      <Testimonial />
      <Footer />
    </>
  );
}

export default Home;
