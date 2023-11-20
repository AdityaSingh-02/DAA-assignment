"use client";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function Home() {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault;
    router.push("dijkstra");
  };
  return (
    <main className="flex md:h-screen md:flex-col flex-col-reverse items-center md:justify-around justify-center pt-24 md:p-24 space-y-4">
      <div className="flex flex-col md:justify-center place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[&#39;&#39;] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[&#39;&#39;] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-3xl font-semibold">Dijkstra Algorithm</h1>
        <div className="w-[95%] mt-20 md:w-[80%] bg-gray-800 p-10 rounded-lg">
          <h2>
            Dijkstra&#39;s algorithm, named after Dutch computer scientist
            Edsger W. Dijkstra, is a widely used algorithm for finding the
            shortest paths between nodes in a graph. The algorithm operates on
            graphs with non-negative edge weights and is often employed in
            network routing and pathfinding applications.
          </h2>
          <p className="font-bold text-2xl text-gray-300">
            Here&#39;s a basic overview of how Dijkstra&#39;s algorithm works:
          </p>
          <ul className="py-2 my-3">
            <li className="font-bold pb-2">
              1. Initialization
              <ul className="font-normal text-gray-300">
                <li>
                  - Assign a tentative distance value to every node. Set the
                  initial node&#39;s distance to 0 and all other nodes&#39; distances to
                  infinity.
                </li>
                <li>- Mark all nodes as unvisited.</li>
              </ul>
            </li>
            <li className="font-bold pb-2">
              2. Current Node Selection:
              <ul className="font-normal text-gray-300">
                <li>
                  - elect the unvisited node with the smallest tentative
                  distance as the current node.
                </li>
              </ul>
            </li>
            <li className="font-bold pb-2">
              3. Neighbor Evaluation:
              <ul className="font-normal text-gray-300">
                <li>
                  - For each neighbor of the current node, calculate its
                  tentative distance through the current node. Compare this
                  tentative distance to the current assigned value and assign
                  the smaller one.
                </li>
              </ul>
            </li>
            <li className="font-bold pb-2">
              4. Mark as Visited:
              <ul className="font-normal text-gray-300">
                <li>
                  - After considering all neighbors of the current node, mark
                  the current node as visited.
                </li>
              </ul>
            </li>
            <li className="font-bold pb-2">
              5. Update Current Node:
              <ul className="font-normal text-gray-300">
                <li>
                  - Select the unvisited node with the smallest tentative
                  distance as the new &quot;current node&quot; and repeat steps 3-4.
                </li>
              </ul>
            </li>
            <li className="font-bold pb-2">
              6. Termination:
              <ul className="font-normal text-gray-300">
                <li>
                  - Continue until all nodes have been visited, or if the
                  destination node has been marked visited. The algorithm
                  terminates when all nodes have been visited or when the
                  destination node has its final, shortest distance.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex pb-10 z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <Button
          variant="outlined"
          onClick={handleClick}
          endIcon={<AutoAwesomeIcon />}>
          Project
        </Button>
      </div>
    </main>
  );
}
