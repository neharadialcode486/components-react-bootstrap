import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AboutFirst } from './components/AboutFirst';
import { AboutSecond } from './components/AboutSecond';
import { AboutThird } from './components/AboutThird';
import { AboutForth } from './components/AboutForth';


function App() {
  return (
    <div>
      <AboutFirst/>
      <AboutSecond/>
      <AboutThird/>
      <AboutForth/>
    </div>
  );
}

export default App;
