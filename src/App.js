import './assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Router from './routes/routes';
const App = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center page_height"
    >
      <Router/>
    </div>
  );
}

export default App;
