import { ArrowRight, BrainCircuit, Bug, CloudCog, BriefcaseBusiness, Check, ChevronDown, ClipboardCheck, Code2, Database, GraduationCap, Headphones, Layers3, ListChecks, Menu, MessageCircleQuestion, MonitorCog, Play, Rocket, Smartphone, Sparkles, Target, TrendingUp, Users, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiCoursera, SiFresh, SiGithub, SiGooglecloud, SiCisco, SiPaytm, SiSentry, SiSupabase, SiUdemy, SiZoho } from "react-icons/si";
import experienceTeamThree from "@/assets/experience-team-three-waist-up.png";
import heroTeamCutout from "@/assets/hero-team-cutout.png";
import partnerAyesha from "@/assets/partner-ayesha-pink.jpg";
import partnerArslan from "@/assets/partner-arslan.jpg";
import partnerSamra from "@/assets/partner-samra.jpg";
import workflowConsultation from "@/assets/workflow-consultation.jpg";
import workflowPlanning from "@/assets/workflow-planning.jpg";
import workflowDevelopment from "@/assets/workflow-development.jpg";
import workflowDeployment from "@/assets/workflow-deployment.jpg";
import { Button } from "@/components/ui/button";
const navItems = ["Home", "Internships", "Services", "Courses", "Career", "Contact Us", "About Us"];
const internshipLinks = [{
  label: "Apply for Internship",
  href: "#apply",
  icon: BriefcaseBusiness
}, {
  label: "How It Works",
  href: "#how-it-works",
  icon: Play
}, {
  label: "Career Fields",
  href: "#career-fields",
  icon: Target
}, {
  label: "FAQs",
  href: "#faq",
  icon: MessageCircleQuestion
}];
const partnerGroups = ["All partners", "Technology", "Learning", "Campus network"];
const partners = [{
  name: "Google Cloud",
  category: "Technology",
  icon: SiGooglecloud,
  color: "partner-google"
}, {
  name: "Supabase",
  category: "Technology",
  icon: SiSupabase,
  color: "partner-supabase"
}, {
  name: "GitHub",
  category: "Technology",
  icon: SiGithub,
  color: "partner-github"
}, {
  name: "Sentry",
  category: "Technology",
  icon: SiSentry,
  color: "partner-sentry"
}, {
  name: "Freshworks",
  category: "Technology",
  icon: SiFresh,
  color: "partner-freshworks"
}, {
  name: "Zoho",
  category: "Technology",
  icon: SiZoho,
  color: "partner-zoho"
}, {
  name: "Cisco Networking Academy",
  category: "Learning",
  icon: SiCisco,
  color: "partner-ibm"
}, {
  name: "Coursera",
  category: "Learning",
  icon: SiCoursera,
  color: "partner-coursera"
}, {
  name: "Udemy",
  category: "Learning",
  icon: SiUdemy,
  color: "partner-udemy"
}, {
  name: "Paytm",
  category: "Campus network",
  icon: SiPaytm,
  color: "partner-paytm"
}];
const services = [{
  icon: Code2,
  title: "Web Development",
  text: "We build high-performance, visually striking web platforms using React, Next.js, and scalable APIs — engineered for speed and reliability.",
  tags: ["React", "Next.js", "Node.js", "UI/UX", "Performance"],
  image: workflowDevelopment
}, {
  icon: Layers3,
  title: "Software Engineering",
  text: "From SaaS platforms to enterprise systems, our engineering approach blends reliability, scalability, and modern architecture.",
  tags: ["Microservices", "Cloud", "Architecture", "API Design"],
  image: workflowPlanning
}, {
  icon: Database,
  title: "Data & Analytics",
  text: "Turn data into insights: data pipelines, analytics platforms, and ML-ready infrastructure to inform product and business decisions.",
  tags: ["Data Engineering", "Analytics", "BI", "ML"],
  image: workflowConsultation
}, {
  icon: BrainCircuit,
  title: "AI & Machine Learning",
  text: "Leverage artificial intelligence and machine learning to automate processes, drive intelligent decision-making, and build predictive models.",
  tags: ["AI", "Machine Learning", "NLP", "Computer Vision"],
  image: workflowDeployment
}, {
  icon: Smartphone,
  title: "Mobile Development",
  text: "Create high-performance native and cross-platform mobile solutions for iOS and Android with exceptional user experiences.",
  tags: ["React Native", "Flutter", "iOS", "Android"],
  image: workflowDevelopment
}, {
  icon: CloudCog,
  title: "Cloud & DevOps",
  text: "Scalable cloud architecture on AWS, Azure, and Google Cloud with robust CI/CD pipelines, automation, and infrastructure as code.",
  tags: ["AWS", "Azure", "CI/CD", "Kubernetes"],
  image: workflowDeployment
}];
const workflowSteps = [{
  icon: ClipboardCheck,
  title: "Consultation & needs analysis",
  text: "We first understand your challenges to tailor a solution that fits your needs.",
  image: workflowConsultation
}, {
  icon: ListChecks,
  title: "Planning & strategy development",
  text: "Our team crafts a strategic plan, defining the project roadmap and setting timelines.",
  image: workflowPlanning
}, {
  icon: MonitorCog,
  title: "Design & development",
  text: "Our designers create intuitive interfaces, while developers build scalable, robust systems.",
  image: workflowDevelopment
}, {
  icon: Bug,
  title: "Testing & quality assurance",
  text: "We rigorously test for security, performance resolving any issues before deployment.",
  image: workflowDevelopment
}, {
  icon: Headphones,
  title: "Deployment & support",
  text: "Smooth launch with long-term technical support and system monitoring.",
  image: workflowDeployment
}];
const foundingPartners = [{
  name: "Ayesha",
  role: "Full Stack Web Developer",
  image: partnerAyesha,
  linkedin: "https://www.linkedin.com/in/ayesha/"
}, {
  name: "Arslan",
  role: "Full Stack Web Developer",
  image: partnerArslan,
  linkedin: "https://www.linkedin.com/in/arslan/"
}, {
  name: "Samra",
  role: "Full Stack Web Developer",
  image: partnerSamra,
  linkedin: "https://www.linkedin.com/in/samra/"
}];
const officeLocations = [{
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
function LocationsMap() {
  return <div className="location-map-shell">
      <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-132.0%2C5.0%2C83.0%2C63.0&layer=mapnik" className="location-map" title="Swift Lab global locations map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      <div className="location-map-links" aria-label="Open office locations on map">
        {officeLocations.map(location => <a key={location.name} href={location.href} target="_blank" rel="noreferrer">
            {location.name}
          </a>)}
      </div>
    </div>;
}
const journeySteps = [{
  icon: Sparkles,
  label: "Ideation",
  title: "Ideation & Architecture",
  text: "We don't just write code. We architect solutions. Every internship begins with deep-dive sessions to bridge the gap between abstract concepts and technical feasibility.",
  image: workflowConsultation,
  alt: "A collaborative consultation shaping an early technology idea"
}, {
  icon: Users,
  label: "Collaboration",
  title: "Pair Programming & Review",
  text: "Learn the standard of excellence through rigorous code reviews and collaborative sprints with senior engineers.",
  image: workflowPlanning,
  alt: "A technology team planning and reviewing work together"
}, {
  icon: Code2,
  label: "Prototyping",
  title: "Rapid Prototyping",
  text: "Ship fast, iterate faster. We prioritize functional prototypes that can be tested in real-world environments within weeks.",
  image: workflowDevelopment,
  alt: "Developers building and testing a working prototype"
}, {
  icon: Rocket,
  label: "Production",
  title: "Production Launch",
  text: "Your code doesn't sit in a sandbox. We push to production, ensuring your contributions reach end-users and drive actual business value.",
  image: workflowDeployment,
  alt: "A completed digital product being prepared for production launch"
}];
function JourneyShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;
    const timer = window.setInterval(() => {
      setActiveStep(current => (current + 1) % journeySteps.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [activeStep]);
  const activeJourney = journeySteps[activeStep];
  if (!activeJourney) return null;
  const ActiveIcon = activeJourney.icon;
  return <section id="courses" className="journey-showcase border-b border-border px-5 py-14 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="journey-heading">
          <p>The journey</p>
          <h2>
            Where ideas become <span>pull requests</span>
          </h2>
        </div>

        <div className="journey-stage">
          <div className="journey-copy" key={`copy-${activeStep}`}>
            <div className="journey-step-meta">
              <span>{String(activeStep + 1).padStart(2, "0")}</span>
              <span>{activeJourney.label}</span>
            </div>
            <span className="journey-icon" aria-hidden="true">
              <ActiveIcon />
            </span>
            <h3>{activeJourney.title}</h3>
            <p>{activeJourney.text}</p>
            {activeStep === journeySteps.length - 1 && <Button asChild variant="brand" size="lg">
                <a href="#apply">
                  View past projects <ArrowRight />
                </a>
              </Button>}
          </div>

          <div className="journey-visual" key={`visual-${activeStep}`}>
            <img src={activeJourney.image} width={1200} height={800} loading="lazy" alt={activeJourney.alt} />
            <div className="journey-image-label" aria-hidden="true">
              <span>Live project</span>
              <strong>{activeJourney.label}</strong>
            </div>
            <span className="journey-image-index" aria-hidden="true">
              0{activeStep + 1}
            </span>
          </div>
        </div>

        <div className="journey-nav" role="tablist" aria-label="Project journey stages">
          {journeySteps.map((step, index) => <button key={step.label} type="button" role="tab" aria-selected={activeStep === index} className={activeStep === index ? "is-active" : ""} onClick={() => setActiveStep(index)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step.label}</strong>
              <i aria-hidden="true" />
            </button>)}
        </div>
      </div>
    </section>;
}
function Brand() {
  return <a href="#home" className="flex items-center gap-2.5" aria-label="Swift Lab Technologies home">
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
    </a>;
}
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Brand />
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {navItems.map(item => item === "Internships" ? <div className="group relative" key={item}>
                <a href="#internships" className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-accent hover:text-primary">
                  {item}
                  <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" aria-hidden="true" />
                </a>
                <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-md border border-border bg-card p-2 shadow-soft">
                    {internshipLinks.map(({
                label,
                href,
                icon: Icon
              }) => <a key={label} href={href} className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary">
                        <Icon className="size-4" aria-hidden="true" />
                        {label}
                      </a>)}
                  </div>
                </div>
              </div> : <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-accent hover:text-primary">
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
                  <a onClick={() => setMenuOpen(false)} href="#internships" className="block rounded-md px-2 py-2 text-sm font-bold text-primary">
                    Internships
                  </a>
                  <div className="grid grid-cols-2 gap-1 border-t border-primary/10 pt-2">
                    {[["Apply", "#apply"], ["How It Works", "#how-it-works"], ["Career Fields", "#career-fields"], ["FAQs", "#faq"]].map(([label, href]) => <a key={label} onClick={() => setMenuOpen(false)} href={href} className="rounded-md px-2 py-2 text-xs font-semibold text-foreground/75 hover:bg-background hover:text-primary">
                        {label}
                      </a>)}
                  </div>
                </div> : <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="rounded-md px-3 py-2.5 text-sm font-semibold hover:bg-accent">
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
export default function HomePage() {
  const [partnerGroup, setPartnerGroup] = useState("All partners");
  const visiblePartners = partnerGroup === "All partners" ? partners : partners.filter(partner => partner.category === partnerGroup);
  return <div className="min-h-screen overflow-x-clip bg-background">
      <Header />
      <main>
        <section id="home" className="hero-section relative overflow-hidden border-b border-border/60">
          <div className="absolute -left-24 top-20 size-72 rounded-[44%_56%_64%_36%/50%_42%_58%_50%] bg-surface-mint opacity-75" aria-hidden="true" />
          <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-5 py-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/70 px-4 py-2 text-xs font-bold uppercase text-brand-ink">
                <Sparkles className="size-4" aria-hidden="true" /> Applications open for 2026
              </div>
              <h1 className="text-balance text-5xl font-extrabold leading-[1.08] text-brand-ink sm:text-6xl lg:text-[4.35rem]">
                Learn by doing. <span className="text-primary">Grow with purpose.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Step into the tech industry with hands-on internships, dedicated mentors and real
                projects that build a portfolio employers notice.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="brand" size="xl">
                  <a href="#apply">
                    Explore internships <ArrowRight />
                  </a>
                </Button>
                <Button asChild variant="brandOutline" size="xl">
                  <a href="#how-it-works">
                    <Play /> See how it works
                  </a>
                </Button>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-foreground/80">
                {["Industry mentors", "Real-world projects", "Career support"].map(item => <span key={item} className="flex items-center gap-2">
                    <span className="grid size-5 place-items-center rounded-full bg-secondary text-primary">
                      <Check className="size-3" />
                    </span>
                    {item}
                  </span>)}
              </div>
            </div>
            <div className="hero-blueprint relative mx-auto w-full max-w-2xl overflow-hidden border border-primary/20 p-5 sm:p-8 lg:justify-self-end">
              <div className="hero-blueprint-index" aria-hidden="true">
                01 / FIELDWORK
              </div>
              <div className="hero-photo-frame relative ml-auto mt-9 w-[88%] sm:w-[84%]">
                <img src={heroTeamCutout} width={1200} height={1200} alt="Young technology interns collaborating around a laptop" className="aspect-[4/3] w-full object-cover" />
                <span className="hero-photo-cross hero-photo-cross-left" aria-hidden="true" />
                <span className="hero-photo-cross hero-photo-cross-right" aria-hidden="true" />
              </div>
              <div className="hero-connector" aria-hidden="true">
                <span />
              </div>
              <div className="float-blueprint absolute bottom-5 left-4 flex items-center gap-3 border border-primary/20 bg-card/95 p-4 shadow-soft sm:bottom-8 sm:left-7">
                <span className="grid size-11 place-items-center bg-secondary text-primary">
                  <GraduationCap />
                </span>
                <span>
                  <strong className="block font-display text-lg text-brand-ink">1,200+</strong>
                  <span className="text-xs font-semibold text-muted-foreground">
                    students mentored
                  </span>
                </span>
              </div>
              <div className="absolute right-4 top-16 border-l border-primary/25 pl-3 text-right sm:right-7">
                <strong className="block text-xs uppercase text-primary">Live projects</strong>
                <span className="text-[0.65rem] font-semibold text-muted-foreground">
                  Portfolio-ready work
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="career-fields" className="career-gallery relative overflow-hidden border-b border-border/70 px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="relative mx-auto max-w-7xl">
            <div className="career-gallery-heading mx-auto max-w-4xl text-center">
              <p className="career-gallery-kicker">The professional transformation</p>
              <h2>Build the proof that opens doors.</h2>
              <p className="career-gallery-lead">
                Turn ambition into visible, credible work through guided practice and real briefs.<br className="hidden sm:block" />
                Leave with the confidence, craft and portfolio to step forward.<br className="hidden sm:block" />
                Step into every room with clarity and a story worth hearing.
              </p>
            </div>
            <div className="career-gallery-grid">
              {[{
              icon: GraduationCap,
              number: "01",
              title: "Focused Learning",
              text: "Master the foundations that modern technology teams expect."
            }, {
              icon: BriefcaseBusiness,
              number: "02",
              title: "Real Briefs",
              text: "Work through meaningful challenges shaped by industry practice."
            }, {
              icon: Users,
              number: "03",
              title: "Close Mentorship",
              text: "Get thoughtful feedback from people who know the work."
            }, {
              icon: Layers3,
              number: "04",
              title: "Portfolio Proof",
              text: "Present polished outcomes that make your ability visible."
            }, {
              icon: TrendingUp,
              number: "05",
              title: "Career Presence",
              text: "Enter interviews with clarity, confidence and a story worth hearing."
            }].map(({
              icon: Icon,
              number,
              title,
              text
            }) => <article key={title} className="career-gallery-card">
                  <div className="career-gallery-card-top">
                    <span>{number}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>)}
            </div>
            <div className="career-gallery-action">
              <span aria-hidden="true" />
              <Button asChild variant="brand" size="xl">
                <a href="#apply">Begin your journey <ArrowRight /></a>
              </Button>
              <span aria-hidden="true" />
            </div>
          </div>
        </section>
        <section id="partners" className="partners-section border-y border-border px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase text-brand-ink">
                The ecosystem behind every opportunity
              </p>
              <h2 className="mx-auto mt-3 text-balance text-3xl font-extrabold text-brand-ink sm:text-5xl">
                Tools, Partners &amp; Campus Network
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
                Industry platforms and learning partners connected in one practical talent
                ecosystem.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter partners">
              {partnerGroups.map(group => <Button key={group} type="button" variant={partnerGroup === group ? "orange" : "brandOutline"} size="sm" onClick={() => setPartnerGroup(group)}>
                  {group}
                </Button>)}
            </div>
            <div className="partner-marquee mt-12" aria-live="polite">
              <div className="partner-track">
                {[...visiblePartners, ...visiblePartners].map(({
                name,
                icon: PartnerIcon,
                color
              }, index) => <article key={`${name}-${index}`} aria-hidden={index >= visiblePartners.length} className="partner-logo group flex h-20 w-44 shrink-0 items-center gap-3 border border-border bg-card px-4 shadow-soft">
                      <PartnerIcon className={`size-8 shrink-0 ${color}`} aria-hidden="true" />
                      <h3 className="text-sm font-extrabold leading-tight text-brand-ink">
                        {name}
                      </h3>
                    </article>)}
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-3 text-center text-sm font-semibold text-muted-foreground">
              <span className="h-px w-12 bg-brand-coral/35" aria-hidden="true" />
              One network. Real tools. Career-ready outcomes.
              <span className="h-px w-12 bg-brand-coral/35" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section id="services" className="px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase text-brand-ink">Our Services</p>
              <h2 className="mt-3 text-balance text-3xl font-extrabold text-brand-ink sm:text-5xl">
                Our Expertise in Action
              </h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                Innovation meets execution — a blend of creative design, technical depth, and
                reliable delivery powering modern digital experiences.
              </p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({
              icon: Icon,
              title,
              text,
              tags
            }, index) => <article key={title} id={`service-${index + 1}`} className="expertise-card group flex min-h-[350px] flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-coral/40">
                  <div className="flex flex-1 flex-col p-6">
                  <span className="expertise-index" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <span className={`grid size-12 shrink-0 place-items-center rounded-md ${index % 3 === 1 ? "bg-surface-coral text-brand-coral" : "bg-surface-mint text-primary"}`}>
                    <Icon />
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold text-brand-ink sm:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map(tag => <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs font-bold text-foreground/70">
                        {tag}
                      </span>)}
                  </div>
                  <div className="mt-auto flex items-center gap-5 pt-7">
                    <a href="#contact-us" className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                      Learn More{" "}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a href={`#service-${index + 1}`} className="text-sm font-semibold text-muted-foreground underline decoration-border underline-offset-4 hover:text-brand-coral">
                      View details
                    </a>
                  </div>
                  </div>
                </article>)}
            </div>
          </div>
        </section>

        <section id="workflow" className="workflow-section border-y border-border px-5 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div className="max-w-xl text-left lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase text-brand-ink">How we work</p>
              <h2 className="mt-3 text-balance text-4xl font-extrabold leading-tight text-brand-ink sm:text-6xl">
                Our 5-step workflow
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
                Our efficient workflow ensures streamlined IT solutions — from strategy to execution
                and quality delivery.
              </p>
              <div className="mt-8 h-1 w-16 rounded-full bg-brand-coral" aria-hidden="true" />
            </div>
            <div id="workflow-steps" className="relative w-full max-w-[760px] min-w-0 justify-self-end">
              {workflowSteps.map(({
              icon: Icon,
              title,
              text,
              image
            }, index) => <article key={title} className="workflow-card sticky overflow-hidden border border-brand-coral/25 bg-card shadow-workflow">
                  <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative min-h-56 overflow-hidden md:min-h-80">
                      <img src={image} width={1200} height={720} loading="lazy" alt={`${title} stage of the Swift Lab Technologies workflow`} className="absolute inset-0 size-full object-cover" />
                      <span className="absolute left-4 top-4 rounded-sm bg-brand-coral px-3 py-1.5 font-display text-[0.65rem] font-extrabold uppercase text-primary-foreground shadow-coral">
                        Step {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex min-h-64 flex-col justify-center p-7 sm:p-10">
                      <span className="grid size-11 place-items-center rounded-md bg-surface-coral text-brand-coral">
                        <Icon className="size-5" />
                      </span>
                      <p className="mt-7 text-xs font-bold uppercase text-brand-coral">
                        From idea to impact
                      </p>
                      <h3 className="mt-2 text-2xl font-extrabold text-brand-ink sm:text-3xl">
                        {title}
                      </h3>
                      <p className="mt-4 leading-7 text-muted-foreground">{text}</p>
                    </div>
                  </div>
                </article>)}
            </div>
          </div>
        </section>


        <section id="internships" className="experience-band relative overflow-hidden border-b border-border">
          <div className="experience-stage mx-auto max-w-[1440px]">
            <div className="experience-corner" aria-hidden="true" />
            <div className="experience-wave experience-wave-back" aria-hidden="true" />
            <div className="experience-wave experience-wave-left" aria-hidden="true" />
            <div className="experience-wave experience-wave-front" aria-hidden="true" />

            <div className="experience-copy">
              <h2 className="experience-title">
                Empower Your Learners with
                <span>Work-Based Experience</span>
              </h2>
              <p className="experience-description">
                Schedule a call with us to discover how you can guarantee 100% of your learners
                access to global work experience to complement the skills they’ve built and
                accelerate their career development.
              </p>
              <Button asChild variant="orange" size="xl" className="experience-button">
                <a href="mailto:careers@swiftlabtechnologies.com">Request a Demo</a>
              </Button>
            </div>

            <img src={experienceTeamThree} width={1024} height={650} loading="lazy" alt="Three learners collaborating around a laptop" className="experience-people" />
          </div>
        </section>

        <JourneyShowcase />

        <section id="founding-partners" className="founders-section relative overflow-hidden px-5 py-14 lg:px-8 lg:py-16">
          <div className="founders-watermark" aria-hidden="true">LEADERSHIP</div>
          <div className="relative mx-auto max-w-7xl">
            <div className="founders-heading-grid">
              <p className="founders-kicker">Our Core Leadership</p>
              <h2 className="founders-title">Meet Our Visionaries</h2>
            </div>

            <div className="founders-grid">
              {foundingPartners.map((partner, index) => <article key={partner.name} className="founder-profile group">
                  <div className="founder-portrait-wrap">
                    <span className="founder-index" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <div className="founder-portrait">
                      <img src={partner.image} width={640} height={800} loading="lazy" alt={`${partner.name}, Full Stack Web Developer and partner at Swift Lab Technologies`} />
                    </div>
                    <span className="founder-corner founder-corner-top" aria-hidden="true" />
                    <span className="founder-corner founder-corner-bottom" aria-hidden="true" />
                  </div>
                  <div className="founder-details">
                    <div>
                      <p className="founder-position">Co-Founder and CEO</p>
                      <h3>{partner.name}</h3>
                      <p className="founder-role">{partner.role}</p>
                    </div>
                    <a href={partner.linkedin} target="_blank" rel="noreferrer" className="founder-linkedin founder-linkedin-real" aria-label={`Open ${partner.name}'s LinkedIn profile`} title={`${partner.name} on LinkedIn`}>
                      <FaLinkedin aria-hidden="true" />
                    </a>
                  </div>
                </article>)}
            </div>
          </div>
        </section>

      </main>
      <footer id="about-us" className="site-footer border-t border-border bg-brand-ink text-primary-foreground">
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
              return <a key={label} href="#about-us" aria-label={label} title={label} className={`footer-social ${colorClass}`}>
                    <SocialIcon className="size-[22px]" />
                  </a>;
            })}
            </div>
          </div>
          <div className="footer-links-grid">
            <div>
              <h3 className="footer-heading">Explore</h3>
              <div className="footer-link-list">
                <a href="#home">Home</a>
                <a href="#internships">Internships</a>
                <a href="#services">Services</a>
                <a href="#workflow">How it works</a>
              </div>
            </div>
            <div>
              <h3 className="footer-heading">Company</h3>
              <div className="footer-link-list">
                <a href="#about-us">About us</a>
                <a href="#partners">Partners</a>
                <a href="#internships">Careers</a>
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
      </footer>
    </div>;
}
