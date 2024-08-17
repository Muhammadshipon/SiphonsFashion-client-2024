
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import PropTypes from 'prop-types'; 
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);


  const createUser = (email,password)=>{
   
    return createUserWithEmailAndPassword(auth,email,password);
    
  }

  const signInUser = (email,password)=>{

    return signInWithEmailAndPassword(auth,email,password);
   
  }
    
    //  Sign in with   Social Media 
  const signInWithGoogle =()=>{
  return signInWithPopup(auth,googleProvider)
  }

  const signOutUser = ()=>{
   
  return  signOut(auth);
 
  }

  useEffect(()=>{
    const unSubscribed = onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser);
      
    })
    return ()=>{
      unSubscribed();
    }
  },[])

  const authInfo = {
    user,
    setUser,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children : PropTypes.node.isRequired
}
export default AuthProvider;