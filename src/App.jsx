
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import ProductDetailsModal from './components/ProductDetailsModal'
import ProductsFeaturesSection from './components/ProductsFeaturesSection'
import Cart from './components/Cart'
import AboutUs from './components/AboutUs'
import Reviews from './components/Reviews'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdShoppingCartCheckout } from 'react-icons/md'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

AOS.init();






function App() {
            
  const [openModal,setOpenModal] = useState(false);
  const [idForDetails,setIdForDetails] = useState(null);
  const [idForAddToCart,setIdForAddToCart] =useState(null);
  const [deleteItemId,setDeleteItemId] =useState(null);
  const [productDetails,setProductDetails] = useState({});
  const [cartProducts,setCartProducts]= useState([]);
  const totalItem = cartProducts?.reduce((sum,current)=>sum+current.quantity,0)
 


            //  Fetch data for add to cart 
const getDataForAddToCart = async () => {
  const res = await fetch('/products.json')
  const data = await res.json();
  const filterForAddToCart = data.find(item => item.id === idForAddToCart);

  setCartProducts(previous => {
      const existingProductIndex = previous.findIndex(item => item.id === idForAddToCart);
      if (existingProductIndex !== -1) {
          // If the product already exists in the cart, increase the quantity
          const updatedCart = [...previous];
          updatedCart[existingProductIndex] = {
              ...updatedCart[existingProductIndex],
              quantity: updatedCart[existingProductIndex].quantity + 1,
          };
          return updatedCart;
      } else {
          // If the product does not exist in the cart, add it with quantity 1
          return [...previous, { ...filterForAddToCart, quantity: 1 }];
      }
  });
}
useEffect(() => {
  if (idForAddToCart !== null) {
    getDataForAddToCart();
  }
 
}, [idForAddToCart]);



                // Fetch data for view product details 
  const getDataForProductsDetails = async()=>{
    const res = await fetch('/products.json')
    const data = await res.json();
    
    const [filterProductDetails] = data.filter(item=>item.id === idForDetails)
      setProductDetails(filterProductDetails); 
  }
  useEffect(() => {
    if (idForDetails !== null) {
      getDataForProductsDetails();
    }
  }, [idForDetails]);

                // Update cart Data after removing the product 
  const updatedCartData=()=>{
    const updatedCart=cartProducts?.filter(item=>item.id !== deleteItemId);
    setCartProducts(updatedCart)
  }
  useEffect(() => {
    if (deleteItemId !== null) {
      updatedCartData();
    }
  }, [deleteItemId]);

  


  return (
   <div className='font-inter bg-black text-white relative'>
                        
                                {/*Total Cart button  */}
    <div className="drawer-content  fixed z-50 bottom-[5%] lg:left-[95%] md:left-[90%] left-[85%]">
    <label htmlFor="my-drawer" className=" drawer-button ">
      <div className="relative pr-8 top-4">
      <MdShoppingCartCheckout className="text-blue-400 text-3xl" />
     <div className="bg-white border-2 border-blue-500 w-7 h-7 rounded-full flex justify-center items-center relative -right-5 bottom-10 text-blue-700 "><span>{
     totalItem
     }</span></div>
        </div> 
      </label>
  </div>                    
                            {/* Add To Cart Component */}
    <Cart cartProducts={cartProducts} setDeleteItemId={setDeleteItemId}></Cart>




              {/* Show Product Details Modal Conditionally  */}
     {
        openModal &&<ProductDetailsModal 
        productDetails={productDetails}
        setIdForAddToCart={setIdForAddToCart}
        setOpenModal={setOpenModal}></ProductDetailsModal>
      }


                              {/* hero section  */}
   <section>
    
   <Navbar cartProducts={cartProducts}></Navbar>
   <Banner></Banner>
    </section>  

    

                             {/* Products section */}
   <section className='my-20 ' id='products'>
                                  {/* title  */}
  <div className="text-center max-w-[300px] md:max-w-[400px] mx-auto mb-10 mt-24">
      <h4 className="text-blue-700 font-bold mb-2 text-lg md:text-2xl">Our Products</h4>
      <h2 className="md:text-3xl text-xl py-3 font-bold text-gray-400 border-y-4 border-gray-400">We Make You Awesome</h2>
    </div>                           
         <div className='flex justify-center items-center'>
                       <ProductsFeaturesSection 
     setIdForDetails={setIdForDetails} 
     setOpenModal={setOpenModal}
     setIdForAddToCart={setIdForAddToCart}>

                        </ProductsFeaturesSection>
          </div>                         
    
                       
    </section>   
    



                     {/* About Us Section  */}
        <section id='about'>
                          {/* title */}
        <div className="text-center max-w-[300px] md:max-w-[600px] mx-auto  mt-24">
      <h4 className="text-blue-700  mb-2  md:text-2xl font-bold">About Us</h4>
      <h2 className="md:text-3xl text-lg py-3 font-bold text-gray-400 border-y-4 border-gray-400">Why People Choose AuraMart ?</h2>
    </div>
                       <AboutUs></AboutUs>
          </section>          
       
                           



                    {/* Customer Reviews Section  */}

<section id='reviews' className='my-32'>
                               {/* title */}
   <div className="text-center max-w-[300px] md:max-w-[600px] mx-auto  mt-24">
      <h4 className="text-blue-700  mb-2  md:text-2xl font-bold">Testimonials</h4>
      <h2 className="md:text-3xl text-lg py-3 font-bold text-gray-400 border-y-4 border-gray-400">What Our Client Think About Us?</h2>
    </div>
                            <Reviews></Reviews>
</section>


                       {/* Newsletter Form Section and Simple Footer */}
   <section id='newsletter'>
   
    <NewsLetter></NewsLetter>
    <Footer></Footer>
    
    </section>                    


    <ToastContainer />
   </div>
  )
}

export default App
