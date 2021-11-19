import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";


initializeFirebase()

const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();

    const registerUser = (email, password, name, history) =>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name}
            setUser(newUser)
            saveUser(email, name);
            updateProfile(auth.currentUser, {
              displayName: {name}
            }).then(() => {
          
            }).catch((error) => {
              
            });
            history.replace('/');
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) =>{
      setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location?.state?.from || '/';
          history.replace(destination)
          setAuthError('');
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribed;
    },[])

    useEffect(()=>{
      fetch(`https://hidden-wildwood-78614.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    },[user.email])

    const logOut = () =>{
      setIsLoading(true)
        signOut(auth)
        .then(() => {
            // Sign-out successful.
          })
          .catch((error) => {
            
          })
          .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName) =>{
      const user = {email, displayName}
      console.log(user)
      fetch('https://hidden-wildwood-78614.herokuapp.com/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
    }

    return{
        user,
        admin,
        isLoading,
        registerUser,
        loginUser,
        logOut,
        authError
    }
}

export default useFirebase;