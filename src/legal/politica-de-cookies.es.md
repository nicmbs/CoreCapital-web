# Política de Cookies y Almacenamiento Local — CoreCapital

**Versión:** 1.0
**Fecha de entrada en vigor:** 3 de septiembre de 2026
**Responsable:** CORE SOLUTIONS E.A.S. — Independencia Nacional casi Ygatymi N° 1194, Asunción, Paraguay — RUC `80177449-7`
**Contacto:** `nicolas.maldonado@corecapitalpy.com`

Esta Política complementa la [Política de Privacidad](/legal/privacidad) y forma parte de los [Términos y Condiciones](/legal/terminos).

---

## 1. Alcance: por qué esta política no habla solo de «cookies»

CoreCapital es una aplicación web de página única. Por diseño técnico, **casi no utiliza cookies**: la mayor parte de la información se guarda en su navegador mediante **`localStorage`**, una tecnología distinta pero equivalente en su efecto —almacena datos en su dispositivo y permite reconocerlo entre visitas—.

Por transparencia, y porque la normativa aplicable protege por igual toda información almacenada o consultada en el equipo terminal del usuario, esta Política inventaría **todas** las tecnologías de almacenamiento que utilizamos: cookies, `localStorage`, `sessionStorage` y almacenamiento equivalente.

## 2. Qué son estas tecnologías

- **Cookie:** pequeño archivo de texto que un sitio guarda en su navegador y que se reenvía al servidor en cada petición.
- **`localStorage`:** almacén de pares clave-valor en su navegador. **Persiste indefinidamente** hasta que usted o el sitio lo borran. No se envía automáticamente al servidor; el código de la aplicación lo lee y lo utiliza.
- **`sessionStorage`:** igual que el anterior, pero se borra al cerrar la pestaña.

## 3. Inventario completo

### 3.1 Estrictamente necesarias

Imprescindibles para que el Servicio funcione y para mantener su sesión segura. **No pueden desactivarse** sin impedir el uso de la Plataforma; su base de licitud es la ejecución del contrato, no el consentimiento.

| Nombre | Tecnología | Origen | Qué guarda | Finalidad | Duración |
|---|---|---|---|---|---|
| `base44_access_token` | `localStorage` | Propia (plataforma de backend) | Token de acceso de la sesión autenticada | Mantener la sesión iniciada y autorizar las peticiones a la API | Hasta el cierre de sesión o la expiración del token |
| `token` | `localStorage` | Propia (plataforma de backend) | Copia del token de acceso (clave heredada del SDK) | Compatibilidad del SDK de autenticación | Hasta el cierre de sesión |

> **Nota de seguridad.** El token de sesión se almacena en `localStorage` y, por lo tanto, es accesible desde JavaScript en el mismo origen. Ver el punto 7 sobre buenas prácticas.

### 3.2 Preferencias y funcionalidad

Recuerdan sus elecciones de interfaz. Sin ellas el Servicio funciona, pero pierde personalización en cada visita.

| Nombre | Tecnología | Origen | Qué guarda | Finalidad | Duración |
|---|---|---|---|---|---|
| `corecapital-theme` | `localStorage` | Propia | `"dark"` o `"light"` | Recordar el tema visual elegido y evitar el parpadeo al cargar | Persistente hasta su borrado |
| `corecapital_currency` | `localStorage` | Propia | Código de moneda (p. ej. `USD`, `PYG`, `ARS`) | Mostrar los importes en su moneda de referencia | Persistente hasta su borrado |
| `corecapital_investor_type` | `localStorage` | Propia | Perfil de inversor declarado (`conservative`, `moderate`, `growth`, `aggressive`, `speculative`) | Adaptar la interfaz y los análisis a su perfil sin volver a preguntarlo | Persistente hasta su borrado |
| `sidebar_state` | **Cookie** | Propia | `true` / `false` | Recordar si el menú lateral quedó abierto o cerrado | 7 días |
| `bva_issuer_cache` | `localStorage` | Propia (datos de origen externo) | Caché local de datos de emisores del mercado de valores | Reducir llamadas a la fuente de mercado y acelerar la carga | Persistente hasta su borrado |

> `corecapital_investor_type` es, además de una preferencia de interfaz, **un dato personal** (una característica declarada sobre usted). Se trata conforme a la Política de Privacidad.

### 3.3 Analítica de uso

| Nombre | Tecnología | Origen | Qué guarda | Finalidad | Duración |
|---|---|---|---|---|---|
| `base44_analytics_session_id` | `localStorage` | Proveedor de plataforma de backend (encargado del tratamiento) | Identificador aleatorio (UUID) generado en su navegador | Agrupar los eventos de uso de un mismo navegador para medir uso y estabilidad del producto | **Persistente** hasta su borrado — pese a llamarse «session», no se borra al cerrar la pestaña |

