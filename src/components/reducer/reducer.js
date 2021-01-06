const initialState = {
    total: '',
    data: [{
        id: 1,
        value: '',
        checklist: false,
        name: 'input1'
    },
    {
        id: 2,
        value: '',
        checklist: false,
        name: 'input2'
    },
    {
        id: 3,
        value: '',
        checklist: false,
        name: 'input3'
    },
]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "OPERATOR":
            return {
                ...state, total:action.a
            }
        case "INPUT":
            const newData = state.data.find(item => item.id === action.id)
            const arr = state.data.filter((item) => {
                return item.id !== action.id
            })
            const newObj = {...newData, value:Number(action.value)}
            arr.push(newObj)
            return {
                data: arr.sort(function(a, b){
                    return a.id - b.id
                })
            }
        case "CHECKBOX":
            const newData2 = state.data.find(item => item.id === action.id)
            const arr2 = state.data.filter((item) => {
                return item.id !== action.id
            })
            const newObj2 = {...newData2, checklist:!newData2.checklist}
            arr2.push(newObj2)
            return {
                data: arr2.sort(function(a, b){
                    return a.id - b.id
                })
            }
        default:
            return state;
    }
}

export default reducer;