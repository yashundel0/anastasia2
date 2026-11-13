import { createFileRoute } from "@tanstack/react-router";
import { contact } from "@/lib/artworks";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Anastasia Evdokimova" },
      { name: "description", content: "Contact Anastasia Evdokimova for commissions, exhibitions and acquisitions. Moscow | Dubai." },
      { property: "og:title", content: "Contact Anastasia Evdokimova" },
      { property: "og:description", content: "Commissions, exhibitions and acquisitions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-[1200px] px-6 fade-up">
        <h1 className="display text-6xl text-foreground md:text-9xl">C0NTACT \\</h1>
        <div className="contact-details mt-12 space-y-6 text-2xl md:text-4xl">
          <a href={`mailto:${contact.email}`} className="block text-foreground underline-offset-8 hover:underline">{contact.email}</a>
          <a href={`tel:${contact.phone}`} className="block text-foreground underline-offset-8 hover:underline">{contact.phone}</a>
          <p className="display text-muted-foreground">{contact.cities}</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
