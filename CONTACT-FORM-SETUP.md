# Contact Form Setup

The contact form is powered by a small **Express server** (`server.js`) that
sends mail through Gmail using `nodemailer`. There's no Vercel or any other
hosting-specific setup involved — it's a plain Node server you run yourself.

Your Gmail credentials are already filled in `.env.local`:

| Name | Value |
|---|---|
| `GMAIL_USER` | `swiftlabtechnologies@gmail.com` |
| `GMAIL_APP_PASSWORD` | your 16-digit Gmail App Password |
| `CONTACT_RECEIVER` | *(leave empty to receive at GMAIL_USER)* |

## Local development

You need two terminals running at the same time:

```
npm install        # one-time
npm run server      # terminal 1 — starts the API on http://localhost:3000
npm run dev         # terminal 2 — starts the site on http://localhost:8080
```

Open `http://localhost:8080` and test the form there — Vite automatically
forwards `/api/contact` requests to the server on port 3000 (see the
`proxy` setting in `vite.config.js`).

## Running it for real (production)

```
npm run build       # builds the site into dist/
npm run start        # runs server.js, which serves dist/ AND handles /api/contact
                      # on one URL, one port (default 3000)
```

Deploy this however you like — a VPS, a regular Node host, etc. Just make
sure the real Gmail credentials are set as environment variables on that
machine (or that `.env.local` is present there), then run `npm run start`.
You can change the port with the `PORT` environment variable, e.g.
`PORT=8080 npm run start`.

## If the form errors

Check the terminal running `server.js` — every failure is logged there with
the full error detail (same info also shown briefly in parentheses on the
site's own error message).

## Security note

`server.js` reads credentials from environment variables only — nothing is
hardcoded in the file. `.env.local` holds the real values and is git-ignored.
