export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CHARACTERS':
            return action.payload;
    }

    defaults: {
        return state;
    }
}