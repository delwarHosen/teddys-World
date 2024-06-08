import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../firebase/firebase.config';
import useAxiosPublic from '../../hooks/useAxiosPublic';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

    // const googleProvider = new GoogleAuthProvider();

    // Create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google method

    // const googleSignIn = () => {
    //     setLoading(true)
    //     signInWithPopup(auth, googleProvider)
    // }

    // logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // userProfile update
    const userUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("Current user is:", currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('Access-tokenn', res.data.token)
                            setLoading(false)
                        }
                    })
            }
            else {
                localStorage.removeItem("Access-token")
                setLoading(false)
            }
            
        })
        return () => {
            return unsubscribe()
        }
    }, [axiosPublic])

    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        // googleSignIn,
        logOut,
        userUpdateProfile
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;