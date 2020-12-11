const AGREGAR = "AGREGAR";
const ELIMINAR = "ELIMINAR";

export const agregarTarea = (x) => ({
  type: AGREGAR,
  data: {
    id: Math.random(),
    valor: x,
  },
});

export const eliminarTarea = (id) => ({
  type: ELIMINAR,
  id,
});
