import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/firebase/firebase.init";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // register user
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                // save user to the database
                saveUser(email, name, 'POST');

                // send name to firebase after user created
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                    })
                    .catch((error) => {
                    });

                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    };

    // login user
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const destination = location?.state?.from || '/';
                history.replace(destination);

                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // google sign in
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    // admin check
    useEffect(() => {
        fetch(`https://polar-reef-29268.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // logout
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    };


    // save user info to mongodb
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://polar-reef-29268.herokuapp.com/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then()
    };



    return {
        user,
        isLoading,
        authError,
        admin,
        token,
        registerUser,
        logout,
        loginUser,
        signInWithGoogle,

    }

}

export default useFirebase;