const initialStore = {
    userData : null,
};

const userReducer = (state = initialStore, action) => {
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                userData: action.payload,
            };
            default:
                return state;
    }
};

export default userReducer;