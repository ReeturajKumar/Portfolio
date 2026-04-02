/** Lightweight placeholder: no Framer Motion, minimal layout shift */
export default function BelowFoldFallback() {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-12" aria-busy="true" aria-label="Loading content">
      <div className="mx-auto max-w-360 space-y-10">
        <div className="h-3 w-40 rounded-full bg-black/6" />
        <div className="grid gap-6 md:grid-cols-12">
          <div className="h-[280px] rounded-4xl bg-black/4 md:col-span-4" />
          <div className="h-[280px] rounded-4xl bg-black/4 md:col-span-8" />
        </div>
        <div className="h-48 rounded-4xl bg-black/4" />
      </div>
    </div>
  );
}
