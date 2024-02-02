import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Labs } from './components/Labs';
import { About } from './components/About';
import { Support } from './components/Support';
import { NotFound } from './components/NotFound';
import { Link,NavLink } from 'react-router-dom';
import { MainHeader } from './components/MainHeader';

function App() {
  return (
    <div className='App'>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/support">Support
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About
            </NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs
            </NavLink>
          </li>
        </ul>
      </nav>



      <Routes>
        <Route path='/' element={<MainHeader></MainHeader>}>
        
        <Route index element={<Home></Home>}/>
        {/* above index is used as default route */}
        <Route path='/support' element={<Support/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/labs' element={<Labs/>}/>
        <Route path='*' element={<NotFound/>}/>
        {/* APP */}

        </Route>
      </Routes>
    </div>
  );
}

export default App;
