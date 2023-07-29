import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href='/blog'>Blog</Link>
    </>
  )
}

export default HomePage;