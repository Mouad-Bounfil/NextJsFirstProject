import UserEntry from "@/components/UserEntry";
import Link from "next/link";
import { useRouter } from "next/router";
import * as UserApi from "@/network/user-api";
import useSWR from "swr";

export default function Home() {
  const router = useRouter();

  const page = parseInt(router.query.page?.toString() || "1");

  const { data, isLoading } = useSWR(["getUserPage", page], () =>
    UserApi.getUserPage(page)
  );

  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="bg-white flex space-x-12 p-12 justify-center items-center">
            <div className="h-20 w-20 bg-green-300 p-2 animate-spin rounded-md"></div>
        </div>
      </div>
    );

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Get All Users</h1>
      <div className="flex w-full justify-start pl-10 pr-10">
      <div className="flex justify-center gap-4 mt-4">
        {data?.previous && (
          <button
          onClick={() =>
            router.push({ query: { ...router.query, page: page - 1 } })
          }
          type="button"
          className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[4px] text-sm p-2.5 text-center inline-flex items-center me-2"
        > Previous page 
          
        </button>
        )}
        {data?.next && (
          <button
            onClick={() =>
              router.push({ query: { ...router.query, page: page + 1 } })
            }
            type="button"
            className="text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[4px]  text-sm p-2.5 text-center inline-flex items-center me-2"
          > Next Page
            <svg
              className="w-5 h-5 ml-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>
        )}
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.results.map((userEntry) => (
          <div key={userEntry.name}>
            <UserEntry name={userEntry.name} />
          </div>
        ))}
      </div>
      
    </div>
  );
}
