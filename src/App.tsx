import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTE_ARR } from './routes/Route';
import './styles/core-index.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTE_ARR.map((el) => (
          <Route path={el.path} key={el.path} element={el.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
