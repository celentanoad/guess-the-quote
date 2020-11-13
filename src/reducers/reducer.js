const defaultState = {
    message: null
};

function reducer(state = defaultState, action) {
    switch(action.type){
        case "SET_MESSAGE":
            return {
                ...state,
                message: action.payload
            };
        default: return state;
    };
};

export default reducer;