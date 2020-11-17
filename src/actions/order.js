export const setOrder = (order) => dispatch => {
    dispatch({
        type: "SET_ORDER",
        payload: order
    })
}