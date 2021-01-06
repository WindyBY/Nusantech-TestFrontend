const initialState = {
    counter: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "MULTIPLY":
            return {
                counter: action.input1 * action.input2 * action.input3
            };
        case "DIVISION":
            return {
                counter: action.input1 / action.input2 / action.input3
            };
        default:
            return state;
    }
}

export default reducer;