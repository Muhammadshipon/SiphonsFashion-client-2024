// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { IoMdEye } from "react-icons/io";
// import { IoMdEyeOff } from "react-icons/io";
// import { AuthContext } from "../Provider/AuthProvider";
// import Swal from "sweetalert2";
// import { updateProfile } from "firebase/auth";

import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Registration = ({showLogin}) => {
  // const {createUser} = useContext(AuthContext);
  // const navigate = useNavigate();
  const [showPassword,setShowPassword] = useState(false);

  // const handleRegister = e=>{
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const photo = form.photo.value;
  //   const password = form.password.value;
  //   console.log(name,email,photo,password);


  //   if(!/^(?=.*[a-z])(?=.*[A-Z]).*$/.test(password)){
      
  //     Swal.fire({
  //       title: "Password Type is Wrong",
  //       text: "Your password should have at least one upperCase and lowerCase character",
  //       icon: "error"
  //     });
  //     return ;
  //   }
   
  //   else if(password.length<6){
  //     Swal.fire({
  //       title: "Password Type is Wrong",
  //       text: "password must be at least 6 character",
  //       icon: "error"
  //     });
  //    return;
  //   }






  //   createUser(email,password)
  //   .then(result=>{
  //     console.log(result.user);
   
  //     // Update Profile 
  //     updateProfile(result.user, {
  //       displayName: name, photoURL: photo
  //     }).then(() => {
        
  //     })
      

  //     Swal.fire({
  //       title: "Register Successfully",
  //       text: "Your Registration have done Successfully",
  //       icon: "success"
  //     });

  //     form.reset();
  //     navigate('/');
      
  //   })
  //   .catch(error=>{
  //     console.log(error.message)
  //     Swal.fire({
  //       title: error.message,
       
  //       icon: "error"
  //     });
  //   })

  // }
  return (
    <div className="flex justify-center item-center">
    

      <div  className="w-full  mb-14 max-w-md p-4 mt-10 rounded-lg shadow-xl bg-black bg-opacity-20 sm:p-8 ">
	<h2 className="mb-3 text-3xl font-semibold text-center ">Create your account</h2>
  <form   className="space-y-8 ">
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
	<a onClick={()=>showLogin(true)}><p className="focus:underline hover:underline text-blue-700">log in here</p></a>
	</p>

  


	

	
</div>
    </div>
  );
};

export default Registration;