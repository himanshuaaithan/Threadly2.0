import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import AppRoutes from './app/routes/AppRoutes.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
)
