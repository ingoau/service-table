import { AIButton } from "./ai-button";

export default function Error({
  errorMessage,
  actions,
}: {
  errorMessage: string;
  actions: { content: string; onClick: () => void }[];
}) {
  return (
    <div className="mx-auto w-fit border border-red-500! p-4 m-4">
      <h1 className="text-red-500">Error</h1>
      <p>{errorMessage}</p>
      {actions.map((action, index) => (
        <button key={index} onClick={action.onClick}>
          {action.content}
        </button>
      ))}
      <AIButton text="Troubleshoot with ai" />
    </div>
  );
}
