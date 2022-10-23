import { ADD_FRIEND, IS_INTERNET } from '../Types/Index';

const initialState = {
    friendsList: [],
    isInternetConnectivity: false,

};

const AddFriendReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                friendsList: action.payload,
            };
        case IS_INTERNET:
            return {
                ...state,
                isInternetConnectivity: action.payload,
            };
        default:
            return state;
    }
}

export { AddFriendReducer }