**Qué se envía junto a ese identificador.** La analítica integrada en la plataforma de backend registra eventos de uso que incluyen: nombre del evento, marca temporal, **ruta de la página visitada** (`page_url`, sin el dominio ni los parámetros de consulta), el identificador de sesión anterior y, **cuando usted está autenticado, su identificador de usuario**. Se registran además eventos automáticos de inicialización de la aplicación, latido periódico de actividad (cada 60 segundos mientras la aplicación está abierta) y duración de la sesión.

**Qué NO se envía:** el contenido de sus conversaciones con los asistentes de IA, los importes de su portafolio, sus saldos ni el contenido de los formularios.

Al estar el identificador vinculado a su `user_id` cuando usted inicia sesión, esta analítica **no es anónima**: es un tratamiento de datos personales con finalidad de medición y mejora del producto.

### 3.4 Recursos de terceros

La Plataforma carga el icono de pestaña (favicon) desde un dominio del proveedor de la plataforma de backend. Esa petición transmite su dirección IP y su *user agent* a dicho proveedor, como ocurre con cualquier recurso remoto. **No instala cookies ni identificadores.**

### 3.5 Herramientas de desarrollo

En el entorno de **desarrollo local** se activan utilidades del proveedor de backend (recarga en caliente, notificador de navegación, agente de edición visual) que pueden cargar recursos externos adicionales. **Estas herramientas no se incluyen en la compilación de producción** y no afectan a los usuarios finales.

## 4. Lo que NO utilizamos

A la fecha de esta versión, CoreCapital **no utiliza**:

- cookies ni píxeles de publicidad o remarketing;
- redes publicitarias, plataformas de gestión de audiencias ni identificadores publicitarios;
- herramientas de analítica de terceros del tipo Google Analytics, Meta Pixel o similares;
- mapas de calor ni grabación de sesión;
- venta ni cesión de datos de navegación a terceros con fines comerciales.

Si esto cambiara, actualizaremos esta Política y solicitaremos su consentimiento previo cuando corresponda.

## 5. Base de licitud y consentimiento

| Categoría | Base de licitud |
|---|---|
| Estrictamente necesarias | Ejecución del contrato / interés legítimo en la seguridad del Servicio. No requieren consentimiento. |
| Preferencias y funcionalidad | Ejecución del contrato — configuran el Servicio que usted solicitó. |
| Analítica de uso | **Consentimiento**, cuando resulte exigible; en su defecto, interés legítimo en medir y mejorar el producto, ponderado frente a sus derechos. |

**Situación normativa.** La República del Paraguay no cuenta a la fecha con una norma específica de consentimiento previo para cookies. La **Ley N° 7593/2025 de Protección de Datos Personales**, promulgada el 27 de noviembre de 2025, sí impone deberes reforzados de **transparencia, minimización y licitud**, cuya reglamentación se encuentra pendiente. Esta Política se ha redactado con el estándar más exigente para anticipar dicha reglamentación.

## 6. Cómo controlar el almacenamiento

### 6.1 Desde la Plataforma

Puede cambiar en cualquier momento sus preferencias de tema, moneda y perfil de inversor desde la configuración de la aplicación.

### 6.2 Desde su navegador

Puede borrar o bloquear cookies y almacenamiento local desde la configuración de su navegador:

- **Chrome:** Configuración → Privacidad y seguridad → Datos de sitios
- **Safari:** Preferencias → Privacidad → Gestionar datos de sitios web
- **Firefox:** Configuración → Privacidad y seguridad → Cookies y datos del sitio
- **Edge:** Configuración → Cookies y permisos del sitio

**Consecuencia:** borrar el almacenamiento local **cerrará su sesión** y restablecerá sus preferencias a los valores por defecto. No perderá los datos guardados en su cuenta.

### 6.3 Navegación privada y señales de no rastreo

La navegación privada o de incógnito elimina el almacenamiento al cerrar la ventana. La Plataforma **no responde actualmente a las señales «Do Not Track» ni «Global Privacy Control»**, dado que no realiza seguimiento publicitario ni entre sitios.

## 7. Seguridad del almacenamiento

Le recomendamos:

- **cerrar sesión** al usar un equipo compartido o público;
- mantener activo el **segundo factor de autenticación** disponible en la Plataforma;
- mantener el navegador y el sistema operativo actualizados.

## 8. Cambios en esta Política

Cualquier modificación se publicará en esta misma dirección con una nueva fecha de vigencia. Si la modificación incorpora tecnologías que requieren su consentimiento, lo solicitaremos antes de activarlas.

## 9. Contacto

Consultas sobre esta Política: `nicolas.maldonado@corecapitalpy.com`
CORE SOLUTIONS E.A.S. — Independencia Nacional casi Ygatymi N° 1194, Asunción, República del Paraguay.

---
