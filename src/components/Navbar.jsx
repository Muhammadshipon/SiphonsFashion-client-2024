import PropTypes from 'prop-types';
// import { MdShoppingCartCheckout } from "react-icons/md";


const Navbar = ( ) => {
 
  
  const link = <>
  <li  data-aos="fade-down"
      data-aos-delay="100"
    data-aos-duration="1000"><a href="#products">Products</a></li>
  <li  data-aos="fade-down"
      data-aos-delay="300"
    data-aos-duration="1000"><a href="#about">About Us</a></li>
  <li data-aos="fade-down"
    data-aos-delay="500"
  data-aos-duration="1000"><a href="#reviews">Reviews</a></li>
 
               </>

  return (
    <div className="navbar  fixed bg-black w-full z-40 bg-opacity-70">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-52">
    {link}
        </ul>
      </div>
     <h1><a className="md:text-3xl text-xl font-bold text-white pl-10">Siphon's<span className="text-blue-700 font-extrabold">Fashion</span></a></h1>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul  className="menu menu-horizontal px-1  text-white">
      {link}
      </ul>
    </div>
                 
           <div className='navbar-end pr-5'>
            <a href='#newsletter' className='btn text-blue-700 '>Login</a>
            </div>        
  

  </div>
  );
};

// Define PropTypes for Navbar component
Navbar.propTypes = {
  cartProducts: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Navbar;