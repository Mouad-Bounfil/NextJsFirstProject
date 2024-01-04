import useUser from "@/hooks/useUser";
import Link from "next/link";
import styles from "@/styles/PokemonEntry.module.css";
import Image from "next/image";

export default function UserEntry({ name }: { name: string }) {
  const { user, userLoading } = useUser(name);

  return (
    <Link href={"/" + name}>
      <div className={styles.entry}>
        {userLoading && (
          <div className="bg-white flex space-x-12 p-12 justify-center items-center">
            <div className="h-20 w-20 bg-green-300 p-2 animate-spin rounded-md"></div>
        </div>
        )}
        {user && (
          <div className="m-10 max-w-sm">
          <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
            <div className="relative mx-auto w-36 rounded-full">
              <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
              <img
                className="w-35 h-35 bg-gray-300 rounded-full mb-4"
                src={user?.image}
                alt=""
              />
            </div>
            <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
            {user?.username}
            </h1>
            <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
            {user?.university}
            </h3>
            <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
            {user?.company?.department} - {user?.company?.name} - {user?.company?.title} 
            </p>
            <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
              <li className="flex items-center py-3 text-sm">
                <span>Status</span>
                <span className="ml-auto">
                  <span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
                    Open for work
                  </span>
                </span>
              </li>
              <li className="flex items-center py-3 text-sm">
                <span>BirthDate</span>
                <span className="ml-auto">{user?.birthDate}</span>
              </li>
            </ul>
          </div>
        </div>
        )}
      </div>
    </Link>
  );
}
