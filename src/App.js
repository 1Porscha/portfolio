import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'
// import FileUpload from './FileUpload'

function App() {
  

  

  return (
    <div className="App">
      
      <h1>Portfolio</h1>
      <h3>Email: porscha_osler@yahoo.com</h3>
      <Link to='https://github.com/1Porscha'><h3>Github</h3></Link>
      <Link to='www.linkedin.com/in/porschaosler'><h3>Linkedin Page</h3></Link>
      <Link to='https://dashboard.render.com/web/srv-cg4fnokeoogtrlsdcc1g'><h3>Render</h3></Link>
    </div>
  );
}

export default App;
