// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGwx6zXbnDAE3d5VwRoTmVEnr5pangaCM",
    authDomain: "dope-clothing.firebaseapp.com",
    projectId: "dope-clothing",
    storageBucket: "dope-clothing.appspot.com",
    messagingSenderId: "1039417729460",
    appId: "1:1039417729460:web:2b088f798c59421bec92e1",
    measurementId: "G-GTY7CM7TKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const createUserProfile = async (user, additionalData) => {
    if (!user) return;

    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) {
        const { displayName, email } = user
        const createdAt = new Date()
        await setDoc(docRef, { displayName, email, createdAt, ...additionalData })
    }
    return docRef
}

// setup provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const auth = getAuth(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)