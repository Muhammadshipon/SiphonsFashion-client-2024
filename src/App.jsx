
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import ProductsFeaturesSection from './components/ProductsFeaturesSection'

function App() {


  return (
   <div className='font-inter'>
                              {/* hero section  */}
   <section>
   <Navbar></Navbar>
   <Banner></Banner>
    </section>  

                             {/* Products section */}
   <section className='my-20'>
    <ProductsFeaturesSection></ProductsFeaturesSection>
    </section>                          
   </div>
  )
}

export default App
