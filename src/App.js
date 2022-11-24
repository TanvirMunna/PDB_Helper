import { RouterProvider } from 'react-router';
import './App.css';
import { routers } from './Pages/Routers/Router/Router';

function App() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <RouterProvider router={ routers} />
    </div>
  );
}

export default App;
