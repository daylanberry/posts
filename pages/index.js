import { useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link'

const Index = (props) => {

  return (
    <div>
      <div>Index page</div>
      <ul>
        {
          props.posts.map(post => (
            <li key={post.id}>
              <Link href={`/post?id=${post.id}`}>
                <a>
                  {post.title}
                </a>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

Index.getInitialProps = async (context) => {
  // http://jsonplaceholder.typicode.com/users

  const { data } = await axios.get('http://jsonplaceholder.typicode.com/posts');

  console.log(data[0])

  return {
    posts: data
  }
}

export default Index;