const dataInicial = [];

const todos = (state = dataInicial, action) => {
  switch (action.type) {
    case "AGREGAR":
      return [...state, action.data];
    case "ELIMINAR":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default todos;
