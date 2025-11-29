import SkeletonSessionItem from "./SkeletonSessionItem";

export default function SkeletonSessionsList({
  count = 6,
}: {
  count?: number;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading sessions"
      className="space-y-2 max-h-[80dvh] overflow-y-auto"
    >
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} role="listitem">
          <SkeletonSessionItem />
        </div>
      ))}
      <span className="sr-only">Loading…</span>
    </div>
  );
}
