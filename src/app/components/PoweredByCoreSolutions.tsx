import { Link, useNavigate, useLocation } from "react-router";

type PoweredByCoreSolutionsProps = {
  className?: string;
};

function scrollToCoreSolutionsHome() {
  window.history.replaceState(null, "", "/coresolutions");
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.getElementById("home")?.scrollIntoView({ behavior: "auto", block: "start" });
}

/** Brand attribution pill — Core (white) + Solutions. (blue). Always opens CoreSolutions at the top. */
export function PoweredByCoreSolutions({ className = "" }: PoweredByCoreSolutionsProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onCoreSolutions = pathname.replace(/\/$/, "") === "/coresolutions";

  return (
    <Link
      to="/coresolutions"
      className={`inline-flex items-center gap-1.5 bg-white/5 border border-white/15 rounded-full px-4 py-1.5 text-sm font-medium hover:border-white/25 hover:bg-white/[0.08] transition-colors ${className}`}
      onClick={(e) => {
        e.preventDefault();
        if (onCoreSolutions) {
          scrollToCoreSolutionsHome();
          return;
        }
        navigate("/coresolutions");
      }}
    >
      <span className="text-white/50">Powered by</span>
      <span>
        <span className="text-white">Core</span>
        <span className="text-[#007FFF]">Solutions.</span>
      </span>
    </Link>
  );
}
