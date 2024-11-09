import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Persona from './pages/Persona';
import Credits from './pages/Credits';
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route>
      <Route index element={<LandingPage />} />
      <Route path="home" element={<LandingPage />} />
      <Route path="persona" element={<Persona />} />
      <Route path= 'credits' element={<Credits/>} />
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