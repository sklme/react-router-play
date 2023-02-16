import { ActionFunction, redirect } from 'react-router-dom';
import { deleteContact } from '~/contact';

export const action: ActionFunction = async ({ params }) => {
  await deleteContact(params.contactId);
  return redirect('/');
};
