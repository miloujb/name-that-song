import './App.css';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import LogInButton from './Components/LogInButton';
import Toolbar from './Components/Toolbar';


function App() {
  return (
    <div className="App">
        <Toolbar />
        <HomePage />
        <LogInButton />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
