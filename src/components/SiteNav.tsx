import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { contact } from "@/lib/artworks";

export function SiteNav({ overHero = false }: { overHero?: boolean }) {
  const [open, setOpen] = useState(false);
  return <div className={`site-header ${overHero ? "site-header-hero" : ""}`}>
    <div className="site-header-inner">
      <Link to="/" className="site-identity" aria-label="Evdokimova — home">Evdokimova</Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="menu-trigger" aria-label="Open menu" title="Open menu" aria-expanded={open}>
            <span className="hamburger" aria-hidden="true"><span /><span /><span /></span>
          </Button>
        </SheetTrigger>
        <SheetContent className="portfolio-menu" aria-describedby={undefined}>
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <div className="site-header-inner menu-header">
            <Link to="/" className="site-identity text-muted-foreground" onClick={() => setOpen(false)}>Evdokimova</Link>
          </div>
          <div className="menu-body">
          <nav aria-label="Main navigation" className="menu-links">
            <Link to="/about" activeProps={{ className: "menu-link-active" }} onClick={() => setOpen(false)}>About</Link>
            <Link to="/all-projects" activeProps={{ className: "menu-link-active" }} onClick={() => setOpen(false)}>Artworks</Link>
            <Link to="/contact" activeProps={{ className: "menu-link-active" }} onClick={() => setOpen(false)}>Contact</Link>
          </nav>
          <a href={`mailto:${contact.email}`} className="menu-email text-sm text-muted-foreground">{contact.email}</a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </div>;
}

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1560px] px-6 py-16 text-xs uppercase tracking-normal text-muted-foreground md:px-[9%]">
      © {new Date().getFullYear()} Anastasia Evdokimova — Moscow | Dubai
    </footer>
  );
}
