"use client";

import Error from "@/components/error";

export default function NotFound() {
  return (
    <Error
      errorMessage="the page doesnt exist maybe someone deleted it or you messed up and its a skill issue (probably)"
      actions={[
        { content: "Go Home", onClick: () => (location.href = "/") },
        {
          content: "support",
          onClick: () => (location.href = "/"),
        },
      ]}
    />
  );
}
