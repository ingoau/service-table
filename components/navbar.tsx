"use client";

export default function Navbar() {
  return (
    <div className="w-screen flex flex-row bg-blue-300 items-center [&>button]:p-2 [&>button]:bg-blue-300">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/">
        <h2 className="text-blue-500">
          Failsforce Service Desk (click to go home)
        </h2>
      </a>
      <div className="grow"></div>
      <button>Documentation</button>
      <button>Resources</button>
      <div className="grow"></div>
      <button onClick={() => (location.href = "/createticket")}>
        Create Ticket
      </button>
      <button onClick={() => (location.href = "/signup")}>Sign up</button>
      <button onClick={() => (location.href = "/login")}>Log in</button>
      <button onClick={() => (location.href = "/logout")}>Sign out</button>
    </div>
  );
}
