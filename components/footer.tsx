"use client";

export default function Footer() {
  return (
    <footer className="bg-blue-500 p-10">
      <div className="container mx-auto px-4">
        <div>
          <h1>Submit feedback</h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Service Table. All rights
            reserved.
          </div>
          <div className="text-sm">
            <a
              href="https://github.com/yourusername/service-table"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
