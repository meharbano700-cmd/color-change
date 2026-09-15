import { ArrowRight, BriefcaseBusiness, ChevronDown, Menu, MessageCircleQuestion, Play, Rocket, Target, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export const navItems = ["Home", "Internships", "Services", "Courses", "Career", "Contact Us", "About Us"];

export const internshipLinks = [{
  label: "Apply for Internship",
  href: "/apply",
  icon: BriefcaseBusiness
}, {
  label: "How It Works",
  href: "/how-it-works",
  icon: Play
}, {
  label: "Career Fields",
  href: "/career-fields",
  icon: Target
}, {
  label: "FAQs",
  href: "/faq",
  icon: MessageCircleQuestion
}];

export const officeLocations = [{
  name: "United States",
  href: "https://www.openstreetmap.org/search?query=United%20States"
}, {
  name: "United Kingdom",
  href: "https://www.openstreetmap.org/search?query=United%20Kingdom"
}, {
  name: "Pakistan",
  href: "https://www.openstreetmap.org/search?query=Pakistan"
}, {
  name: "Germany",
  href: "https://www.openstreetmap.org/search?query=Germany"
}];

export function LocationsMap() {
  return <div className="location-map-shell">
      <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-132.0%2C5.0%2C83.0%2C63.0&layer=mapnik" className="location-map" title="Swift Lab global locations map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      <div className="location-map-links" aria-label="Open office locations on map">
        {officeLocations.map(location => <a key={location.name} href={location.href} target="_blank" rel="noreferrer">
            {location.name}
          </a>)}
      </div>
    </div>;
}

export function Brand() {
  return <Link to="/" className="flex items-center gap-2.5" aria-label="Swift Lab Technologies home">
      <span className="brand-spectrum relative grid size-10 place-items-center overflow-hidden rounded-md text-primary-foreground shadow-brand">
        <Rocket className="size-5" aria-hidden="true" />
        <span className="absolute -bottom-2 -right-2 size-5 rounded-full bg-brand-gold" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-[1.04rem] font-extrabold text-brand-ink">
          SWIFT LAB
        </span>
        <span className="mt-1 block text-[0.58rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Technologies
        </span>
      </span>
    </Link>;
}

function navHref(item) {
  return item === "Home" ? "/" : `/#${item.toLowerCase().replaceAll(" ", "-")}`;
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Brand />
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {navItems.map(item => item === "Internships" ? <div className="group relative" key={item}>
                <a href="/#internships" className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-accent hover:text-primary">
                  {item}
                  <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" aria-hidden="true" />
                </a>
                <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-md border border-border bg-card p-2 shadow-soft">
                    {internshipLinks.map(({
                label,
                href,
                icon: Icon
              }) => <Link key={label} to={href} className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary">
                        <Icon className="size-4" aria-hidden="true" />
                        {label}
                      </Link>)}
                  </div>
                </div>
              </div> : <a key={item} href={navHref(item)} className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-accent hover:text-primary">
                {item}
              </a>)}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost">
            <a href="#login">Log in</a>
          </Button>
          <Button asChild variant="brand">
            <a href="#register">
              Register <ArrowRight />
            </a>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="xl:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(open => !open)}>
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {menuOpen && <nav className="border-t border-border bg-background px-5 py-5 xl:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map(item => item === "Internships" ? <div key={item} className="rounded-md bg-surface-mint/60 p-2">
                  <a onClick={() => setMenuOpen(false)} href="/#internships" className="block rounded-md px-2 py-2 text-sm font-bold text-primary">
                    Internships
                  </a>
                  <div className="grid grid-cols-2 gap-1 border-t border-primary/10 pt-2">
                    {internshipLinks.map(({
                label,
                href
              }) => <Link key={label} onClick={() => setMenuOpen(false)} to={href} className="rounded-md px-2 py-2 text-xs font-semibold text-foreground/75 hover:bg-background hover:text-primary">
                        {label}
                      </Link>)}
                  </div>
                </div> : <a key={item} onClick={() => setMenuOpen(false)} href={navHref(item)} className="rounded-md px-3 py-2.5 text-sm font-semibold hover:bg-accent">
                  {item}
                </a>)}
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-4">
              <Button asChild variant="brandOutline">
                <a href="#login">Log in</a>
              </Button>
              <Button asChild variant="brand">
                <a href="#register">Register</a>
              </Button>
            </div>
          </div>
        </nav>}
    </header>;
}

export function Footer() {
  return <footer id="about-us" className="site-footer border-t border-border bg-brand-ink text-primary-foreground">
      <div className="footer-main mx-auto grid max-w-[1440px] border-b border-primary-foreground/15">
        <div className="footer-brand">
          <Brand />
          <p className="mt-6 max-w-md text-sm leading-7 text-primary-foreground/65">
            Building the next generation of technology talent through practical learning,
            meaningful projects and thoughtful mentorship.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[[FaFacebook, "Facebook", "social-facebook"], [FaInstagram, "Instagram", "social-instagram"], [FaXTwitter, "X", "social-x"], [FaLinkedin, "LinkedIn", "social-linkedin"], [FaYoutube, "YouTube", "social-youtube"], [FaTiktok, "TikTok", "social-tiktok"]].map(([Icon, label, colorClass]) => {
            const SocialIcon = Icon;
            return <a key={label} href="/#about-us" aria-label={label} title={label} className={`footer-social ${colorClass}`}>
                  <SocialIcon className="size-[22px]" />
                </a>;
          })}
          </div>
        </div>
        <div className="footer-links-grid">
          <div>
            <h3 className="footer-heading">Explore</h3>
            <div className="footer-link-list">
              <a href="/#home">Home</a>
              <a href="/#internships">Internships</a>
              <a href="/#services">Services</a>
              <Link to="/how-it-works">How it works</Link>
            </div>
          </div>
          <div>
            <h3 className="footer-heading">Company</h3>
            <div className="footer-link-list">
              <a href="/#about-us">About us</a>
              <a href="/#partners">Partners</a>
              <Link to="/career-fields">Careers</Link>
              <a href="mailto:careers@swiftlabtechnologies.com">Contact</a>
            </div>
          </div>
        </div>
        <div id="contact-us" className="footer-locations">
          <div className="flex items-center justify-between gap-4">
            <h3 className="footer-heading">Our locations</h3>
            <span className="rounded-sm bg-primary-foreground/90 px-2 py-1 text-[0.65rem] font-bold uppercase text-brand-ink">
              Global team
            </span>
          </div>
          <LocationsMap />
        </div>
      </div>
      <div className="footer-bottom mx-auto flex max-w-[1440px] flex-col gap-3 text-xs text-primary-foreground/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Swift Lab Technologies. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>;
}
