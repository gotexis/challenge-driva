import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import "./index.scss"
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.REACT_APP_URL_PREFIX}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
)
