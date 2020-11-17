import {SET_MESSAGE} from '../actions/constants';

export function setMessage(payload) {
    return {type: SET_MESSAGE, payload}
}



// export const setMessage = (message) => dispatch => {
//     dispatch({
//         type: "SET_MESSAGE",
//         payload: message
//     })
// }