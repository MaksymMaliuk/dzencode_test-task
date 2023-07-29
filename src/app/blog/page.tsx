import Link from "next/link"

export const metadata = {
  title: 'Blog'
}

interface Posts {
  userId: string
  id: string
  title: string
  body: string
}

const getData = async (): Promise<Posts[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

const Products = async () => {
  const data = await getData();

  return ( 
    <>
      <h2>Posts</h2>
      <ul> 
      {data.map(({ title, id }) => (
        <li key={id}>
          <Link href={`/blog/${id}`}>
            {title}
          </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Products;