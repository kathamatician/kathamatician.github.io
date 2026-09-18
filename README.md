# kathamatician.github.io

Personal site of **Meihui Huang** (黄美慧). Static HTML for GitHub Pages.

Live URL: <https://kathamatician.com/> (also <https://kathamatician.github.io/>)

## Pages

| Path | File |
|---|---|
| `/` | `index.html` |
| `/about.html` | `about.html` |
| `/papers.html` | `papers.html` |
| `/imprint.html` | `imprint.html` |
| `/llms.txt` | `llms.txt` |

No framework, no build step.

## Publish

Create the GitHub repository `kathamatician/kathamatician.github.io` if it does not exist, then:

```bash
cd kathamatician.github.io
git init
git add .
git commit -m "Initial personal site"
git branch -M main
git remote add origin git@github.com:kathamatician/kathamatician.github.io.git
git push -u origin main
```

GitHub Pages: Settings → Pages → Deploy from branch `main` / root.

## Portrait

Drop a photograph at `assets/portrait.jpg`. The About page already points there. Until that file exists, the page shows a reserved frame.

## Email

The public contact address is `mhuang@ep1.rub.de`.

## Design notes

Ivory page, ink text, one oxblood accent. Source Sans 3 is used for readable text, with local heading and colophon print-art SVGs. The night theme follows `prefers-color-scheme`; the header toggle writes to `localStorage`.
