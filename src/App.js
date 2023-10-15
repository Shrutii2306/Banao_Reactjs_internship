import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SubMenu from './components/SubMenu';
import Content from './components/Content';
import SubMenu2 from './components/SubMenu2';

function App() {
  return (
    <div className="App">
      <div className='navbar-div'>
        <Navbar />
      </div>

      <Header/>

      <div className='sub-menu-div1'>        
        <SubMenu/>
      </div>
      <div className='sub-menu-div2'>
        <SubMenu2/>
      </div>

      <Content/>
    </div>
  );
}

export default App;
