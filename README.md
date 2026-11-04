# Yurun Lu academic homepage

A responsive English academic homepage for GitHub Pages. Plain HTML, CSS and JavaScript; no package installation or build step.

## Preview

Run `node server.mjs` and open <http://127.0.0.1:8793>. You can also open `dist/index.html` directly.

## Update content

Edit `dist/assets/profile.js` to update the biography, selected work, publications, patents, projects, education and experience. Edit the identity and contact links in `dist/index.html` if those change. The initial uses a monogram; replace the `.portrait` SVG with an image and meaningful alt text when a portrait is supplied.

Patents accept objects with `title`, `number`, `status`, `year`, `inventors` and optional `url`. Only add confirmed metadata. Research projects intentionally do not assign investigator roles or grant dates when these have not been supplied. HF-DNB is marked as participation.

## Publish on GitHub Pages

1. Create the public repository `YurunLu/yurunlu.github.io`, if it does not exist.
2. Push the files in this directory, including `.github/workflows/pages.yml`, to `main`.
3. In Settings → Pages → Build and deployment, choose **GitHub Actions** as the source.
4. Wait for the `Deploy academic homepage` workflow to succeed. The intended URL is <https://yurunlu.github.io/>. This URL is a deployment target until publication is verified.

Alternative for manual upload: upload the contents of `dist/` to the repository root, then select **Deploy from a branch → main → /(root)** in Pages settings. This alternative does not use the workflow in this project.

Official GitHub instructions: <https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site>.

The original CV files are not part of this project. Do not upload them without reviewing their personal information. Content provenance and remaining questions are recorded outside the public `dist/` directory.
