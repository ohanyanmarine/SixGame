import React, {useEffect} from 'react';
import Main from './src/Main';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/store/store';

function App() {
  return (
    <ReduxProvider store={store}>
      <Main />
    </ReduxProvider>
  );
}

export default App;
