# Documentos legales publicados

**Copia de despliegue.** La fuente de verdad de estos textos vive en
`corecapital-client/docs/legal/` (repo `CoreCapital-Repo`). Este directorio
existe porque `corecapital-web` es un repositorio independiente y los `.md` se
importan con `?raw` para renderizarse en `/legal/*`.

Al modificar un documento: editar primero la fuente en `corecapital-client` y
después correr, desde la raíz de este repo:

```bash
node scripts/sync-legal.mjs
```

El script copia los seis archivos, reescribe los enlaces entre documentos a
rutas del sitio, deja el Anexo A sin enlace (**no se publica**) y falla si queda
algún `[COMPLETAR]`: un marcador en la página publicada lo ve cualquiera,
incluido el revisor de Google.

Solo se publican los tres documentos públicos en ES y EN. `disclaimers.md`,
`data-map.md`, `revision-de-copy.md` y `anexo-a-activos-tokenizados.es.md` son
internos y no deben copiarse acá.
