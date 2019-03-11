const defaultState = {
    title:'首页'
};

export default (state = defaultState, action) => {
    if (action.type == 'qh_title') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.title = action.title;
        return newState;
    };
    return state;
}