function setIsUserLogged(state, isLogged) {
    state.isUserLogged = isLogged;
}

function setUserDetails(state, userDetails) {
    state.user.email = userDetails.email;
    state.user.name = userDetails.displayName;
}

export {
    setIsUserLogged,
    setUserDetails
}