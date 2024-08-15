import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";



const ProductsFeaturesSection = ({setOpenModal,setIdForDetails,setIdForAddToCart}) => {
  const [products,setProducts]= useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceRangeFilter, setPriceRangeFilter] = useState([0, 500]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const productsPerPage = 9;

  const getData = async()=>{
    const res = await fetch('/public/products.json')
    const data = await res.json();
      setProducts(data)
  }

  useEffect(()=>{
    getData();
  },[])


  let filteredProducts = products;
if (categoryFilter) {
  filteredProducts = filteredProducts.filter((product) => product.category === categoryFilter);
}
filteredProducts = filteredProducts.filter((product) => {
  return product.price >= priceRangeFilter[0] && product.price <= priceRangeFilter[1];
});
filteredProducts = filteredProducts.filter((product) => product.ratings >= ratingFilter);



 //  Functions For Filtering 
 const handleCategoryChange = (event) => {
  setCategoryFilter(event.target.value);
  setCurrentPage(1);
}; 

const handlePriceRangeChange = (event) => {
  const [min, max] = event.target.value.split('-').map(Number);
  setPriceRangeFilter([min, max]);
  setCurrentPage(1);
};

const handleRatingChange = (event) => {
  setRatingFilter(Number(event.target.value));
  setCurrentPage(1);
};


  

  // Calculate the index of the first and last product on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   // Slice the products array to get the products for the current page
  const currentProducts = filteredProducts.slice(indexOfFirstProduct,indexOfLastProduct);

  // Function to handle next page
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredProducts.length / productsPerPage)));
  };
   // Function to handle previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };



 

  return (
    <div>
                   
         <h1 className="text-4xl font-bold text-center mb-10 text-orange-500">Choose Your Best Products</h1>

         

                           {/* Filter Input Section  */}
      <div className=" flex flex-col md:flex-row items-center gap-5 justify-around mb-4">
        <select
          onChange={handleCategoryChange}
          className="px-4 py-2 border rounded"
        >
          <option value="">All Categories</option>
          <option value="Men's Sneaker">Men's Sneaker</option>
          <option value="Men's Pants">Men's Pants</option>
          <option value="Bag">Bag</option>
          <option value="Earphones">Earphones</option>
          <option value="Bottle">Bottle</option>
        </select>

         <select
          onChange={handlePriceRangeChange}
          className="px-4 py-2 border rounded"
        >
          <option value="0-500">All Prices</option>
          <option value="0-100">$0 - $100</option>
          <option value="101-200">$101 - $200</option>
          <option value="201-300">$201 - $300</option>
          <option value="301-500">$301 - $500</option>
        </select>

        <select
          onChange={handleRatingChange}
          className="px-4 py-2 border rounded"
        >
          <option value="0">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
          <option value="2">2 Stars & Up</option>
          <option value="1">1 Star & Up</option>
        </select> 
                       
       

      </div>

                      
                     


                       {/* Products Showcase section  */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5  transition-opacity duration-1000 ease-in-out"
      style={{ opacity: 0, transition: 'opacity 1s ease-in-out', animation: 'fadeIn 0.5s forwards' }}
      key={currentPage}
      >
     {currentProducts.length===0? <p className="text-center my-10">No Product Available....</p>:
        currentProducts?.map(product=><ProductCard key={product.id} 
          product={product}
          setOpenModal={setOpenModal}
          setIdForAddToCart={setIdForAddToCart} 
          setIdForDetails={setIdForDetails}></ProductCard>)
      }
     </div>
                         {/* Pagination Button  */} 
     <div className="text-center mt-10 " >
        <button onClick={prevPage} disabled={currentPage === 1}>
        <GiPreviousButton className="text-3xl text-orange-500 mr-1 hover:scale-110" />
        </button>
       
        <button onClick={nextPage} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>
        <GiNextButton className="text-3xl text-orange-500 ml-1 hover:scale-110"/>
        </button>
      </div>
    
    </div>
  );
};

export default ProductsFeaturesSection;