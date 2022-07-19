import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

// initialize the firebase config app
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    // google login
    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
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
        });
        return () => unSubscribed;
    }, []);

    // logout
    const logOut = () => {
        signOut(auth)
        .then(() => {
            console.log("Sign Out Successful");
        })
    }

    return {
        googleLogin,
        user,
        logOut
    }
}

export default useFirebase;