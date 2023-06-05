import React, {useState} from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import SearchForm from './components/SearchForm/SearchForm';
import { authContext } from './helper/helper';
import './index.css';

function App() {

  const [logged, setLogged] = useState(false);

  return (
    <authContext.Provider value={{ logged, setLogged }}>
      <div className="App">
        <LoginForm />
        <SearchForm />
      </div>
    </authContext.Provider>
  );
}

export default App;
