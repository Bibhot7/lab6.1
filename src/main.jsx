import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './store/UserContext.jsx'
import { CounterProvider } from './store/CounterContext.jsx'
import { Provider } from 'react-redux';
import store from './store/store.js';
import { fetchTodos } from './store/Reducers/TodosSlice.js';
store.dispatch(fetchTodos());


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <UserProvider>
    <CounterProvider>
      <App />
      </CounterProvider>
    </UserProvider>
    </Provider>
    
  </React.StrictMode>,
)
