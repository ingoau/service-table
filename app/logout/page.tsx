"use client";

export default function LogoutPage() {
  return (
    <div>
      <h1>Error</h1>
      <p>you are not logged in so you cant log out</p>
      <button
        onClick={() => {
          location.href = "/login";
        }}
      >
        log in first
      </button>
    </div>
  );
}
