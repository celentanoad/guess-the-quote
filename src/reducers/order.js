import { SET_ORDER } from "../actions/constants";

const defaultState = {
    order: 0
};

function order(state = defaultState, action) {
    switch(action.type){
        case SET_ORDER:
            return {
                ...state,
                order: action.payload
            };
        default: return state;
    };
};

export default order;
