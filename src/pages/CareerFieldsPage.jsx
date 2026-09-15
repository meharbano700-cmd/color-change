import { ArrowRight, BadgeCheck, GraduationCap, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Header, Footer } from "@/components/layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import heroTeamCutout from "@/assets/hero-team-cutout.png";
import workflowPlanning from "@/assets/workflow-planning.jpg";
import workflowDeployment from "@/assets/workflow-deployment.jpg";

const heroSlides = [{
  title: "Six career fields.",
  highlight: "One real internship.",
  text: "Every track pairs you with a senior mentor and a live product — pick the field you want to break into and start shipping from week one.",
  image: heroTeamCutout,
  alt: "Interns collaborating on a live project",
  icon: GraduationCap,
  statValue: "1,200+",
  statLabel: "students mentored"
}, {
  title: "Build proof, not",
  highlight: "just certificates.",
  text: "You'll leave with shipped pull requests, a portfolio and recruiter-ready outcomes across AI, web, cloud, data, security and design.",
  image: workflowPlanning,
  alt: "A mentor reviewing a career roadmap with an intern",
  icon: Sparkles,
  statValue: "50+",
  statLabel: "live projects delivered"
}, {
  title: "Guided by engineers",
  highlight: "who ship for a living.",
  text: "Every field is led by practitioners currently working in that stack, so what you learn maps directly to what teams hire for.",
  image: workflowDeployment,
  alt: "A senior engineer mentoring an intern",
  icon: Users,
  statValue: "6",
  statLabel: "dedicated career tracks"
}];

const careerFields = [{
  image: "https://images.unsplash.com/photo-1655635643617-72e0b62b9278?auto=format&fit=crop&w=800&q=85",
  title: "Artificial Intelligence",
  text: "Build and deploy real AI/ML models under the guidance of working engineers who ship production systems."
}, {
  image: "https://images.unsplash.com/photo-1630524274689-2950ac0fc91e?auto=format&fit=crop&w=800&q=85",
  title: "Full Stack Web Development",
  text: "Ship production-grade web applications end-to-end, from React interfaces to Node.js APIs and databases."
}, {
  image: "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?auto=format&fit=crop&w=800&q=85",
  title: "UI/UX Design",
  text: "Design polished, user-centered interfaces backed by real research, wireframing and usability testing."
}, {
  image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=85",
  title: "Cybersecurity",
  text: "Learn to think like an attacker and defend like a pro — threat modeling, secure code review and real incident drills."
}, {
  image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=85",
  title: "Cloud & DevOps",
  text: "Provision infrastructure, automate deployments and keep real services running with CI/CD pipelines you build yourself."
}, {
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
  title: "Data Science & Analytics",
  text: "Turn messy, real-world data into dashboards and models that drive decisions — with mentors who work in analytics daily."
}];

const stats = [{
  icon: GraduationCap,
  value: "1,200+",
  label: "Students mentored"
}, {
  icon: Sparkles,
  value: "50+",
  label: "Live projects shipped"
}, {
  icon: ShieldCheck,
  value: "6",
  label: "Career fields to choose from"
}, {
  icon: Users,
  value: "92%",
  label: "Interns who'd recommend us"
}];

export default function CareerFieldsPage() {
  return <div className="min-h-screen overflow-x-clip bg-background">
      <Header />
      <main>
        <PageHero eyebrow="Career fields" slides={heroSlides} primaryCta={<Button asChild variant="brand" size="xl">
              <Link to="/apply">
                Apply Now <ArrowRight />
              </Link>
            </Button>} secondaryCta={<Button asChild variant="brandOutline" size="xl">
              <Link to="/how-it-works">See how it works</Link>
            </Button>} />

        <section className="career-gallery relative overflow-hidden border-b border-border/70 px-5 py-14 sm:py-16 lg:px-8 lg:py-16">
          <div className="relative mx-auto max-w-7xl">
            <div className="career-gallery-heading mx-auto max-w-4xl text-center">
              <p className="career-gallery-kicker">All career fields</p>
              <h2>Six tracks. Six real career paths.</h2>
              <p className="career-gallery-lead">
                Whichever field you pick, you'll work on a live project, get real code review and
                finish with outcomes recruiters actually recognize.
              </p>
            </div>
            <div className="career-gallery-grid">
              {careerFields.map(({
              image,
              title,
              text
            }) => <article key={title} className="career-gallery-card">
                  <div className="career-gallery-card-media">
                    <img src={image} alt={`${title} internship track`} loading="lazy" />
                    <span className="career-gallery-card-badge">
                      <BadgeCheck aria-hidden="true" /> Verified
                    </span>
                  </div>
                  <div className="career-gallery-card-body">
                    <span className="career-gallery-card-tag">Internship</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <Button asChild variant="brand" size="sm" className="career-gallery-card-cta">
                      <Link to="/apply">Apply Now <ArrowRight /></Link>
                    </Button>
                  </div>
                </article>)}
            </div>
          </div>
        </section>

        <section className="border-b border-border px-5 py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase text-brand-ink">Track record</p>
              <h2 className="mt-3 text-balance text-3xl font-extrabold text-brand-ink sm:text-5xl">
                Numbers behind every track
              </h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                Whichever field you choose, you're joining a program with a proven outcome record.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(({
              icon: Icon,
              value,
              label
            }) => <div key={label} className="flex flex-col items-center gap-3 border border-border bg-card p-7 text-center shadow-soft">
                  <span className="grid size-12 place-items-center rounded-md bg-surface-mint text-primary">
                    <Icon className="size-6" />
                  </span>
                  <strong className="font-display text-3xl text-brand-ink">{value}</strong>
                  <span className="text-sm font-semibold text-muted-foreground">{label}</span>
                </div>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}
