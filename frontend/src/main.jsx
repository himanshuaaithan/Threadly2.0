import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { AppRouter } from './app/routes/AppRoutes.jsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
 
  <Provider store={store}>
    <RouterProvider router={AppRouter} />
  </Provider>
)
