import { Metadata } from "next"

type Props = {
  params: {
    id: string
  }
}

const getData = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
}

export async function generateMetadata({
   params: { id } 
  }: Props): Promise<Metadata> {
    const { title } =  await getData(id)
  return {
    title
  }
}

const Post = async ({ params: { id } }: Props) => {
  const { 
    title,
    body 
  } = await getData(id);

  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
    </>
    )  
}

export default Post;