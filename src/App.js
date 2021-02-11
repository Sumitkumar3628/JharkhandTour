import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="logo"><h1 className="">Johar Jharkhand</h1></div>
          <div className="menu">
            <a href="#">Home</a>
            <a href="#">Gallery</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </nav>
        <main>
          <section>
            <h3>Welcome to Jharkhand</h3>
            <h1>Do Come & Visit <span className="change_content"></span></h1>
            <p>"Jharkhand once is not enough"</p>
            <a href="#" className="btnone">Learn More</a>
            <a href="#" className="btntwo">Sign up here</a>
          </section>
        </main>  
      </header>
    </div>
  );
}

export default App;
