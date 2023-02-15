import { createBrowserRouter } from 'react-router-dom';
import Root from '~/routes/root';
import ErrorPage from '~/error-page';
import Contact from '~/routes/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: 'contacts/:contactId',
    element: <Contact />,
  },
]);

export default router;
