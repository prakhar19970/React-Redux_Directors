import { GET_DIR } from "../../redux/actionTypes";

const initialState = {
    directors: []
};


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DIR:
            return {
                ...state,
                directors: action.payload
            };
        default:
            return state;
    }
}