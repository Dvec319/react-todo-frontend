import { Link, useLoaderData, Form} from 'react-router-dom';

function Show(props) {
	const post = useLoaderData();

	const div = {
		textAlign: 'center',
		border: '3px solid green',
		width: '80%',
		margin: '30px auto',
	};

	return (
    <div style={div}>
      <h1>{post.subject}</h1>
      <h2>{post.details}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Update a Todo</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input type="text" name="subject" placeholder="Subject" defaultValue={post.subject}/>
          <input type="text" name="details" placeholder="Details" defaultValue={post.details}/>
          <button>Update Todo</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button>Delete Todo</button>
        </Form>
      </div>
      <Link to="/">
        <button>Back to Index</button>
      </Link>
    </div>
  );
};


export default Show;
