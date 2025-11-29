import { useQuery } from "@tanstack/react-query";
import type { Session } from "../types";

export async function fetchSessions(
  shouldError: boolean = false,
): Promise<Session[]> {
  await new Promise((r) => setTimeout(r, 500));

  if (shouldError) {
    throw new Error("Simulated failure");
  }

  const res = await fetch("/sessions.json");
  if (!res.ok) throw new Error("Failed to load sessions");

  return res.json();
}

export function useSessions(shouldError = false) {
  return useQuery({
    queryKey: ["sessions"],
    queryFn: () => fetchSessions(shouldError),
    refetchOnWindowFocus: false,
  });
}
