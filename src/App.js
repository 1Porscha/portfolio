import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'
// import FileUpload from './FileUpload'

function App() {
  
  
  

  return (
    <div className="App">
      
      <h1>Portfolio</h1>
      <h2>Email: porscha_osler@yahoo.com</h2>
      <Link to='https://github.com/1Porscha'><h2>Github</h2></Link>
      <Link to='https://trading-criteria-checklist.onrender.com/'><h2>Render</h2></Link>
      
    </div>
  );
}

export default App;
