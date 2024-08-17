// import { useContext } from "react";
// import { Link, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
// import Swal from "sweetalert2";


const LogIn = ({showLogin}) => {

  // const {logInUser,
  //       googleLogIn,
  //       githubLogIn} = useContext(AuthContext);
  // const location = useLocation();
  // const navigate = useNavigate()

  // const handleLogIn =e =>{
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(email,password);

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


  //   logInUser(email,password)
  //   .then(result=>{
  //     console.log(result.user);
  //     Swal.fire({
  //       title: "Login Successfully",
  //       text: "Your Registration have done Successfully",
  //       icon: "success"
  //     });

  //     navigate(location?.state? location.state : "/")
  //   })
  //   .catch(error=>{
  //     console.log(error.message)
  //     Swal.fire({
  //       title: "Incorrect Email or Password",
  //       icon: "error"
  //     });
  //   })
 
  // }


  //        // social Media logIn 

  // const handleGoogleLogIn =()=>{
  //   googleLogIn()
  //   .then(result=>{
  //     console.log(result.user);
  //     navigate(location?.state? location.state : "/")
  //   })
  //   .catch(error=>{
  //     console.log(error.message)
  //   })
  // }

  // const handleGithubLogIn=()=>{
  //   githubLogIn()
  // .then(result=>{
  //   console.log(result.user);
  //   navigate(location?.state? location.state : "/")
  // })
  // .catch(error=>{
  //   console.log(error.message);
   
  // })
  // }


  return (
    <div className="flex justify-center items-center mb-16 ">

      <div className="flex flex-col max-w-md p-6  sm:p-10 shadow-xl mt-20 bg-gray-900 bg-opacity-50 rounded-lg">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log in</h1>
          <p className="text-sm">Log in to access your account</p>
        </div>
        <form  noValidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
              <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-200  text-gray-600" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">Password</label>
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline ">Forgot password?</a>
              </div>
              <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-200  text-gray-600" />
            </div>
          </div>
       
            <div>
             <input type="submit" value="Log In" className="w-full px-8 py-3 font-semibold rounded-md bg-blue-700 text-white" />
            </div>
            </form>

            <div className="space-y-2">
            <div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 bg-white"></div>
		<p className="px-3 text-sm ">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 bg-white"></div>
	</div>
	<button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>








            <p className="px-6 text-sm text-center">Do not have an account yet?
             <a onClick={()=>showLogin(false)} rel="noopener noreferrer"  className="hover:underline text-indigo-400 ml-2">Register</a>
            </p>
          </div>
       



      </div>

    </div>
  );
};

export default LogIn;