import { Link } from "react-router";

type PoweredByCoreSolutionsProps = {
  className?: string;
};

/** Brand attribution pill — Core (white) + Solutions. (blue). */
export function PoweredByCoreSolutions({ className = "" }: PoweredByCoreSolutionsProps) {
  return (
    <Link
      to="/coresolutions"
      className={`inline-flex items-center gap-1.5 bg-white/5 border border-white/15 rounded-full px-4 py-1.5 text-sm font-medium hover:border-white/25 hover:bg-white/[0.08] transition-colors ${className}`}
    >
      <span className="text-white/50">Powered by</span>
      <span>
        <span className="text-white">Core</span>
        <span className="text-[#007FFF]">Solutions.</span>
      </span>
    </Link>
  );
}
