import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from 'react-hot-toast';

const firebaseConfig = {
    apiKey: "AIzaSyB9ddtzKdNaPLfetueBAu8Ar3oyIoryl4A",
    authDomain: "movieapp-c35db.firebaseapp.com",
    projectId: "movieapp-c35db",
    storageBucket: "movieapp-c35db.appspot.com",
    messagingSenderId: "935367212026",
    appId: "1:935367212026:web:83e595785254df56140243"
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