import ClientImage from "./client-image";
import dynamic from 'next/dynamic'
import { ClientGradient } from "./client-gradient";

export default function Home() {
  return (
    <>
    <ClientGradient />
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 py-4">{[1,2,3,4,5,6].map(x => [2,3,6].includes(x) ?
            <div className="rounded-lg w-full p-4 min-h-44">
                <div className="text-xl pb-2">Title</div>
                <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div> : <ClientImage />)
            }</div>
    </>
  );
}
