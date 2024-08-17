import PropTypes from 'prop-types'; // Import PropTypes
import { useState } from "react";
import { CiCirclePlus, CiSearch } from "react-icons/ci";
import ReactStars from "react-rating-stars-component";
import 'animate.css';

const ProductCard = ({product, setOpenModal, setIdForAddToCart, setIdForDetails}) => {
  const {name, img, price, category, ratings, id, discount } = product;
  const [isHover, setIsHover] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  
  const handleShowDetail = (id) => {
    setOpenModal(true);
    setIdForDetails(id);
  };

  const handleAddToCart = (id) => {
    // Animation
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 1000);  

    // Update add to cart product 
    setIdForAddToCart(null); 
    setTimeout(() => {
      setIdForAddToCart(id); 
    }, 0); 
  };

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative max-w-96 border rounded-2xl"
    >
      {isHover && (
        <div className="w-full">
          <button className="absolute top-14 left-24 md:left-28 z-50 bg-blue-700 px-10 py-3 rounded-2xl text-white">
            <span className="text-xl font-serif">{discount * 100}</span>% OFF
          </button>
        </div>
      )}
      <div className="card bg-black shadow-xl hover:opacity-30 transition-opacity duration-300 ease-in-out h-full flex flex-col">
        <figure className="px-10 pt-10">
          <img src={img} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title">{name}</h1>
          <ReactStars value={ratings} count={5} size={24} activeColor="#ffd700" />
          <div className="card-actions flex-col flex md:flex-row md:justify-center items-center gap-5">
            <p className="font-semibold">{category}</p>
            <div className="divider divider-horizontal hidden xl:block bg-white w-[1px]"></div>
            <p className="flex items-center">
              Price: $
              <span className="text-2xl font-bold text-blue-700">{price}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Hover Effect functionality */}
      {isHover && (
        <div className="absolute hover:text-white rounded-2xl hover:bg-[rgb(0,0,0,0.4)] inset-0 flex justify-center items-center z-40 pointer-events-none">
          <div className="flex gap-4 pointer-events-auto">
            <CiSearch onClick={() => handleShowDetail(id)} className="text-5xl hover:text-orange-400 hover:scale-125" />
            <CiCirclePlus onClick={() => handleAddToCart(id)} className="text-5xl hover:text-orange-400 hover:scale-125" />

            {showAnimation && (
              <div className="absolute left-[55%] top-[35%] text-white text-2xl font-bold animate__animated animate__fadeInUp">
                +1
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Define PropTypes for the ProductCard component
ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    ratings: PropTypes.number.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    discount: PropTypes.number.isRequired,
  }).isRequired,
  setOpenModal: PropTypes.func.isRequired,
  setIdForAddToCart: PropTypes.func.isRequired,
  setIdForDetails: PropTypes.func.isRequired,
};

export default ProductCard;
