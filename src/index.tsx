import React from 'react';
import ReactDOM from 'react-dom';
import RoutePages from '@/pages/RoutePages';
import { Provider } from 'react-redux';
import configStore from '@/configStore';

const App = () => {
  const { store } = configStore();

  return (
    <div>
      <Provider store={store}>
        <RoutePages />
      </Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
