# Original robot archive

`original-archive.js` is the existing archive's bundled application, restored from
https://bwys-34.github.io/robot-QR-code/assets/orbit-46Q6COSB.js on 2026-10-26.
Bundled Vue, Lodash, Lucide and QR code dependency license notices are retained.

The matching HTML, original styles and 150 records are in `/archive.html`.
Photo URLs map stable record IDs to the existing `/photos/` files. The year-sorted
display number is distinct from the stable ID used by the quiz and public QR URLs.
The original public QR URLs and batch download address are preserved.

Local adaptations in the bundle:

- Keep the original 12-card catalog and complete detail layout.
- Add a year selector alongside the existing search input.
- Add home/challenge controls using `/js/archive-bridge.js`.
- Delegate navigation to the containing game so browser Back retains catalog state.
- Provide the photo dialog fallback for exhibition Chrome 88.

`/css/archive-integration.css` contains only integration controls and explicit image
bounds. The same-origin frame isolates the original archive styles from game themes;
the archive loads locally and has no runtime dependency on the separate archive site.
