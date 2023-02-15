import { createBrowserRouter } from 'react-router-dom';
import Root from '~/routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
  },
]);

export default router;
