#!/usr/bin/env node
/**
 * Sincroniza los documentos legales públicos desde su fuente de verdad
 * (`corecapital-client/docs/legal/`) hacia `src/legal/`, aplicando las
 * transformaciones que necesita la versión publicada.
 *
 * Se hace por copia y no por importación porque `corecapital-web` es un
 * repositorio independiente. Correr después de editar la fuente:
 *
 *   node scripts/sync-legal.mjs
 *
 * Falla si queda algún marcador sin completar: un `[COMPLETAR]` en la página
 * publicada es visible para cualquiera, incluido el revisor de Google.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const SOURCE = join(here, "..", "..", "corecapital-client", "docs", "legal");
const DEST = join(here, "..", "src", "legal");

// Solo los tres documentos públicos, en ES y EN. El Anexo A y los internos
// (`disclaimers`, `data-map`, `revision-de-copy`) no se publican.
const FILES = [
  "terminos-y-condiciones.es.md",
  "terms-and-conditions.en.md",
  "politica-de-privacidad.es.md",
  "privacy-policy.en.md",
  "politica-de-cookies.es.md",
  "cookie-policy.en.md",
];

/** Enlaces entre documentos: del nombre de archivo a la ruta del sitio. */
const ROUTES = {
  "terminos-y-condiciones.es.md": "/legal/terminos",
  "terms-and-conditions.en.md": "/legal/terminos",
  "politica-de-privacidad.es.md": "/legal/privacidad",
  "privacy-policy.en.md": "/legal/privacidad",
  "politica-de-cookies.es.md": "/legal/cookies",
  "cookie-policy.en.md": "/legal/cookies",
};

function transform(text) {
  let out = text;

  // El Anexo A no está vigente ni publicado: queda como texto, sin enlace.
  out = out.replace(
    /\[(Anexo A|Annex A)\]\(\.\/anexo-a-activos-tokenizados\.es\.md\)/g,
    "**$1**",
  );

  // El aviso de idioma de las versiones EN apunta al archivo español. En el
  // sitio cada documento tiene una sola URL y el idioma lo cambia el
  // conmutador, así que se remite a ese control.
  out = out.replace(
    /the Spanish version prevails\. See \[`[a-z-]+\.es\.md`\]\(\.\/[a-z-]+\.es\.md\)\./g,
    "the Spanish version prevails — use the language switch at the top of this page to read it.",
  );

  // Enlaces cruzados entre documentos → rutas del sitio.
  for (const [file, route] of Object.entries(ROUTES)) {
    out = out.replaceAll(`](./${file})`, `](${route})`);
  }

  return out;
}

if (!existsSync(SOURCE)) {
  console.error(`No se encuentra la fuente: ${SOURCE}`);
  console.error("Se espera a corecapital-client como repo hermano.");
  process.exit(1);
}

const problems = [];
for (const file of FILES) {
  const text = transform(readFileSync(join(SOURCE, file), "utf8"));

  if (/\[COMPLETAR|\[TO COMPLETE|\[VERIFICAR/.test(text)) {
    problems.push(`${file}: quedan marcadores sin completar`);
  }
  const dangling = text.match(/\]\(\.?\/?[\w.-]+\.md\)/g);
  if (dangling) {
    problems.push(`${file}: enlaces a archivos .md sin reescribir → ${dangling.join(", ")}`);
  }

  writeFileSync(join(DEST, file), text);
  console.log(`  ✓ ${file}`);
}

if (problems.length) {
  console.error("\nNo publicable:");
  for (const p of problems) console.error(`  ✗ ${p}`);
  process.exit(1);
}
console.log("\nDocumentos legales sincronizados.");
