import store from "./store";
import { AnyAction } from "redux";

const setUsersAc = (payload) => {
    return {
        type: 'SET_USERS',
        payload
    }
}

export const setUsers = (payload: any) => {
    store.dispatch(setUsersAc(payload))
}

const initialState = {
    "appName": "user-activity-app"
}

const appReducer =  (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'SET_USERS':
            return {...state, users: action.payload}
    }
}

export default appReducer;