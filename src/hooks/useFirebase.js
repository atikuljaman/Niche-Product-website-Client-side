import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "../firebase/firebase.init";

initialization();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    console.log(user);

    const auth = getAuth();

    const handleRegisterUser = (name, email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, name, email, password)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    const handleLoginUser = (name, email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, name, email, password)
            .then((result) => {
                setUser(result.user)
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


    const handleLogout = () => {
        setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
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