import { useContext, useState } from "react";
import LogIn from "./Login";
import Registration from "./Register";
import Profile from "./Profile";
import { AuthContext } from "../firebase/provider/AuthProvider";


const NewsLetter = () => {
  const {user} = useContext(AuthContext);
  const [showLogin,setShowLogin] = useState(true);
 

 

  
  
  return (
    <div className="flex justify-center items-center min-h-[500px]  p-4 bg-[url('https://img.pikbest.com/wp/202408/shopping-cart-interface-shimmering-abstract-against-blue-background-a-modern-take-on-e-commerce-design-3d-rendering_9779336.jpg!bw700')] bg-fixed ">
    <div className="  max-w-md w-full ">
    
      {user?<Profile></Profile> : 
        <div>
        {
            showLogin? <LogIn showLogin={setShowLogin}></LogIn>
             : <Registration showLogin={setShowLogin}></Registration>
          }  
        </div>
      
      }
      
  
    
    
    </div>
  </div> 
  );
};

export default NewsLetter;

