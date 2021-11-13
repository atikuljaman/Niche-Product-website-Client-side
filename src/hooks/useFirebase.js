import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "../firebase/firebase.init";

initialization();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    console.log(user);

    const auth = getAuth();

    const handleRegisterUser = (name, email, password, location, history) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                setUserName(name)
                history.replace(location?.state?.from || '/')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    const handleLoginUser = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                history.replace(location?.state?.from || '/')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };


    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unsubscribe
    }, []);

    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => { })

    }


    const handleLogout = (location, history) => {
        setLoading(true)
        signOut(auth).then(() => {
            history.replace(location?.state?.from || '/')
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false));
    };


    return {
        user,
        error,
        loading,
        handleRegisterUser,
        handleLoginUser,
        handleLogout
    }
};

export default useFirebase;