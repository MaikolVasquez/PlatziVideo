const setFavorite = payload =>  ({        
        type: "SET_FAVORITE",
        payload
});
const deleteFavorite = payload => ({
    type: "DELETE_FAVORITE",
    payload
})

const loginRequest = payload => ({
    type: "LOGIN_REQUEST",
    payload
})

const logOutRequest = payload => ({
    type: "LOGOUT_REQUEST",
    payload
})

const registerRequest = payload => ({
    type: "REGISTER_REQUEST",
    payload
})

const getVideoSource = payload => ({
    type: "GETVIDEOSOURCE_REQUEST",
    payload
})

export {setFavorite, deleteFavorite, loginRequest, logOutRequest, registerRequest, getVideoSource} 

