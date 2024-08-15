
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import ProductDetailsModal from './components/ProductDetailsModal'
import ProductsFeaturesSection from './components/ProductsFeaturesSection'
import Cart from './components/Cart'

function App() {
            
  const [openModal,setOpenModal] = useState(false);
  const [idForDetails,setIdForDetails] = useState(null);
  const [idForAddToCart,setIdForAddToCart] =useState(null);
  const [deleteItemId,setDeleteItemId] =useState(null);
  const [productDetails,setProductDetails] = useState({});
  const [cartProducts,setCartProducts]= useState([]);

 


            //  Fetch data for add to cart 
const getDataForAddToCart = async () => {
  const res = await fetch('/public/products.json')
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
    const res = await fetch('/public/products.json')
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
   <div className='font-inter'>
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
   <section className='my-20 flex justify-center items-center'>
    <ProductsFeaturesSection 
     setIdForDetails={setIdForDetails} 
     setOpenModal={setOpenModal}
     setIdForAddToCart={setIdForAddToCart}>

     </ProductsFeaturesSection>
    </section>   
    

                           
   </div>
  )
}

export default App
