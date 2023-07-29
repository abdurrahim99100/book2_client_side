import ReactDOM from 'react-dom/client'
import './index.css'

// import route;
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <RouterProvider router={router} />
  </div>,
)
