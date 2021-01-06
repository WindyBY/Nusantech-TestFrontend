const initialState = {
    input1: "",
    input2: "",
    input3: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "onChangeInput":
            console.log(state);
            return { ...state, [action.name]: Number(action.value) };
        default:
            return state;
    }
}
export default reducer;