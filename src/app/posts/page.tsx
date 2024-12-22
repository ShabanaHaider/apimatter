import Link from "next/link"
export default async function Home() {
  const url = await fetch ('https://jsonplaceholder.typicode.com/posts')
  const response = await url.json()
  console.log(response)
  return (
    <main>
      {
        response.map((posts: any) => (
          <div>
           
            <Link href={`/posts/${posts.id}`}>
              <h1 className="text-2xl">

              {posts.userId} &nbsp; {posts.id} &nbsp; {posts.title} &nbsp; {posts.body}  
                 
                
              </h1>
            </Link>
          </div>
        ))
      }
    </main>
  );
}
