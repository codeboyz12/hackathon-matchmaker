/**
 * Logo placeholder — replace the anchor emoji with the actual GRAND LINE logo image
 * when the design asset is ready.
 */
export default function Logo() {
  return (
    <div className="flex items-center gap-1 select-none">
      {/* TODO: Replace with <Image src="/logo.png" /> when logo file is provided */}
      <span className="text-xl font-bold tracking-wide text-navy-700">
        GR<span className="text-navy-500">⚓</span>ND LINE
      </span>
    </div>
  );
}
