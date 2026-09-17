# Contact Form — Vercel Setup

The contact form is a Vercel **serverless function** at `api/contact.js`.
There is no separate backend to run — Vercel deploys the frontend and this
function together as one project, on one URL.

## Local testing (before you deploy)

Don't use plain `npm run dev` for testing the form — Vite alone can't run
`/api` functions. Use the Vercel CLI instead, which runs the site *and* the
function together, exactly like production:

```
npm install -g vercel      # one-time
vercel dev
```

It will open on a URL like `http://localhost:3000` — test the form there.
Credentials for this are already filled in `.env.local` (kept out of git).

## Deploying to Vercel

1. Push this project to a GitHub repo, and import it on vercel.com
   (or run `vercel` from this folder to deploy directly from your machine)
2. Vercel auto-detects it as a Vite project — no config needed
3. **Before your first real deploy**, go to your Vercel project →
   **Settings → Environment Variables** and add:

   | Name | Value |
   |---|---|
   | `GMAIL_USER` | `swiftlabtechnologies@gmail.com` |
   | `GMAIL_APP_PASSWORD` | `buyocupiodkjfvko` |
   | `CONTACT_RECEIVER` | *(leave empty to receive at GMAIL_USER)* |

   Add them for all three environments (Production, Preview, Development).
4. Redeploy (Vercel → Deployments → ⋯ → Redeploy) so the function picks up
   the new variables — env vars only apply to deployments made *after*
   they're added.

That's it — the link you share will have a fully working contact form, no
separate server to keep running.

## If the form errors on the live site

Vercel → your project → **Deployments** → latest deployment → **Functions**
tab → click `contact` → you'll see the real error logged there (the same
`console.error` detail described below). The site's own error message also
shows a short debug string in parentheses — send that here if you're stuck.

## Security note

`api/contact.js` reads credentials from environment variables only — nothing
is hardcoded in the file. `.env.local` holds the real values for local
testing and is git-ignored; the live values live in Vercel's dashboard.
