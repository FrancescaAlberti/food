import { Notify } from 'quasar'
import firebaseService from '../../services/firebase'


/* const checkIsUserLogged = (context) => {
    var isUserLogged = firebaseService.auth().currentUser ? true : false;
    context.commit('setIsUserLogged', isUserLogged);
} */

const pullUserTheme = (context) => {
    let userTheme = localStorage.get('userTheme');
    if (userTheme) {
        context.commit('setIsDarkTheme', userTheme)
    }
}

export {
    pullUserTheme
}