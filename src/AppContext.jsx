import React, { createContext, useReducer } from 'react';
console.log(React);

// Definir el estado inicial
const initialState = {
  theme: 'light',  // Puede ser 'light' o 'dark'
  // Puedes agregar más propiedades aquí si es necesario
};

// Reducer que maneja el cambio de tema
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

// Crear el contexto
export const AppContext = createContext();

// Crear el proveedor que envolverá la aplicación
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
