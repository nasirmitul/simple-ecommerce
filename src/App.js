import './App.css';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <div className="container">
        <Shop></Shop>
      </div>
    </div>
  );
}

export default App;
