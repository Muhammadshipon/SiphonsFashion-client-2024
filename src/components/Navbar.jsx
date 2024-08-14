
import { MdShoppingCartCheckout } from "react-icons/md";


const Navbar = () => {
  const link = <>
     <li >Products</li>
       <li>About Us</li>
       <li>Reviews</li>
       <li>Contact</li></>

  return (
    <div className="navbar  fixed bg-black w-full z-50 bg-opacity-50">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    {link}
        </ul>
      </div>
      <a className="text-3xl font-bold text-white pl-10">Aura<span className="text-orange-500 ">Mart</span></a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul  className="menu menu-horizontal px-1 gap-5 text-white">
      {link}
      </ul>
    </div>
    <div className="navbar-end relative pr-8 top-2">
    <MdShoppingCartCheckout className="text-orange-400 text-3xl" />
     <div className="bg-white w-7 h-7 rounded-full flex justify-center items-center relative right-3 bottom-4 text-orange-500"><span>17</span></div>
    </div>
   
  </div>
  );
};

export default Navbar;