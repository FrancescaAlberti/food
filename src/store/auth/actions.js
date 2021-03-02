import { setIsUserLogged } from './mutations';
import { Notify } from 'quasar'
import firebaseService from '../../services/firebase'

const handler = (context) => {}

/* const checkIsUserLogged = (context) => {
    var isUserLogged = firebaseService.auth().currentUser ? true : false;
    context.commit('setIsUserLogged', isUserLogged);
} */
const checkIsUserLogged = (context) => {
    firebaseService.auth().onAuthStateChanged(user => {
        if (user) {
            context.commit('setIsUserLogged', true)
            context.commit('setUserDetails', user)
        } else {
            context.commit('setIsUserLogged', false);
            context.commit('setUserDetails', user)
        }
    })
}


/* login  */
const logIn = (context) => {
    firebaseService.auth().signInAnonymously();
    context.commit('setIsUserLogged', true);
}

const logInWithEmailAndPassword = function(context, payload) {
    firebaseService.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
            context.commit('setIsUserLogged', true);
            context.commit('setUserDetails', user)
        })
        .catch(function(error) {
            Notify.create({
                message: error.message,
                icon: "warning"
            })
        });;
}

/* logout */
const logOut = (context) => {
    firebaseService.auth().signOut();
    context.commit('setIsUserLogged', false);
}

/* register EmailPassword */
const registerWithEmailAndPassword = (context, payload) => {

    firebaseService.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(function(user) {
        context.commit('setIsUserLogged', true);
        context.commit('setIsUserLogged', true);
        Notify.create({
            message: "Registered",
            icon: "success"
        })
    }, function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            Notify.create({
                message: error.message,
                icon: "warning"
            })
        } else {
            Notify.create({
                message: error.message,
                icon: "warning"
            })
        }
    });

}


export {
    /*     checkIsUserLogged,
     */
    checkIsUserLogged,
    logIn,
    logInWithEmailAndPassword,
    logOut,
    registerWithEmailAndPassword
}