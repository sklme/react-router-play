import {
  ActionFunction,
  Form,
  LoaderFunctionArgs,
  useFetcher,
  useLoaderData,
} from 'react-router-dom';
import { getContact, updateContact } from '~/contact';

export async function loader({ params }: LoaderFunctionArgs) {
  const contact = (await getContact(params.contactId)) as Record<
    string,
    string
  >;

  return contact;
}

export const action: ActionFunction = async function ({ request, params }) {
  const formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get('favorite') === 'true',
  });
};

export default function Contact() {
  const contact = useLoaderData() as Record<string, string> & {
    favorite: boolean;
  };
  if (!contact) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || undefined} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record.')) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

interface FavoriteProps {
  contact: {
    favorite: boolean;
  };
}

function Favorite({ contact }: FavoriteProps) {
  const fetcher = useFetcher();
  let { favorite } = contact;

  if (fetcher.formData) {
    favorite = fetcher.formData.get('favorite') === 'true';
  }
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </fetcher.Form>
  );
}
