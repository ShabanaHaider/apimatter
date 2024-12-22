import Link from "next/link"
export default async function Home() {
  const url = await fetch ('https://jsonplaceholder.typicode.com/albums')
  const response = await url.json()
  console.log(response)
  return (
    <main>
      {
        response.map((albums: any) => (
          <div key={albums.id}>
            
            <Link href={`/albums/${albums.id}`}>
              <h1 className="text-2xl">

              {albums.userId} &nbsp; {albums.id} &nbsp; {albums.title}  
                 
                
              </h1>
            </Link>
          </div>
        ))
      }
    </main>
  );
}