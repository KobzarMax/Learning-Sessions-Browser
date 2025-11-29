import { useState } from "react";
import type { Session } from "../../types";
import HighlightText from "../ui/HighlightText";

export default function SessionsListItem({
  session,
  query,
}: {
  session: Session;
  query: string;
}) {
  const [completed, setCompleted] = useState(session.completed ?? false);

  const tags =
    session.tags && session.tags.length > 0 ? session.tags.join(", ") : "-";

  const difficulty = session.difficulty || "N/A";

  const toggle = () => setCompleted((c) => !c);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2 text-gray-900">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-lg">
          <HighlightText text={session.title} query={query} />
        </h2>

        <button
          onClick={toggle}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggle();
            }
          }}
          aria-pressed={completed}
          aria-label={
            completed
              ? `Mark ${session.title} incomplete`
              : `Mark ${session.title} complete`
          }
          className={`px-3 py-1 rounded text-sm font-medium cursor-pointer ${
            completed
              ? "bg-green-200 text-green-900"
              : "bg-gray-200 text-gray-900"
          }`}
        >
          {completed ? "Completed" : "Mark Complete"}
        </button>
      </div>

      <p className="text-sm text-gray-800">
        <span className="font-semibold">Tags:</span> {tags}
      </p>

      <p className="text-sm text-gray-800">
        <span className="font-semibold">Minutes:</span> {session.mins ?? "N/A"}
      </p>

      <p className="text-sm text-gray-800">
        <span className="font-semibold">Difficulty:</span>{" "}
        <span className="inline-block px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs">
          {difficulty}
        </span>
      </p>

      <p className="text-sm text-gray-800">
        <span className="font-semibold">Popularity:</span>{" "}
        {session.popularity ?? "N/A"}
      </p>
    </div>
  );
}
