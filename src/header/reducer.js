let defaultState = {
    inputValut: '',
    list: []
};

export default (state = defaultState, action) => {
    if (action.type == 'change_input_value') {
        var newState = JSON.parse(JSON.stringify(state));
        newState.inputValut = action.inputValut;
        return newState;
    };
    if (action.type == 'add_list') {
        var newState = JSON.parse(JSON.stringify(state));
        newState.list.push(action.inputValut);
        newState.inputValut = '';
        return newState;
    };
    if (action.type == 'delete_item') {
        var newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    };
    return state;
};