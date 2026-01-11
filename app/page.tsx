"use client";

import SearchBox from "@/components/searchbox";

export default function Home() {
  return (
    <>
      <div className="w-fit bg-blue-200 p-36 flex flex-col gap-4">
        <h1>Welcome to Service Table</h1>
        <SearchBox />
      </div>
    </>
  );
}
