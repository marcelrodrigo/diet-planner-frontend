import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Main Page</div>
  }
]);

const myProvider = () => (<RouterProvider router={router} />);

export default myProvider;