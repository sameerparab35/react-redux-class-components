import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2> Demo- React Redux with Class</h2>
        <CakeContainer></CakeContainer>
      </div>
    </Provider>
  );
}

export default App;
