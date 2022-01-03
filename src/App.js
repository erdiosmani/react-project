import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/HomeScreen/Home';
import SingleMovie from './components/Routing/SingleMovie';
import Comedy from './components/ComedyMovies/Comedy';
import Action from './components/ActionMovies/Action';
import Fantasy from './components/FantasyMovies/Fantasy';
import Thriller from './components/ThrillerMovies/Thriller';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Routes>
          <Route path="/movie/:id" element={<SingleMovie/>} />
        </Routes>
        <Routes>
          <Route path="action" element={<Action/>}/>
        </Routes>
        <Routes>
          <Route path="comedy" element={<Comedy/>}/>
        </Routes>
        <Routes>
          <Route path="fantasy" element={<Fantasy/>}/>
        </Routes>
        <Routes>
          <Route path="thriller" element={<Thriller/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
