

const Navbar = () => {
  return (
    <div className="navbar text-white fixed bg-black max-w-screen-xl z-10 bg-opacity-50">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       <li>Home</li>
        </ul>
      </div>
      <a className="text-2xl font-bold text-blue-700 pl-10">Aura<span className="text-orange-500 ">Mart</span></a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul  className="menu menu-horizontal px-1 text-white">
      <li>Home</li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Button</a>
    </div>
  </div>
  );
};

export default Navbar;