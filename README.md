# IT Research Report Template — "Terminal Paper" style

A university-standard research report (abstract → introduction → background →
methodology → results → discussion → conclusion → references → appendix)
styled like a technical systems console: dark background, boot-sequence hero,
a live scrollspy sidebar styled as a "system status" monitor, and paper-toned
cards for the actual academic writing.

## Files
- `index.html` — structure and content placeholders
- `styles.css` — all design tokens (colors, type, spacing) and visual rules
- `script.js` — scroll progress bar, scrollspy, reveal-on-scroll, hero typing effect, mobile nav

## Instructions for an LLM (e.g. Gemini) generating a new report from this template

1. **Never invent new class names.** Classes like `.paper-section`,
   `.paper-card`, `.callout`, `.figure`, `.code-block`, `.data-table`,
   `.reference-list`, and `.reveal` are the contract between HTML, CSS, and
   JS. Reuse them; don't rename them.

2. **Find every `data-field="..."` attribute.** Each one marks a piece of
   content to replace. The attribute name tells you what kind of content
   belongs there (e.g. `data-field="report-title"` → the report's title).
   Replace the bracketed `[placeholder text]` inside with real content and
   leave the tag/attribute in place.

3. **Sections are numbered and self-contained.** Each `<section class="paper-section" id="...">`
   corresponds to one `<li data-target="...">` in the sidebar TOC — the `id`
   and `data-target` values must match exactly. To add a new section:
   - Duplicate an existing `<section class="paper-section">` block.
   - Duplicate its sidebar `<li>` entry, update `data-target` to the new
     section's `id`, and continue the two-digit numbering (00, 01, 02, ...).
   - No JS changes are needed — `script.js` auto-discovers any element
     matching `#tocList li[data-target]` and any `.paper-section`.

4. **Reusable content partials** (copy/paste and edit, don't redesign them):
   - **Callout** — `.callout` / `.callout--highlight` for notes, scope
     statements, warnings, or key findings.
   - **Figure** — `.figure` with an `<img>` + `<figcaption>` for diagrams,
     screenshots, or charts.
   - **Code block** — `.code-block` for terminal commands, config snippets,
     or queries.
   - **Data table** — `.data-table` inside `.table-wrap`, with a `<caption>`.
   - **Reference list** — `.reference-list`, numbered `[1] [2] [3]` style
     matching in-text citations.

5. **Keep the visual system consistent by editing tokens, not adding
   inline styles.** All colors, fonts, and radii live in `:root` at the top
   of `styles.css`:
   - `--ink-*` = dark background/console tones
   - `--paper*` = the cream "paper" tone used for content cards
   - `--teal` / `--amber` = signal colors (progress, status lights, highlights)
   - `--font-display` / `--font-body` / `--font-mono` = the three type roles
   If a new report needs a different palette or mood, change these variables
   only — every component derives its color from them.

6. **Motion is deliberate, not decorative.** There are exactly four animated
   moments: the top scroll-progress rail, the sidebar scrollspy status
   lights, the reveal-on-scroll fade-in for each block of content, and the
   hero's terminal boot-sequence typing effect. Don't add extra motion
   elsewhere — it's intentionally restrained so the report still reads as
   credible academic work.

7. **Accessibility floor to preserve:** keep `alt` text on figures, keep the
   `prefers-reduced-motion` block in `styles.css` (it disables animation for
   users who request it), and keep semantic heading levels (`h1` in the hero,
   `h2` per section, `h3` for subsections) — don't skip levels when adding
   new content.

## Quick checklist when generating a new report
- [ ] Replace all `data-field` placeholders in the hero (title, subtitle,
      authors, institution, supervisor, date, keywords)
- [ ] Write the Abstract last, once all sections are drafted
- [ ] Number in-text citations `[1]`, `[2]`... matching the References list
- [ ] Fill or remove unused partials (figure/code/table) per section —
      don't leave placeholder brackets in the final output
- [ ] Confirm every `id` on a `.paper-section` matches a sidebar `data-target`
