import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <div className='bg-black min-vh-100'></div>
      <div className='bg-danger min-vh-100'></div>
      <div className='bg-orange-500 min-vh-100'></div>
      <div className='bg-info min-vh-100'></div>
      <BackToTop />
    </>
  );
}

export default App;
