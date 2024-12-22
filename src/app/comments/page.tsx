import Link from "next/link"
export default async function Home() {
  const url = await fetch ('https://jsonplaceholder.typicode.com/comments')
  const response = await url.json()
  console.log(response)
  return (
    <main>
      {
        response.map((comments: any) => (
          <div key={comments.id}>
           
            <Link href={`/comments/${comments.id}`}>
              <h1 className="text-2xl">

              {comments.postId} &nbsp; {comments.id} &nbsp; {comments.name} &nbsp; {comments.email}  &nbsp; {comments.body}  
                 
                
              </h1>
            </Link>
          </div>
        ))
      }
    </main>
  );
}