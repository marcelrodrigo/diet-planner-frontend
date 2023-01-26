import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  }
]);

const myProvider = () => (<RouterProvider router={router} />);

export default myProvider;