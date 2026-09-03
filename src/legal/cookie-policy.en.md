# Cookie and Local Storage Policy — CoreCapital

**Version:** 1.0
**Effective date:** 3 September 2026
**Controller:** CORE SOLUTIONS E.A.S. — Independencia Nacional casi Ygatymi No. 1194, Asunción, Paraguay — RUC `80177449-7`
**Contact:** `nicolas.maldonado@corecapitalpy.com`

> **Language notice.** This is a courtesy translation. The **Spanish version is the only legally binding text**. In the event of any discrepancy, the Spanish version prevails — use the language switch at the top of this page to read it.

This Policy supplements the [Privacy Policy](/legal/privacidad) and forms part of the [Terms and Conditions](/legal/terminos).

---

## 1. Scope: why this policy is not only about "cookies"

CoreCapital is a single-page web application. By technical design it **barely uses cookies at all**: most information is stored in your browser via **`localStorage`**, a different technology with an equivalent effect — it stores data on your device and allows it to be recognised across visits.

For transparency, and because applicable law protects equally any information stored on or read from a user's terminal equipment, this Policy inventories **all** the storage technologies we use: cookies, `localStorage`, `sessionStorage` and equivalent storage.

## 2. What these technologies are

- **Cookie:** a small text file a site stores in your browser and that is sent back to the server with each request.
- **`localStorage`:** a key-value store in your browser. It **persists indefinitely** until you or the site clear it. It is not sent to the server automatically; the application code reads and uses it.
- **`sessionStorage`:** the same, but cleared when the tab closes.

## 3. Full inventory

### 3.1 Strictly necessary

Essential for the Service to work and for your session to remain secure. **They cannot be disabled** without preventing use of the Platform; their legal basis is performance of the contract, not consent.

| Name | Technology | Origin | What it stores | Purpose | Duration |
|---|---|---|---|---|---|
| `base44_access_token` | `localStorage` | First party (backend platform) | Authenticated session access token | Keep you signed in and authorise API requests | Until sign-out or token expiry |
| `token` | `localStorage` | First party (backend platform) | Copy of the access token (legacy SDK key) | Authentication SDK compatibility | Until sign-out |

> **Security note.** The session token is stored in `localStorage` and is therefore accessible to JavaScript on the same origin. See point 7 on good practice.

### 3.2 Preferences and functionality

These remember your interface choices. Without them the Service still works, but personalisation is lost on each visit.

| Name | Technology | Origin | What it stores | Purpose | Duration |
|---|---|---|---|---|---|
| `corecapital-theme` | `localStorage` | First party | `"dark"` or `"light"` | Remember the chosen visual theme and avoid flicker on load | Persistent until cleared |
| `corecapital_currency` | `localStorage` | First party | Currency code (e.g. `USD`, `PYG`, `ARS`) | Display amounts in your reference currency | Persistent until cleared |
| `corecapital_investor_type` | `localStorage` | First party | Declared investor profile (`conservative`, `moderate`, `growth`, `aggressive`, `speculative`) | Adapt the interface and analyses to your profile without asking again | Persistent until cleared |
| `sidebar_state` | **Cookie** | First party | `true` / `false` | Remember whether the side menu was left open or closed | 7 days |
| `bva_issuer_cache` | `localStorage` | First party (externally sourced data) | Local cache of stock-market issuer data | Reduce calls to the market source and speed up loading | Persistent until cleared |

> `corecapital_investor_type` is, as well as an interface preference, **personal data** (a declared characteristic about you). It is processed in accordance with the Privacy Policy.

### 3.3 Usage analytics

| Name | Technology | Origin | What it stores | Purpose | Duration |
|---|---|---|---|---|---|
| `base44_analytics_session_id` | `localStorage` | Backend platform provider (processor) | Random identifier (UUID) generated in your browser | Group usage events from the same browser to measure product usage and stability | **Persistent** until cleared — despite the name "session", it is not cleared when the tab closes |

**What is sent alongside that identifier.** The analytics built into the backend platform records usage events including: event name, timestamp, **path of the page visited** (`page_url`, without the domain or query parameters), the above session identifier and, **when you are signed in, your user identifier**. It also records automatic events for application initialisation, a periodic activity heartbeat (every 60 seconds while the application is open) and session duration.

**What is NOT sent:** the content of your conversations with the AI assistants, your portfolio amounts, your balances, or form contents.

Because the identifier is linked to your `user_id` when you sign in, this analytics is **not anonymous**: it is processing of personal data for product measurement and improvement.

### 3.4 Third-party resources

The Platform loads the browser tab icon (favicon) from a domain belonging to the backend platform provider. That request transmits your IP address and user agent to that provider, as happens with any remote resource. **It sets no cookies or identifiers.**

### 3.5 Development tooling

In the **local development** environment, backend-provider utilities are enabled (hot reload, navigation notifier, visual edit agent) that may load additional external resources. **These tools are not included in the production build** and do not affect end users.

## 4. What we do NOT use

As at the date of this version, CoreCapital does **not** use:

- advertising or remarketing cookies or pixels;
- ad networks, data management platforms or advertising identifiers;
- third-party analytics tools such as Google Analytics, Meta Pixel or similar;
- heatmaps or session recording;
- sale or transfer of browsing data to third parties for commercial purposes.

Should this change, we will update this Policy and seek your prior consent where required.

## 5. Legal basis and consent

| Category | Legal basis |
|---|---|
| Strictly necessary | Performance of the contract / legitimate interest in Service security. No consent required. |
| Preferences and functionality | Performance of the contract — they configure the Service you requested. |
| Usage analytics | **Consent**, where required; failing that, legitimate interest in measuring and improving the product, balanced against your rights. |

**Regulatory position.** The Republic of Paraguay does not currently have a specific prior-consent rule for cookies. **Law No. 7593/2025 on Personal Data Protection**, enacted on 27 November 2025, does impose enhanced duties of **transparency, minimisation and lawfulness**, with implementing regulation pending. This Policy has been drafted to the more demanding standard in anticipation of that regulation.

## 6. How to control storage

### 6.1 From the Platform

You can change your theme, currency and investor profile preferences at any time from the application settings.

### 6.2 From your browser

You can delete or block cookies and local storage from your browser settings:

- **Chrome:** Settings → Privacy and security → Site data
- **Safari:** Preferences → Privacy → Manage website data
- **Firefox:** Settings → Privacy & Security → Cookies and Site Data
- **Edge:** Settings → Cookies and site permissions

**Consequence:** clearing local storage **will sign you out** and reset your preferences to their defaults. You will not lose data saved to your account.

### 6.3 Private browsing and do-not-track signals

Private or incognito browsing clears storage when the window is closed. The Platform **does not currently respond to the "Do Not Track" or "Global Privacy Control" signals**, as it performs no advertising or cross-site tracking.

## 7. Storage security

We recommend that you:

- **sign out** when using a shared or public device;
- keep the **second authentication factor** available on the Platform enabled;
- keep your browser and operating system up to date.

## 8. Changes to this Policy

Any change will be published at this same address with a new effective date. If a change introduces technologies requiring your consent, we will seek it before activating them.

## 9. Contact

Queries about this Policy: `nicolas.maldonado@corecapitalpy.com`
CORE SOLUTIONS E.A.S. — Independencia Nacional casi Ygatymi No. 1194, Asunción, Republic of Paraguay.
