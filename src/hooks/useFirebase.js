import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

// initialize the firebase config app
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }

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

    return {
        googleLogin,
        user
    }
}

export default useFirebase;