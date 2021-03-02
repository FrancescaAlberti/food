function getIsUserLogged(state) {
    return state.isUserLogged;
}

function getUserDetails(state) {
    return state.user;
}

export {
    getIsUserLogged,
    getUserDetails

}