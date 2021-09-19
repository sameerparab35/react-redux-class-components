import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2> Demo- React Redux - Cake with Class</h2>
        <CakeContainer></CakeContainer>

        <hr />
        <h2> Demo- React Redux  Cake with Hooks</h2>
        <HooksCakeContainer></HooksCakeContainer>

        <hr />
        <h2> Demo- React Redux -  IceCream with Class</h2>
        <IceCreamContainer></IceCreamContainer>

        <hr />
        <h2> Demo- React Redux -  IceCream with Hooks</h2>
        <IceCreamContainer></IceCreamContainer>

        <hr />
        <h2>New Cake Container with Payload</h2>
        <NewCakeContainer></NewCakeContainer>

        <hr />
        <h2>Pass props from parent to child</h2>
        <ItemContainer cake></ItemContainer>
        <ItemContainer></ItemContainer>

        <hr />
        <h2>Redux Thunk and  Async Functions</h2>
        <UserContainer></UserContainer>

      </div>
    </Provider>
  );
}

export default App;
