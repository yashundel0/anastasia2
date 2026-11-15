import { describe, expect, it } from "vitest";
import { contact } from "@/lib/artworks";

describe("Artist contact details", () => {
  it("uses the supplied UAE number and callable international destination", () => {
    expect(contact.phone).toBe("+971 555 790995");
    expect(contact.phoneHref).toBe("tel:+971555790995");
  });
  it("uses the supplied email", () => {
    expect(contact.email).toBe("siaevdokimova@gmail.com");
  });
  it("uses the supplied Instagram profile", () => {
    expect(contact.instagram).toBe("https://www.instagram.com/sia_evdokimova?vrfl=NGpkbTZreGF1NnE2");
  });
});