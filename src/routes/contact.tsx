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
        <h1 className="page-heading text-foreground">Contact</h1>
        <div className="contact-details mt-8 text-base md:text-lg">
          <section aria-labelledby="contact-details-heading" className="contact-section">
            <h2 id="contact-details-heading" className="contact-section-label text-muted-foreground">Contact Details</h2>
            <a href={contact.phoneHref} className="block text-foreground underline-offset-8 hover:underline">{contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="block text-foreground underline-offset-8 hover:underline">{contact.email}</a>
          </section>
          <section aria-labelledby="contact-social-heading" className="contact-section">
            <h2 id="contact-social-heading" className="contact-section-label text-muted-foreground">Social</h2>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="block text-foreground underline-offset-8 hover:underline">Instagram ↗</a>
          </section>
          <p className="pt-8 text-muted-foreground">{contact.cities}</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
