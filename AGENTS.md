<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep portfolio content in `src/lib/portfolio-data.ts` and presentation in reusable portfolio components; one source keeps cards, detail pages and contact links consistent.
- Use separate TanStack content routes and index leaves for projects and blog; parent routes render Outlet to preserve navigation and SSR.
- Contact is a client-side mailto composition form, not a stored or delivered submission; this avoids implying an unconfigured mail service.
- Mark demonstration articles and testimonials, and separate CV-evidenced experience from exploratory skills; professional claims must remain auditable.
- Pre-optimize shared UI dependencies with React in Vite; late discovery can mix optimizer generations and trigger invalid React hooks during preview hydration.
