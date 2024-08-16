
import { MdShoppingCartCheckout } from "react-icons/md";


const Navbar = ({cartProducts}) => {
  const totalItem = cartProducts?.reduce((sum,current)=>sum+current.quantity,0)
  
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
  <li data-aos="fade-down"
    data-aos-delay="700"
  data-aos-duration="1000"><a href="#newsletter">Connect</a></li>
               </>

  return (
    <div className="navbar  fixed bg-black w-full z-40 bg-opacity-50">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    {link}
        </ul>
      </div>
     <h1><a className="text-3xl font-bold text-white pl-10">Aura<span className="text-orange-500 ">Mart</span></a></h1>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul  className="menu menu-horizontal px-1  text-white">
      {link}
      </ul>
    </div>
                 
                    {/* Cart button  */}
   

    
    <div className="drawer-content navbar-end ">
    <label htmlFor="my-drawer" className=" drawer-button ">
      <div className="relative pr-8 top-4">
      <MdShoppingCartCheckout className="text-orange-400 text-3xl" />
     <div className="bg-white w-6 h-6 rounded-full flex justify-center items-center relative -right-5 bottom-10 text-orange-500 "><span>{
     totalItem
     }</span></div>
        </div> 
      </label>
  </div>
 
   
   

  </div>
  );
};

export default Navbar;