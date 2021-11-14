import { initializeApp, } from "firebase/app";
import { getFirestore, setDoc, doc, getDoc, collection, writeBatch, onSnapshot } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collRef = collection(db, collectionKey)
    const batch = writeBatch(db)
    objectsToAdd.forEach(item => {
        const newDocRef = doc(collRef)
        batch.set(newDocRef, item)
    })
    return await batch.commit()
}

export const convertCollectionSnapToMap = (collectionSnap) => {
    return collectionSnap.docs
        .reduce((acc, doc) => {
            const data = doc.data()
            const key = data.title.toLowerCase();
            acc[key] = {
                id: doc.id,
                title: data.title,
                items: data.items,
                routeName: encodeURI(key)
            }
            return acc
        }, {})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, () => {
            unsubscribe();
            resolve(auth.currentUser)
        }, reject)
    })
}

// setup provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const auth = getAuth(app)

export const signInWithGoogle = async () => signInWithPopup(auth, googleProvider)
export const signInWithCredintial = async (email, password) => await signInWithEmailAndPassword(auth, email, password)