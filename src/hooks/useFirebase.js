import { useEffect, useState } from "react";
import initialAuthentication from "../Firebase/initialAuthentication";
import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";

//initialize firebase authentication
initialAuthentication()
const auth = getAuth();

// handle all firebase login logout function
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [msg, setMsg] = useState('')


    //Login user with google account
    const signInWithGoogle = (history, redirect_uri) => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
                setMsg("LogIn Success!!!")
                //success login than redirect previous page
                redirectUrl(history, redirect_uri)
            }).catch(error => {
                setMsg(error.message)
            }).finally(setIsLoading(false))
    }

    //sign in with facebook
    const signInWithFacebook = (history, redirect_uri) => {
        setIsLoading(true);
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
                setMsg("LogIn Success!!!")
                //success login redirect previous page
                redirectUrl(history, redirect_uri)
            }).catch(error => {
                setMsg(error.message)
            }).finally(setIsLoading(false))
    }

    //sign in with GitHub
    const signInWithGit = (history, redirect_uri) => {
        setIsLoading(true);
        const provider = new GithubAuthProvider()
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
                setMsg("LogIn Success!!!")
                //success login than redirect previous page
                redirectUrl(history, redirect_uri)
            }).catch(error => {
                setMsg(error.message)
            }).finally(setIsLoading(false))
    }


    // using email and password create new user
    const makeUserWithEmailAndPassword = (email, pass1, fullName, history, redirect_uri) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, pass1)
            .then(result => {
                setName();
                setUser(result.user)
                redirectUrl(history, redirect_uri)
            }).catch(error => {
                setMsg(error.message)
            }).finally(setIsLoading(false))

        // after create user update user name
        const setName = () => updateProfile(auth.currentUser, {
            displayName: fullName, photoURL: "https://casperkruger.co.za/wp-content/uploads/2014/08/Profile-Pic-Demo.png"
        }).then(() => {
            //profile update done
            setMsg("User Created successFully, Now you can login!!!")
        }).catch(error => setMsg(error.message));
    }


    //Login with email and password
    const logInWithEmailAndPassword = (email, pass, history, redirect_uri) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                setUser(result.user)
                setMsg("LogIn Success!!!")
                redirectUrl(history, redirect_uri)
            }).catch(error => {
                setMsg(error.message)
            }).finally(setIsLoading(false))
    }

    //redirect function 
    const redirectUrl = (history, url) => {
        history.push(url)
    }

    //LogOut user
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
            setMsg('')
            setIsLoading(false)
        }).catch(error => {
            setMsg(error.message)
        })
    }

    //collect data from current login user
    useEffect(() => {
        setIsLoading(true)
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])
    return {

        user,
        isLoading,
        msg,
        signInWithGoogle,
        signInWithFacebook,
        signInWithGit,
        makeUserWithEmailAndPassword,
        logInWithEmailAndPassword,
        logOut

    }
}

export default useFirebase;