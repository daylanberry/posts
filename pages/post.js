import axios from 'axios';
const Post = ({id, comments}) => {
  return (
    <div>
      <h1>Post page at post {id}</h1>
      {
        comments.map((comment, i) => (
          <Comment email={comment.email} body={comment.body} />
        ))
      }
    </div>
  )
}

const Comment = ({ email, body}) => (
  <div>
    <h5>{email}</h5>
    <p>{body}</p>
  </div>
)

Post.getInitialProps = async ({ query }) => {
  console.log(`http://jsonplaceholder.typicode.com/comments?postId=${query.id}`)
  const { data } = await axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${query.id}`)

  return {...query, comments: data}
}

export default Post