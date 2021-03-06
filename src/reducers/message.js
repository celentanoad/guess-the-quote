import { SET_MESSAGE } from '../actions/constants';

const defaultState = {
    message: null
};

function message(state = defaultState, action) {
    switch(action.type){
        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload
            };
        default: return state;
    };
};

export default message;


// const initialState = {message: null};



// export default setMessage(state = initialState, action) => {
//     switch(action.type) {
//         case SET_MESSAGE:
//             return {
//                 ...state,
//                 message: action.payload
//             };
//         default: return state;
//     }
// }
// const defaultState = {
//     message: null,
//     order: 0,
//     image: null,
//     realQuote: null,
//     fakeQuote: null
// };

// function reducer(state = defaultState, action) {
//     switch(action.type){
//         case "SET_MESSAGE":
//             return {
//                 ...state,
//                 message: action.payload
//             };
//         case "SET_ORDER":
//             return {
//                 ...state,
//                 order: action.payload
//             };
//         case "SET_IMAGE":
//             return {
//                 ...state,
//                 image: action.payload
//             };
//         case "SET_REAL_QUOTE":
//             return {
//                 ...state,
//                 quote: action.payload
//             };
//         case "SET_FAKE_QUOTE":
//             return {
//                 ...state,
//                 quote: action.payload
//             }
//         default: return state;
//     };
// };

// export default reducer;