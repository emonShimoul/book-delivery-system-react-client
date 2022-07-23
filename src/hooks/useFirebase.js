import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

// initialize the firebase config app
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // google login
    const googleLogin = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
        .finally(()=>{
            setIsLoading(false);
        });
    }

    // handle state changed
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unSubscribed;
    }, []);

    // logout
    const logOut = () => {
        signOut(auth)
        .then(() => {
            console.log("Sign Out Successful");
        })
        .finally(()=>{
            setIsLoading(false);
        });
    }

    return {
        googleLogin,
        user,
        logOut,
        isLoading
    }
}

export default useFirebase;