import { createBrowserRouter } from 'react-router-dom';
import Root from '~/routes/root';
import ErrorPage from '~/error-page';
import Contact from '~/routes/contact';
import { loader as rootLoader, action as rootAction } from '~/routes/root';

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
    action: rootAction,
  },
]);

export default router;
