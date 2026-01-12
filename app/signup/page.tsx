"use client";

import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div>
      <h1>Signup Page</h1>
      <div className="flex flex-col w-fit p-10 mx-auto">
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2"
        />
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2"
        />
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2"
        />
        {showPassword && <p className="m-0 bg-gray-200 p-2">{password}</p>}
        <div className="flex flex-row">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Show password
        </div>
        <button className="p-2 rounded-full">Create account</button>
      </div>
    </div>
  );
}
