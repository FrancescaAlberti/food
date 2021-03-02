// import something here
import firebaseService from '../services/firebase'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async( /* { app, router, Vue ... } */ ) => {
    // something to do

    const config = {
        apiKey: "AIzaSyDSsmEgD8fcNpOUpvPtnfaUHdPpzl5og-E",
        authDomain: "food-987bb.firebaseapp.com",
        databaseURL: "https://food-987bb.firebaseio.com",
        projectId: "food-987bb",
        storageBucket: "food-987bb.appspot.com",
        messagingSenderId: "529573569459",
        appId: "1:529573569459:web:50110034ec7be4cc34a1c6",
        measurementId: "G-QBD0BL518M"
    };


    firebaseService.fBInit(config)

    // Validation that our service structure is working
    // with a firebase app instance. Does not validate a
    // valid API key.
    console.log(firebaseService.auth())

}