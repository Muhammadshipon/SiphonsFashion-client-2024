
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import ProductDetailsModal from './components/ProductDetailsModal'
import ProductsFeaturesSection from './components/ProductsFeaturesSection'

function App() {
  const [openModal,setOpenModal] = useState(false);
  const [id,setId] = useState(null);
  const [product,setProduct] = useState({});

  const getData = async()=>{
    const res = await fetch('/public/products.json')
    const data = await res.json();
    const [filterProduct] = data.filter(item=>item.id === id)
      setProduct(filterProduct)
  }

  useEffect(()=>{
    getData();
  },[id])

console.log(product);

  return (
   <div className='font-inter'>
     {/* Show Product Details Modal Conditionally  */}

     {
        openModal &&<ProductDetailsModal product={product} setOpenModal={setOpenModal}></ProductDetailsModal>
      }


                              {/* hero section  */}
   <section>
    
   <Navbar></Navbar>
   <Banner></Banner>
    </section>  

    

                             {/* Products section */}
   <section className='my-20'>
    <ProductsFeaturesSection setId={setId} setOpenModal={setOpenModal}></ProductsFeaturesSection>
    </section>   
    <div className="relative max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden group">
  
  <div className="p-4">
    <h2 className="text-xl font-semibold">TIRO 21 TRACK PANTS</h2>
    <p className="text-gray-600">$148</p>
  </div>
  
</div>

                           
   </div>
  )
}

export default App
