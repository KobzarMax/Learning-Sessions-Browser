export default function SkeletonSessionItem() {
  return (
    <div
      className="bg-white rounded-lg shadow p-4 flex flex-col gap-3"
      aria-hidden="true"
    >
      {/* Title */}
      <div className="flex items-center justify-between">
        <div className="skeleton h-6 w-2/5 rounded-md" />
        <div className="skeleton h-6 w-24 rounded-md" />
      </div>

      {/* Tags */}
      <div className="skeleton h-4 w-1/2 rounded-md" />

      {/* meta row: mins | difficulty | popularity */}
      <div className="flex gap-3">
        <div className="skeleton h-4 w-16 rounded-md" />
        <div className="skeleton h-6 w-24 rounded-full" />
        <div className="skeleton h-4 w-20 rounded-md" />
      </div>

      {/* description lines */}
      <div className="space-y-2">
        <div className="skeleton h-3 w-full rounded-md" />
        <div className="skeleton h-3 w-11/12 rounded-md" />
      </div>
    </div>
  );
}
