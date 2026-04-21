import Image from "next/image";
import {
  FaCalculator,
  FaCss3,
  FaDatabase,
  FaFacebook,
  FaFlask,
  FaGithub,
  FaBolt,
  FaHtml5,
  FaInstagram,
  FaLinkedin,
  FaMicrosoft,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import profileImage from "../public/img/IMG_6771.jpg";
import bioverseeScreenshot from "../public/img/bioversee.png";
import bioverseeScreenshot2 from "../public/img/bioversee2.png";
import smartGridApp1 from "../public/img/smartgridapp1.png";
import smartGridApp2 from "../public/img/smartgridapp2.png";
import { ProjectImageCarousel } from "./components/ProjectImageCarousel";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-fg">
      <span
        className="h-5 w-1.5 shrink-0 rounded-full bg-accent"
        aria-hidden
      />
      {children}
    </h2>
  );
}

function Home() {
  return (
    <div className="outdoor-backdrop">
      <a
        href="#main"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:inline-block focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-xl focus:bg-surface-1 focus:px-4 focus:py-2 focus:text-sm focus:text-fg focus:ring-2 focus:ring-glacier"
      >
        Skip to content
      </a>

      <main id="main">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
          <article
            id="top"
            className="rounded-2xl border border-border/90 bg-surface-1/95 px-5 py-8 shadow-[0_28px_64px_-32px_rgba(35,95,115,0.14)] sm:rounded-[2rem] sm:px-10 sm:py-10"
          >
            <header className="border-b border-border/70 pb-8">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-3xl border border-border/80 bg-surface-2 shadow-[0_12px_28px_-14px_rgba(45,110,130,0.18)] ring-4 ring-white/90 sm:h-36 sm:w-36">
                  <Image
                    src={profileImage}
                    alt="Máté Melcher"
                    width={144}
                    height={144}
                    priority
                    className="h-full w-full origin-[26%_32%] scale-[1.34] object-cover object-[26%_32%] sm:origin-[24%_30%] sm:scale-[1.30] sm:object-[24%_30%]"
                  />
                </div>
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <h1 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                    Máté Melcher
                  </h1>
                  <p className="mt-2 text-sm font-medium text-accent sm:text-base">
                    Environmental &amp; process engineering · Software ·
                    Economics
                  </p>
                  <ul className="mt-4 flex flex-col gap-1.5 text-sm text-fg-muted sm:mt-3">
                    <li>Innsbruck, Austria</li>
                    <li>
                      <a
                        href="mailto:melchermate28@gmail.com"
                        className="text-fg underline decoration-border underline-offset-2 transition-colors hover:text-accent hover:decoration-accent"
                      >
                        melchermate28@gmail.com
                      </a>
                    </li>
                    <li className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:justify-start">
                      <a
                        href="https://www.linkedin.com/in/mate-melcher-5a16601bb/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-fg transition-colors hover:text-glacier"
                      >
                        <FaLinkedin className="text-base" aria-hidden />
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/MelcherMate"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-fg transition-colors hover:text-glacier"
                      >
                        <FaGithub className="text-base" aria-hidden />
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>

            <section
              id="summary"
              className="scroll-mt-6 border-b border-border/60 py-8"
            >
              <SectionTitle>Summary</SectionTitle>
              <p className="leading-relaxed text-fg-muted">
                Hi! I am an engineer, economist, and self-taught software developer. 
                After working as an economist at a multinational
                company, I returned to engineering and am pursuing an MSc in
                Environmental, Process and Energy Engineering at MCI Innsbruck,
                focusing on wastewater treatment and practical process engineering challenges. I
                believe engineering should improve lives and make economic
                sense.
              </p>
            </section>

            <section
              id="current-projects"
              className="scroll-mt-6 border-b border-border/60 py-8"
            >
              <SectionTitle>Current projects</SectionTitle>
              <div className="mt-2 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5">
                <article className="flex h-full min-h-0 min-w-0 flex-col gap-4 rounded-2xl border border-border/80 bg-surface-2/50 p-4 sm:p-5">
                  <h3 className="flex items-center gap-2 text-base font-semibold text-fg">
                    <FaFlask className="text-lg text-accent" aria-hidden />
                    Bioversee
                  </h3>
                  <ProjectImageCarousel
                    priority
                    slides={[
                      {
                        src: bioverseeScreenshot,
                        alt:
                          "Bioversee dashboard: bioreactor schematic, pump and agitator controls, and temperature and pH charts",
                      },
                      {
                        src: bioverseeScreenshot2,
                        alt: "Bioversee dashboard — second view",
                      },
                    ]}
                  />
                  <p className="text-sm leading-relaxed text-fg-muted sm:text-[15px]">
                    The original idea came when I had to work with a bioreactor
                    manufactured in the 1970s by a former professor. I thought I
                    could create a modern, user-friendly control panel and connect
                    it to this old machine.
                  </p>
                  <a
                    href="https://www.bioversee.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex w-fit items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    Visit site
                  </a>
                </article>

                <article className="flex h-full min-h-0 min-w-0 flex-col gap-4 rounded-2xl border border-border/80 bg-surface-2/50 p-4 sm:p-5">
                  <h3 className="flex items-center gap-2 text-base font-semibold text-fg">
                    <FaBolt className="text-lg text-accent" aria-hidden />
                    Smart Grid Simulator
                  </h3>
                  <ProjectImageCarousel
                    slides={[
                      {
                        src: smartGridApp1,
                        alt: "Smart Grid Simulator — main view",
                      },
                      {
                        src: smartGridApp2,
                        alt: "Smart Grid Simulator — second view",
                      },
                    ]}
                  />
                  <p className="text-sm leading-relaxed text-fg-muted sm:text-[15px]">
                    Right now the Smart Grid Simulator behaves more like a
                    lightweight game than a production control tool. The goal is
                    to evolve it into a practice environment for engineering
                    students: it explains core smart-grid concepts and gives rough
                    estimates of build-out cost and operating revenue.
                  </p>
                  <a
                    href="https://smartgridapp.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex w-fit items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    Visit site
                  </a>
                </article>
              </div>
            </section>

            <section
              id="experience"
              className="scroll-mt-6 border-b border-border/60 py-8"
            >
              <SectionTitle>Experience</SectionTitle>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                    <h3 className="font-semibold leading-snug text-fg">
                      Talent Program Intern — K&amp;H Bank (Karrierstart!)
                    </h3>
                    <span className="shrink-0 font-mono text-xs tabular-nums text-fg-subtle sm:pt-0.5 sm:text-sm">
                      2024 – 2025
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted sm:text-[15px]">
                    Rotational program across Private Banking and Corporate
                    Finance. Strong analytical, teamwork, and problem-solving
                    work on initiatives including the “Bank Branch of the
                    Future” and “1 Million Project”.
                  </p>
                </div>
                <div>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                    <h3 className="font-semibold leading-snug text-fg">
                      Founder &amp; Full-Stack Developer — Bioversee
                    </h3>
                    <span className="shrink-0 font-mono text-xs tabular-nums text-fg-subtle sm:pt-0.5 sm:text-sm">
                      2024 – present
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted sm:text-[15px]">
                    Web-based automation for industrial equipment, cloud control
                    integrations, and database tooling for process control and
                    optimization.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="education"
              className="scroll-mt-6 border-b border-border/60 py-8"
            >
              <SectionTitle>Education</SectionTitle>
              <ul className="space-y-5">
                <li>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                    <h3 className="font-semibold text-fg">
                      MCI Management Center Innsbruck
                    </h3>
                    <span className="shrink-0 font-mono text-xs tabular-nums text-fg-subtle sm:text-sm">
                      In progress
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-fg-muted">
                    MSc, Environmental, Process and Energy Engineering
                  </p>
                  <p className="mt-1 text-sm text-fg-subtle">Thesis: TBD</p>
                </li>
                <li>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                    <h3 className="font-semibold text-fg">
                      University of Debrecen
                    </h3>
                    <span className="shrink-0 font-mono text-xs tabular-nums text-fg-subtle sm:text-sm">
                      2025
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-fg-muted">
                    BSc, Marketing &amp; Commerce
                  </p>
                  <p className="mt-1 text-sm text-fg-subtle">
                    Thesis: Bioversee — A Startup for Industrial Automation
                  </p>
                </li>
                <li>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                    <h3 className="font-semibold text-fg">
                      University of Debrecen
                    </h3>
                    <span className="shrink-0 font-mono text-xs tabular-nums text-fg-subtle sm:text-sm">
                      2023
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-fg-muted">BSc, Bioengineering</p>
                  <p className="mt-1 text-sm text-fg-subtle">
                    Thesis: Use of <i>Saccharomyces bayanus</i> and{" "}
                    <i>S. pombe</i> in cider making
                  </p>
                </li>
              </ul>
            </section>

            <section className="scroll-mt-6 border-b border-border/60 py-8">
              <SectionTitle>Volunteer &amp; other</SectionTitle>
              <div className="space-y-5">
                <div>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                    <h3 className="font-semibold text-fg">
                      Administrative support — Feledhetetlen Foundation
                    </h3>
                    <span className="shrink-0 font-mono text-xs tabular-nums text-fg-subtle sm:text-sm">
                      2021 – 2024
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted sm:text-[15px]">
                    Non-profit focused on dementia care; contributed to
                    communications and helped increase website traffic by about
                    40%.
                  </p>
                </div>
                <div>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                    <h3 className="font-semibold text-fg">
                      Windsurf instructor — Surf Core
                    </h3>
                    <span className="shrink-0 font-mono text-xs tabular-nums text-fg-subtle sm:text-sm">
                      2019 – 2022
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted sm:text-[15px]">
                    Taught 100+ students (ages 5–76); improved retention by about
                    30% through structured, hands-on lessons.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="skills"
              className="scroll-mt-6 border-b border-border/60 py-8"
            >
              <SectionTitle>Technical skills</SectionTitle>
              <ul className="flex flex-wrap gap-2">
                {[
                  { icon: FaPython, label: "Python" },
                  { icon: FaHtml5, label: "HTML" },
                  { icon: FaCss3, label: "CSS" },
                  { icon: SiMongodb, label: "MongoDB" },
                  { icon: FaReact, label: "React" },
                  { icon: FaCalculator, label: "MATLAB" },
                  { icon: FaDatabase, label: "PostgreSQL" },
                  { icon: FaGithub, label: "Git & GitHub" },
                  { icon: FaFlask, label: "ChemCad" },
                  { icon: FaMicrosoft, label: "Microsoft 365" },
                ].map((s) => (
                  <li key={s.label}>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface-2/80 px-3 py-1.5 text-xs text-fg shadow-sm">
                      <s.icon
                        className="text-sm text-accent"
                        aria-hidden
                      />
                      {s.label}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section
              id="social"
              className="scroll-mt-6 border-b border-border/60 py-8"
            >
              <SectionTitle>Social</SectionTitle>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    href: "https://www.instagram.com/mmate_skiing/",
                    icon: FaInstagram,
                    label: "Instagram",
                  },
                  {
                    href: "https://www.facebook.com/profile.php?id=100080118015753",
                    icon: FaFacebook,
                    label: "Facebook",
                  },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-2xl border border-border/80 bg-surface-2/50 px-3 py-2.5 text-sm font-medium text-fg transition-all hover:border-glacier/50 hover:bg-surface-1 hover:shadow-md"
                    >
                      <item.icon className="text-lg text-accent" aria-hidden />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section id="interests" className="scroll-mt-6 py-8">
              <SectionTitle>Interests</SectionTitle>
              <p className="text-sm leading-relaxed text-fg-muted sm:text-[15px]">
                Heat and mass transfer · Automation · Energy storage ·
                Biotechnology · Macroeconomics
              </p>
            </section>
          </article>
        </div>
      </main>

      <footer className="border-t border-border/60 py-6">
        <p className="text-center text-xs text-fg-subtle">
          © {new Date().getFullYear()} Máté Melcher
        </p>
      </footer>
    </div>
  );
}

export default Home;
