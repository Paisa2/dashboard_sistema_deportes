import { createContext, useContext, useReducer } from "react";


const inicialState = {
    theme: 'light',
    drawer: false
}

function reducer(state, action) {
  switch(action.type) {
    case 'drawer':
      return { ...state, drawer: !state.drawer}
    case 'theme-switch':
      return {...state, theme: state.theme === 'light' ? 'dark' : 'light'}
    default:
      throw new Error();
  }
}

const AppStatesContext = createContext({});
export const useAppState = () => useContext(AppStatesContext);

function AppState({ children }) {

  const [state, dispatch] = useReducer(reducer, inicialState);

  const value = { state, dispatch }

  return (
      <AppStatesContext.Provider value={value}>
          {children}
      </AppStatesContext.Provider>
  )
}

export default AppState