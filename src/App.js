import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Error404 from './Components/Error404/Error404';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/postDetails/:id' element={<PostDetails />} />
          <Route path='*' element={<Error404 />} />
        </Routes>

      </Router>   
    </div>
  );
}

export default App;
