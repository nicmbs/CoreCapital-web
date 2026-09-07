import { useEffect } from "react";
import { CORESOLUTIONS_URL } from "./PoweredByCoreSolutions";

/**
 * CoreSolutions se mudó a su propio dominio. La ruta vieja sobrevive sólo para
 * no romper enlaces existentes: manda al sitio nuevo sin dejar entrada en el
 * historial. El build de GitHub Pages además sirve un meta-refresh estático en
 * /coresolutions/, así que esto es el respaldo para navegaciones internas.
 */
export default function CoreSolutionsRedirect() {
  useEffect(() => {
    window.location.replace(CORESOLUTIONS_URL);
  }, []);

  return null;
}
