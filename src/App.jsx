import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Persona from './pages/Persona';
import Programming from './pages/Programming';
import Food from './pages/Food';
import Reading from './pages/Reading';
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route>
      <Route index element={<LandingPage />} />
      <Route path="persona" element={<Persona />} />
      <Route path="food" element={<Food/>} />
      <Route path="reading" element={<Reading/>} />
      <Route path="programming" element={<Programming />} />
    </Route>
  )
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}