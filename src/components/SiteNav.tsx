import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav aria-label="Main navigation" className="site-nav mx-auto grid max-w-[1560px] grid-cols-[minmax(0,1fr)_auto_auto_auto] items-center gap-3 px-6 py-6 sm:flex sm:justify-end sm:gap-6 sm:py-10 md:px-[9%]">
      <Link to="/" className="nav-link" activeProps={{ className: "nav-link nav-link-active" }} activeOptions={{ exact: true }}>All Projects</Link>
      <Link to="/about" className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>About</Link>
      <Link to="/contact" className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>Contact</Link>
      <a href="mailto:evdokimovasia@gmail.com" className="nav-link" aria-label="Email">@</a>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1560px] px-6 py-16 text-xs uppercase tracking-widest text-muted-foreground md:px-[9%]">
      © {new Date().getFullYear()} Anastasia Evdokimova — Moscow | Dubai
    </footer>
  );
}
