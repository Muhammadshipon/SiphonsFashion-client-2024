
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { AuthContext } from "../firebase/provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Registration = ({showLogin}) => {
 
  const {createUser,setUser	} = useContext(AuthContext);
  const [showPassword,setShowPassword] = useState(false);

  const handleSignUp = e =>{
		e.preventDefault();

		const name = e.target.name.value;
		const email = e.target.email.value;
		const photo = e.target.photo.value;
		const password = e.target.password.value;
		console.log(name,email,photo,password)
       
        //  handle error 
    if(!/^(?=.*[a-z])(?=.*[A-Z]).*$/.test(password)){
      toast.error('Your password should have at least one upperCase and lowerCase character')
      return ;
    }
   
    else if(password.length<6){
    toast.error('password must be at least 6 character')
    }



		createUser(email,password)
    .then(result=>{
      console.log(result.user);
			updateProfile(result.user, {
				displayName: name, photoURL: photo
			}).then(() => {
				
			}).catch(() => {
				
			});
			setUser(result.user)
			toast.success("Sign Up successfully")
    })
    .catch(error=>{
      console.error(error);
			toast.error(error.message)
    })
	}


  return (
    <div className="flex justify-center item-center">
    

      <div  className="w-full  mb-14 max-w-md p-4 mt-10 rounded-lg shadow-xl bg-black bg-opacity-20 sm:p-8 ">
	<h2 className="mb-3 text-3xl font-semibold text-center ">Create your account</h2>
  <form onSubmit={handleSignUp} className="space-y-8 ">
		<div className="space-y-4">
			<div className="space-y-2">
				<label htmlFor="name" className="block text-sm ">Name</label>
				<input type="text"  required name="name" id="name" placeholder="Your Full Name" className="w-full px-3 py-3 border rounded-md border-gray-100 bg-gray-900 bg-opacity-0 text-gray-100 focus:border-violet-400" />
			</div>
			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm " >Email address</label>
				<input type="email" required name="email" id="email" placeholder="Your Email" className="w-full px-3 py-3 border rounded-md border-gray-100 bg-gray-900 bg-opacity-0 text-gray-100 focus:border-violet-400" />
			</div>
			
			<div className="space-y-2">
				<label htmlFor="photo" className="block text-sm " >Photo</label>
				<input required type="text" name="photo" id="photo" placeholder="Photo Url" className="w-full px-3 py-3 border rounded-md border-gray-100 bg-gray-900 bg-opacity-0 text-gray-100 focus:border-violet-400" />
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm ">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
				</div>
				<div className="flex items-center w-full relative">
				<input required type={showPassword? "text":"password"}  name="password" id="password" placeholder="Enter Your Password" className="w-full px-3 py-3 border rounded-md border-gray-100 bg-gray-900 bg-opacity-0 text-gray-100 focus:border-violet-400" />
				<span className="right-3 text-gray-500 absolute  text-2xl" onClick={()=>setShowPassword(!showPassword)}>
        {showPassword?<IoMdEyeOff />
         : <IoMdEye />
        
        }
        </span>
				</div>
			</div>
		</div>
		<button className="btn border-0 bg-blue-700 font-bold text-white rounded-lg  hover:scale-105 w-full">Register</button>
	</form>
	<p className="text-sm text-center mt-3 ">Already have an account?
	<span onClick={()=>showLogin(true)}  className="focus:underline hover:underline text-blue-700">log in here</span>
	</p>

  


	

	
</div>
    </div>
  );
};

export default Registration;