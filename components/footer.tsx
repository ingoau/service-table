"use client";

import { Editor } from "@tinymce/tinymce-react";
import { Button } from "antd/es/radio";

export default function Footer() {
  return (
    <footer className="bg-blue-500 p-10">
      <div className="container mx-auto px-4">
        <div>
          <h1>Submit feedback</h1>
          <Editor
            apiKey="your_api_key"
            initialValue="<p>Type your feedback here</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help",
            }}
          />
          <Button>Submit</Button>
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
