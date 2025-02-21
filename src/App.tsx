import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* TODO: add missing routes */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
