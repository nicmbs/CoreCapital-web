type PoweredByCoreSolutionsProps = {
  className?: string;
};

/** Sitio propio de CoreSolutions — ya no vive en este repo. */
export const CORESOLUTIONS_URL = "https://coresolutions.services/";

/** Brand attribution pill — Core (white) + Solutions. (blue). Abre CoreSolutions en su propio dominio. */
export function PoweredByCoreSolutions({ className = "" }: PoweredByCoreSolutionsProps) {
  return (
    <a
      href={CORESOLUTIONS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 bg-white/5 border border-white/15 rounded-full px-4 py-1.5 text-sm font-medium hover:border-white/25 hover:bg-white/[0.08] transition-colors ${className}`}
    >
      <span className="text-white/50">Powered by</span>
      <span>
        <span className="text-white">Core</span>
        <span className="text-[#007FFF]">Solutions.</span>
      </span>
    </a>
  );
}
