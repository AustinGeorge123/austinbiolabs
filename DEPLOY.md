# Deploy to GitHub + Vercel

## GitHub
Create an empty repository named `austinbiolabs` under the `AustinGeorge123` account. Do not add a README, .gitignore, or license during repo creation because they are already included here.

Then from this folder run:

```bash
git push -u origin main
```

## Vercel
1. Open Vercel.
2. Click **Add New → Project**.
3. Import `AustinGeorge123/austinbiolabs` from GitHub.
4. Framework preset: **Other** (or let Vercel auto-detect static HTML).
5. Leave Build Command empty.
6. Leave Output Directory empty.
7. Deploy.
8. In the Vercel project, open **Settings → Domains** and add:
   - `austinbiolabs.com`
   - `www.austinbiolabs.com`
9. Copy the DNS records Vercel shows into Wix DNS settings.
