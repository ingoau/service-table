"use client";

export default function Navbar() {
  return (
    <div className="w-screen flex flex-row">
      <h1 className="text-blue-400">Failsforce Service Desk</h1>
      <div className="grow"></div>
      <button onClick={() => (location.href = "/signup")}>Sign up</button>
      <button onClick={() => (location.href = "/login")}>Log in</button>
    </div>
  );
}
