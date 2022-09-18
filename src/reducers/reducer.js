const intialData = {
  list: [],
};
const todoReducer = (state = intialData, action) => {
  switch (action.type) {
    case "Addtodo":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DeleteTodoo":
      const newList = state.list.filter((elm) => elm.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    default:
      return state;
  }
};

export { todoReducer };
