import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialization = () => {
    initializeApp(firebaseConfig);
}

export default initialization;