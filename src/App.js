import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CounterClients from './components/counter/CounterClients';
import CounterPlatform from './components/counter/CounterPlatform';


function App() {
  return (
    <>
      <CounterClients />
      <CounterPlatform />
    </>
  );
}

export default App;
