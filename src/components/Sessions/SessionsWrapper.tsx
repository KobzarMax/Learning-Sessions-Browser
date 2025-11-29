import { Activity, useCallback, useEffect, useMemo, useState } from "react";
import SessionsControls from "./SessionsControls";
import SessionsList from "./SessionsList";
import { useSessions } from "../../api";
import { SORT_KEY } from "../../static";
import SkeletonSessionsList from "../Skeleton/SkeletonSessionsList";

export default function SessionsWrapper() {
  const [shouldError, setShouldError] = useState(false);

  const { data, error, refetch, isFetching } = useSessions(shouldError);

  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [sortDir, setSortDir] = useState<"asc" | "desc">(() => {
    const saved = localStorage.getItem(SORT_KEY);
    return saved === "asc" || saved === "desc" ? saved : "desc";
  });

  useEffect(() => {
    localStorage.setItem(SORT_KEY, sortDir);
  }, [sortDir]);

  const handleDebouncedSearch = useCallback((value: string) => {
    setDebounced(value);
    setSearch(value);
  }, []);

  const filteredSessions = useMemo(() => {
    if (!data) return [];

    const list = data.map((s, idx) => ({ ...s, originalIndex: idx }));

    const searched = debounced
      ? list.filter((s) =>
          s.title.toLowerCase().includes(debounced.toLowerCase()),
        )
      : list;

    const sorted = [...searched].sort((a, b) => {
      if (a.popularity === b.popularity) {
        return a.originalIndex - b.originalIndex;
      }
      return sortDir === "asc"
        ? a.popularity - b.popularity
        : b.popularity - a.popularity;
    });

    return sorted;
  }, [data, debounced, sortDir]);

  return (
    <div className="space-y-4">
      <SessionsControls
        search={search}
        onSearchChange={handleDebouncedSearch}
        sortDir={sortDir}
        onToggleSort={() => setSortDir((d) => (d === "desc" ? "asc" : "desc"))}
        onSimulateError={() => {
          setShouldError(true);
          refetch();
        }}
      />
      <Activity
        mode={isFetching ? "visible" : "hidden"}
        children={
          <div aria-busy="true">
            <SkeletonSessionsList count={6} />
          </div>
        }
      />
      <Activity
        mode={isFetching ? "hidden" : error ? "visible" : "hidden"}
        children={
          <div className="p-4 text-gray-800 space-y-3">
            <p role="alert" className="text-red-700 font-medium">
              Something went wrong loading sessions.
            </p>

            <button
              onClick={() => {
                setShouldError(false);
                refetch();
              }}
              className="px-4 py-2 bg-gray-800 text-white rounded"
            >
              Retry
            </button>
          </div>
        }
      />
      <Activity
        mode={
          isFetching || error
            ? "hidden"
            : !!filteredSessions && !error
              ? "visible"
              : "hidden"
        }
        children={<SessionsList query={search} sessions={filteredSessions} />}
      />
    </div>
  );
}
