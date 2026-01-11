"use client";

import SearchBox from "@/components/searchbox";

export default function Home() {
  return (
    <>
      <div className="w-screen bg-blue-200 p-10 flex flex-col gap-4">
        <h1>Welcome to Service Table</h1>
        <SearchBox />
      </div>
    </>
  );
}
