import Link from "next/link";

export default async function Home() {
  const url = await fetch('https://jsonplaceholder.typicode.com/users');
  const response = await url.json();
  console.log(response);

  return (
    <main>
      {
        response.map((users: any) => (
          <div key={users.id}> 
            <Link href={`/users/${users.id}`}>
              <h1 className="text-2xl">
                {users.id} &nbsp; {users.name} &nbsp;
                {users.username} &nbsp; {users.email} &nbsp;
                
                
                {users.address.street}  &nbsp;   {users.address.suite} 
                 &nbsp; {users.address.city}  &nbsp; {users.address.zipcode}
              </h1>
            </Link>
          </div>
        ))
      }
    </main>
  );
}