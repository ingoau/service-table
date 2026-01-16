"use client";

export default function ForgotPasswordPage() {
  return (
    <>
      <div className="w-24 mx-auto">
        <h1 className="wrap-anywhere">Forget password</h1>
      </div>
      <div className="w-full max-w-2xl mx-auto p-8">
        Input your email
        <input type="text" />
        <button className="p-2 px-4 rounded-full from-background to-foreground/50 bg-linear-to-b">
          Send Code
        </button>
      </div>
    </>
  );
}
