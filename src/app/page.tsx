import Link from "next/link";

    export default function Feature() {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center mt-10">
            <h2 className="text-4xl font-extrabold">
              API, Dynamic Routing, Dynamic Rendering Practice
            </h2>
    
            <div className="flex flex-row justify-center mt-40 gap-14">
              <Link href="/todos" passHref>
                <h2 className="cursor-pointer text-2xl text-blue-600 font-bold">
                  TODOS
                </h2>
              </Link>
    
              <Link href="/albums" passHref>
                <h2 className="cursor-pointer text-2xl text-blue-600 font-bold">
                  ALBUMS
                </h2>
              </Link>
    
              <Link href="/comments" passHref>
                <h2 className="cursor-pointer text-2xl text-blue-600 font-bold">
                  COMMENTS
                </h2>
              </Link>
    
              <Link href="/photos" passHref>
                <h2 className="cursor-pointer text-2xl text-blue-600 font-bold">
                  PHOTOS
                </h2>
              </Link>
    
              <Link href="/posts" passHref>
                <h2 className="cursor-pointer text-2xl text-blue-600 font-bold">
                  POSTS
                </h2>
              </Link>
    
              <Link href="/users" passHref>
                <h2 className="cursor-pointer text-2xl text-blue-600 font-bold">
                  USERS
                </h2>
              </Link>
            </div>
          </div>
        </div>
      );
    }