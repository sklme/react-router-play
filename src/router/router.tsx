import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '~/error-page';
import Contact, { loader as contactLoader } from '~/routes/contact';
import EditContact, { action as editAction } from '~/routes/edit';
import Root, {
  loader as rootLoader,
  action as rootAction,
} from '~/routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
    loader: rootLoader,
    action: rootAction,
  },
]);

export default router;
