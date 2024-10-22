import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function App() {
  const lenis = useLenis(({ scroll }) => {
    console.log("Scrolling is happening!", scroll);
  })
  return (
    <>
      <ReactLenis root>
        {/* Add your components here */}
        <div className='bg-black min-vh-100'></div>
        <div className='bg-danger min-vh-100'></div>
        <div className='bg-orange-500 min-vh-100'></div>
        <div className='bg-info min-vh-100'></div>
        <div className='bg-black min-vh-100'></div>
        <div className='bg-danger min-vh-100'></div>
      </ReactLenis>
    </>
  );
}

export default App;
