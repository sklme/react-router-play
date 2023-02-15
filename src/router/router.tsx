import { createBrowserRouter } from 'react-router-dom';
import Root from '~/routes/root';
import ErrorPage from '~/error-page';
import Contact from '~/routes/contact';
import { loader as rootLoader } from '~/routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
    loader: rootLoader,
  },
]);

export default router;
