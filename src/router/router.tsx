import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '~/error-page';
import Index from '~/routes';
import Contact, { loader as contactLoader } from '~/routes/contact';
import { action as destroyAction } from '~/routes/destroy';
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
        index: true,
        element: <Index />,
      },
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
      {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
        errorElement: <div>删除失败，你这不切实际的毛虫！</div>,
      },
    ],
    loader: rootLoader,
    action: rootAction,
  },
]);

export default router;
