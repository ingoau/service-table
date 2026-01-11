"use client";

export default function LogoutPage() {
  return (
    <div className="mx-auto w-fit border border-red-500! p-4 m-4">
      <h1 className="text-red-500">Error</h1>
      <p>
        you are not logged in so you cant log out, why are you pressing the log
        out button
      </p>
      <button
        onClick={() => {
          location.href = "/login";
        }}
      >
        Log In First
      </button>
    </div>
  );
}
