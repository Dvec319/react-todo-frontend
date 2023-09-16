import Post from "../components/Post";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";

function Index(props) {
    // fetch the loaderdata using the useLoaderData hook
    const todos = useLoaderData()

    return <>
  <div style={{textAlign: "center"}}>
  <h2>Create a Todo</h2>
  <Form action="/create" method="post">
      <input type="text" name="subject" placeholder="Subject"/>
      <input type="text" name="details" placeholder="Details"/>
      <button>Create New Todo</button>
  </Form>
  </div>
  {todos.map((post) => <Post post={post} key={post.id} />)}
  </>;

}

export default Index;
