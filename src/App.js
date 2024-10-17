import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SideBar from './components/sidebar/SideBar';


function App() {
  return (
    <div className='max-w-[1920px] mx-auto position-relative'>
      <SideBar />
    </div>
  );
}

export default App;
