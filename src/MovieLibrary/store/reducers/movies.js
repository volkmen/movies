import { MOVIES_TYPES } from "../actionTypes/movies";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function movies(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case MOVIES_TYPES.GET_MOVIES_FETCH:
      return {
        ...state,
        loading: true,
      };
    case MOVIES_TYPES.GET_MOVIES_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...payload],
        loading: false,
      };
    case MOVIES_TYPES.GET_MOVIES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
