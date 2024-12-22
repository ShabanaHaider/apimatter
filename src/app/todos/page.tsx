import Link from "next/link"
export default async function Home() {
  const url = await fetch ('https://jsonplaceholder.typicode.com/todos')
  const response = await url.json()
  console.log(response)
  return (
    <main>
      {
        response.map((todos: any) => (
          <div>
           
            <Link href={`/todos/${todos.id}`}>
              <h1 className="text-2xl">

              {todos.userId} &nbsp; {todos.id} &nbsp; {todos.title} &nbsp; {todos.completed.toString()} 
                 
                
              </h1>
            </Link>
          </div>
        ))
      }
    </main>
  );
}