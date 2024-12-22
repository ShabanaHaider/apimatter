import Link from "next/link"
export default async function Home() {
  const url = await fetch ('https://jsonplaceholder.typicode.com/photos')
  const response = await url.json()
  console.log(response)
  return (
    <main>
      {
        response.map((photos: any) => (
          <div key={photos.id}>
            
            <Link href={`/photos/${photos.id}`}>
              <h1 className="text-2xl">

              {photos.albumId} &nbsp; {photos.id} &nbsp; {photos.title} &nbsp; {photos.url}  &nbsp; {photos.thumbnailUrl}  
                 
                
              </h1>
            </Link>
          </div>
        ))
      }
    </main>
  );
}
