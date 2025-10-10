import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aula1 from './pages/Aula1';
import Aula2 from './pages/Aula2';
import Aula3 from './pages/Aula3';
import Aula4 from './pages/Aula4';
import Aula5 from './pages/Aula5';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aula1" element={<Aula1 />} />
                <Route path="/aula2" element={<Aula2 />} />
                <Route path="/aula3" element={<Aula3 />} />
                <Route path="/aula4" element={<Aula4 />} />
                <Route path="/aula5" element={<Aula5 />} />
            </Routes>
        </Router>
    );
}

export default App;
