import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'
// import FileUpload from './FileUpload'

function App() {
  
  
  

  return (
    <div className="App">
      
      <h1>Portfolio</h1>
      <h2>Please email me, if you have any questions</h2>
      <h3>Email: porscha_osler@yahoo.com</h3>
      <h2>Click the link to view all my projects</h2>
      <Link to='https://github.com/1Porscha'><h3>Github</h3></Link>
      <h2>Click the link to create and see the function of my checklist</h2>
      <Link to='https://trading-criteria-checklist.onrender.com/'><h3>Render</h3></Link>
      <h2>Click the link to watch the video of my online winter store</h2>
      <Link to='https://youtu.be/PlBDjVFok54'><h3>YouTube</h3></Link>
      <h2>Click the link to view code of my space battle project</h2>
      <Link to='https://github.com/1Porscha/SpaceBattleMod1Project'><h3>Space Battle Github Link</h3></Link>
    </div>
  );
}

export default App;
