import { useCallback, useMemo } from "react";
import debounce from "lodash.debounce";
import { ChevronDown } from "lucide-react";

interface SessionsControlsProps {
  search: string;
  onSearchChange: (value: string) => void;
  sortDir: "asc" | "desc";
  onToggleSort: () => void;
  onSimulateError: () => void;
}

export default function SessionsControls({
  search,
  onSearchChange,
  sortDir,
  onToggleSort,
  onSimulateError,
}: SessionsControlsProps) {
  const debouncedSetter = useMemo(
    () =>
      debounce((value: string) => {
        onSearchChange(value);
      }, 300),
    [onSearchChange],
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      debouncedSetter(e.target.value);
    },
    [debouncedSetter],
  );

  return (
    <div className="items-center grid grid-cols-6 gap-3">
      <input
        defaultValue={search}
        onChange={handleChange}
        placeholder="Search by title..."
        aria-label="Search sessions by title"
        className="border border-slate-200 rounded-lg px-3 py-2 w-full col-span-4 text-gray-900 font-medium bg-white h-10"
      />

      <button
        type="button"
        onClick={onToggleSort}
        aria-label={`Sort by popularity (${sortDir === "asc" ? "ascending" : "descending"})`}
        aria-pressed={sortDir === "desc"}
        aria-sort={sortDir === "asc" ? "ascending" : "descending"}
        className="px-3 py-2 bg-gray-200 rounded-lg text-gray-900 whitespace-nowrap cursor-pointer
                         flex items-center justify-center gap-2.5
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Popularity:
        <span
          className={`transition duration-300 ${sortDir === "desc" ? "rotate-180" : ""}`}
        >
          <ChevronDown size={16} />
        </span>
      </button>

      <button
        type="button"
        onClick={onSimulateError}
        aria-label="Simulate an error for testing"
        className="px-3 py-2 bg-red-100 text-red-700 rounded cursor-pointer
                   focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Simulate error
      </button>
    </div>
  );
}
