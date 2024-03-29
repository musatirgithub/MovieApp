import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from 'react-hot-toast';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_AUTH_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const register = async (email, password)=>{
    try {
        const {user} = await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Registered Successfully");
        return user;
    } catch (error) {
        toast.error(error.message);
    }
}

export const login = async (email, password)=>{
    try {
        const {user} = await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in Successfully");
        return user;
    } catch (error) {
        toast.error(error.message);
    }
}

export const logout = async ()=>{
    try {
        await signOut(auth);
        toast.success("Logged out Successfully");
        return true;
    } catch (error) {
        toast.error(error.message);
    }
}

const provider = new GoogleAuthProvider();

export const googleSignIn = async ()=>{
    try {
        const {user} = await signInWithPopup(auth, provider);
        toast.success("Logged in Successfully");
        return user;
    } catch (error) {
        toast.error(error.message);
    }
}

export default app;