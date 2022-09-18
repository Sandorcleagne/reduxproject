const addTodo = (data) => {
  return {
    type: "Addtodo",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

const deleteTodo = (id) => {
  return {
    type: "DeleteTodo",
    id: id,
  };
};

const removeTodo = () => {
  return {
    type: "RemoveTodos",
  };
};

export { addTodo, deleteTodo, removeTodo };
