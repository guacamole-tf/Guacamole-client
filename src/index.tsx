import React from "react";
import ReactDOM from 'react-dom';
import RoutePages from "@/pages/RoutePages";

const App = () => {

  return (
    <div>
      <RoutePages />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);