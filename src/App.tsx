import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GamePage from './pages/GamePage';
import TokenomicsPage from './pages/TokenomicsPage';
import { ErrorBoundary } from './components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorBoundary><div>Error en la página principal</div></ErrorBoundary>
  },
  {
    path: "/game",
    element: <GamePage />,
    errorElement: <ErrorBoundary><div>Error en el juego</div></ErrorBoundary>
  },
  {
    path: "/tokenomics",
    element: <TokenomicsPage />,
    errorElement: <ErrorBoundary><div>Error en la página de tokenomics</div></ErrorBoundary>
  }
]);

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;