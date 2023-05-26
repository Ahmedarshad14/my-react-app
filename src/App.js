//import logo from './logo.svg';
import './App.css';
import Student from './student'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <h2 className="App">
      <Student student1= 'John'  student2= 'Doe' dishName='Biryani' />     
    </h2>
  );
}

export default App;
