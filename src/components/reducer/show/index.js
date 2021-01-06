const initialState = {
    show: ""
};

const reducer = (state = initialState, action) => {
    if (action.type === "ADD" || action.type === "SUBSTRACT") {
        return { show: "A" }
    } else if (action.type === "MULTIPLY" || action.type === "DIVISION") {
        return { show: "B" }
    } else {
        return state;
    }
};
export default reducer;