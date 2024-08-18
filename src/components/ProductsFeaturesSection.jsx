import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from 'axios';
import { FaSearch } from "react-icons/fa";


const ProductsFeaturesSection = ({setOpenModal,setIdForDetails,setIdForAddToCart}) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [seller, setSeller] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [sort, setSort] = useState('');

                  // Fetch all products 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('https://siphons-fashion-server-2024.vercel.app/products', {
          params: { page, search, category, seller, priceRange, sort },
        });
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [page, search, category, seller, priceRange, sort]);


 

  return (
    <div>
                     {/* Filter Input Section  */}
    <div className="filter-sort flex flex-col lg:flex-row lg:justify-between lg:px-10 md:py-10 max-w-md md:w-full gap-8 items-center py-10 justify-center">
       <div className="flex item-center relative">
       <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-black py-1 px-2 rounded-xl"
        /> <span className="relative right-6 top-2"><FaSearch className="text-gray-700"></FaSearch></span>
       </div>

        <select className="bg-black text-white" onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">All Categories</option>
          <option value="Cap">Cap</option>
          <option value="Men's Pants">Men's Pants</option>
          <option value="Shoes">Case</option>
          <option value="Bag">Bag</option>
          <option value="Men's Sneaker">Men's Sneaker</option>
          <option value="Bottle">Bottle</option>
          <option value="Electronics">Electronics</option>
          <option value="Jacket">Jacket</option>
        </select>

        <select className="bg-black text-white" onChange={(e) => setSeller(e.target.value)} value={seller}>
          <option value="">All Brands</option>
          <option value="Adidas">Adidas</option>
          <option value="Nike">Nike</option>
          <option value="Puma">Puma</option>
        </select>

        <select className="bg-black text-white" onChange={(e) => setPriceRange(e.target.value)} value={priceRange}>
          <option value="">All Prices</option>
          <option value="0,50">$0 - $50</option>
          <option value="51,100">$51 - $100</option>
          <option value="101,200">$101 - $200</option>
          <option value="201,300">$201 - $300</option>
          <option value="301,500">$301 - $500</option>
        </select>

        <select className="bg-black text-white" onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="">Sort By</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="newest">Newest First</option>
        </select>
      </div>

                      
                     


                       {/* Products Showcase section  */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5  transition-opacity duration-1000 ease-in-out"
      style={{ opacity: 0, transition: 'opacity 1s ease-in-out', animation: 'fadeIn 0.5s forwards' }}
      key={page}
      >
     {products?.length===0? <p className="text-center my-10">No Product Available....</p>:
        products?.map(product=><ProductCard key={product.id} 
          product={product}
          setOpenModal={setOpenModal}
          setIdForAddToCart={setIdForAddToCart} 
          setIdForDetails={setIdForDetails}></ProductCard>)
      }
     </div>
                         {/* Pagination Button  */} 
    <div className="pagination   my-24 w-full text-center">
                         <button
    className="btn btn-primary text-blue-500 hover:bg-black bg-white disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    onClick={() => setPage(page - 1)}
    disabled={page === 1}
  >
          Previous
        </button>
        <span className="mx-5">Page {page} of {totalPages}</span>
        <button className="btn btn-primary text-blue-500 hover:bg-black bg-white disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300" onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
    
    </div>
  );
};

// Define PropTypes for ProductsFeaturesSection component
ProductsFeaturesSection.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  setIdForDetails: PropTypes.func.isRequired,
  setIdForAddToCart: PropTypes.func.isRequired
};
export default ProductsFeaturesSection;