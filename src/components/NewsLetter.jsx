import { useState } from "react";
import LogIn from "./Login";
import Registration from "./Register";


const NewsLetter = () => {
  const [showLogin,setShowLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      setSubmitted(true);
      setError('');
      // Here you would typically handle the submission to the server
      console.log('Email submitted:', email);
    } else {
      setError('Please enter a valid email address.');
    }
  };

  
  return (
    <div className="flex justify-center items-center min-h-[500px]  p-4 bg-[url('https://img.pikbest.com/wp/202408/shopping-cart-interface-shimmering-abstract-against-blue-background-a-modern-take-on-e-commerce-design-3d-rendering_9779336.jpg!bw700')] bg-fixed ">
    <div className="  max-w-md w-full ">
      {/* <h2 className="text-3xl font-inter font-bold mb-4 text-center text-blue-900 ">Subscribe to our <span className="text-gray-200 italic font-serif">Newsletter</span></h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-lg font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                error ? 'border-yellow-300' : ''
              }`}
              placeholder="Enter your email"
            />
            {error && <p className="text-yellow-300 text-lg font-bold italic mt-2">{error}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Subscribe
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center">
          <p className="text-green-400 font-bold text-xl">Thank you for subscribing!</p>
        </div>
      )} */}
      {
        showLogin? <LogIn showLogin={setShowLogin}></LogIn>
         : <Registration showLogin={setShowLogin}></Registration>
      }
    
    
    </div>
  </div> 
  );
};

export default NewsLetter;

{/* <div className="bg-[url('https://www.fashionbeans.com/wp-content/uploads/2017/06/instaaccount3.jpg')] pt-2 bg-fixed pb-20  my-14 bg-cover">
                  
      

       
                  <div className="hero  ">
                    
              <div className="hero-content flex-col lg:flex-row p-0 md:px-20 text-white  bg-black bg-opacity-50  mt-20 py-20 max-w-[1000px] rounded-t-2xl gap-10">
                
                <img src='https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?cs=srgb&dl=pexels-willoworld-3768005.jpg&fm=jpg' className="max-w-[300px] md:max-w-md rounded-lg shadow-2xl" />
                <div className="p-4">
                  
                  <h1 className="text-3xl font-bold text-blue-700">Our Mission</h1>
                  <p className="py-6">At <strong>AuraMart</strong>, our core values guide everything we do. We prioritize quality, ensuring that each item in our collection meets the highest standards of craftsmanship and durability.</p>
                  <button className="btn btn-outline text-blue-700  hover:text-white">Read more</button>
                </div>
              </div>
            </div>
                 
                </div>  */}