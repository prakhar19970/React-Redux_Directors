import { getAll, gotData, singDir } from "../ReduxComponents/Directorsaction";

const initialState = {
    directors: [],
    director: { id: 0, Director: '' }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'gotData': {
            // console.log(action)
            return {
                directors: action.returnedData
            };
        }
        case "singleDir": {
            // console.log(action.returnedData.id);
            // console.log(action.returnedData.Director);
            return {
                director: action.returnedData,
            }
        }
        default:
            return state;
    }
};
