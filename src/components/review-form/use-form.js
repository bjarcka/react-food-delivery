import { useReducer } from "react";

const INITIAL_FORM = {
  name: "",
  text: "",
  rating: 1,
};

const SET_NAME_ACTION = "setName";
const SET_TEXT_ACTION = "setText";
const SET_ADDRESS_ACTION = "setAddress";
const CLEAR_ACTION = "clear";
const DECREMENT_RATING_ACTION = "decrement";
const INCREMENT_RATING_ACTION = "increment";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION: {
      return { ...INITIAL_FORM, name: payload };
    }
    case SET_TEXT_ACTION: {
      return { ...state, text: payload };
    }
    case SET_ADDRESS_ACTION: {
      return { ...state, address: payload };
    }
    case DECREMENT_RATING_ACTION: {
      return { ...state, rating: Math.max(state.rating - 1, 1) };
    }
    case INCREMENT_RATING_ACTION: {
      return { ...state, rating: Math.min(state.rating + 1, 5) };
    }
    case CLEAR_ACTION: {
      return INITIAL_FORM;
    }
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const onNameChange = (name) => {
    dispatch({ type: SET_NAME_ACTION, payload: name });
  };

  const onTextChange = (text) => {
    dispatch({ type: SET_TEXT_ACTION, payload: text });
  };

  const onAddressChange = (address) => {
    dispatch({ type: SET_ADDRESS_ACTION, payload: address });
  };

  const onRatingDecrement = (rating) => {
    dispatch({ type: DECREMENT_RATING_ACTION, payload: rating });
  };

  const onRatingIncrement = (rating) => {
    dispatch({ type: INCREMENT_RATING_ACTION, payload: rating });
  };

  const clear = () => {
    dispatch({ type: CLEAR_ACTION });
  };

  return {
    form,
    onNameChange,
    onTextChange,
    onAddressChange,
    onRatingDecrement,
    onRatingIncrement,
    clear,
  };
};
