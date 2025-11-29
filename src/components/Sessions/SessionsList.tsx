import SessionsListItem from "./SessionsListItem";
import type { Session } from "../../types";

export default function SessionsList({
  sessions,
  query,
}: {
  sessions: Session[];
  query: string;
}) {
  return (
    <ul role="list" className="space-y-2 max-h-[80dvh] overflow-y-auto">
      {sessions.map((session) => (
        <li role="listitem" key={session.id}>
          <SessionsListItem session={session} query={query} />
        </li>
      ))}
    </ul>
  );
}
