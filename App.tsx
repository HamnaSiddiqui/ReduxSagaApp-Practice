import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {Root} from './src/containers/Root';

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
