const initialState = {
  count: 0,
  image: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'SELECTED':
      return {
        ...state,
        image: state.image,
      };
    default:
      return initialState;
  }
}
