// import logo from './logo.svg';
import './App.css';
import Navbar from './componet/Navbar';
import TextForm from './componet/TextForm';

function App() {
  return (
    <>
    
<Navbar title="TextUtil10" aboutText="Hello"/>
{/* <Navbar/> */}
<div className='container my-3'>
  <TextForm heading="enter text to analyze"/>
{/* <TextForm/> */}
</div>
    </>
  );
}

export default App;
