import { ADD_FRIEND, IS_INTERNET } from '../Types/Index'


const addFriend = (payload) => ({
    type: ADD_FRIEND,
    payload
})

const isConnected = (payload) => ({
    type: IS_INTERNET,
    payload
})


export { addFriend, isConnected }