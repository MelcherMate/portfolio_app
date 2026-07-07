"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaCalculator,
  FaCube,
  FaCss3,
  FaDatabase,
  FaDraftingCompass,
  FaEnvelope,
  FaFacebook,
  FaFlask,
  FaGithub,
  FaBolt,
  FaHtml5,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMicrosoft,
  FaProjectDiagram,
  FaPython,
  FaReact,
  FaTerminal,
  FaWater,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import profileImage from "../public/img/IMG_6771.png";
import bioverseeScreenshot from "../public/img/bioversee.png";
import bioverseeScreenshot2 from "../public/img/bioversee2.png";
import smartGridApp1 from "../public/img/smartgridapp1.png";
import smartGridApp2 from "../public/img/smartgridapp2.png";
import ucBerkeleySeal from "../public/img/logos/uc-berkeley-seal.svg";
import mciLogo from "../public/img/logos/mci-logo.svg";
import universityOfDebrecenLogo from "../public/img/logos/university-of-debrecen-logo.png";
import { ProjectImageCarousel } from "./components/ProjectImageCarousel";
import type { StaticImageData } from "next/image";

function EducationEntry({
  icon,
  iconAlt,
  title,
  date,
  children,
}: {
  icon: StaticImageData;
  iconAlt: string;
  title: string;
  date: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="flex min-w-0 gap-3">
          <div className="relative mt-0.5 h-12 w-12 shrink-0">
            <Image
              src={icon}
              alt={iconAlt}
              fill
              className="object-contain"
            />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-fg">{title}</h3>
            {children}
          </div>
        </div>
        <span className="shrink-0 font-mono text-xs tabular-nums text-fg-subtle sm:text-sm">
          {date}
        </span>
      </div>
    </li>
  );
}

function ThesisDownloadDialog({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 cursor-pointer bg-fg/15"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="bioeng-thesis-dialog-title"
        className="relative w-full max-w-sm rounded-2xl border border-border/90 bg-surface-1 p-5 shadow-[0_28px_64px_-32px_rgba(40,40,40,0.24)]"
      >
        <h3
          id="bioeng-thesis-dialog-title"
          className="text-sm font-semibold text-fg"
        >
          Download thesis?
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          This thesis is written in Hungarian. Would you like to download it
          anyway?
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-full border border-border/80 bg-surface-1 px-4 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="cursor-pointer rounded-full bg-accent px-4 py-2 text-sm font-semibold text-fg transition-opacity hover:opacity-90"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 flex items-center gap-3 font-sans text-sm font-semibold uppercase tracking-[0.1em] text-fg sm:text-base">
      <span
        className="h-5 w-1.5 shrink-0 rounded-full bg-accent"
        aria-hidden
      />
      {children}
    </h2>
  );
}

function Home() {
  type SocialId = "linkedin" | "github" | "instagram" | "facebook";
  const [hoveredSocial, setHoveredSocial] = useState<SocialId | null>(null);
  const [bioengThesisDialogOpen, setBioengThesisDialogOpen] = useState(false);

  const downloadBioengThesis = () => {
    const link = document.createElement("a");
    link.href = "/docs/bioengineering-thesis.pdf";
    link.download =
      "Use of Saccharomyces bayanus and S. pombe in cider making.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setBioengThesisDialogOpen(false);
  };

  const grayDefaultSet = new Set<SocialId>(["linkedin", "facebook"]);

  const getSocialBorderClass = (id: SocialId) => {
    const isGrayDefault = grayDefaultSet.has(id);

    if (!hoveredSocial) {
      return isGrayDefault ? "border-border/80" : "border-accent";
    }

    const hoveredIsGrayDefault = grayDefaultSet.has(hoveredSocial);
    if (hoveredIsGrayDefault) {
      return id === hoveredSocial ? "border-accent" : "border-border/80";
    }

    return id === hoveredSocial ? "border-border/80" : "border-accent";
  };

  return (
    <div className="outdoor-backdrop">
      <a
        href="#main"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:inline-block focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-xl focus:bg-surface-1 focus:px-4 focus:py-2 focus:text-sm focus:text-fg focus:ring-2 focus:ring-glacier"
      >
        Skip to content
      </a>

      <main id="main">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 sm:py-6">
          <article
            id="top"
            className="rounded-2xl border border-border/90 bg-surface-1/95 p-5 shadow-[0_28px_64px_-32px_rgba(40,40,40,0.16)] sm:rounded-[2rem] sm:p-10"
          >
            <header className="border-b border-border/70 pb-6">
              <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[9rem_1fr_10rem] md:gap-5">
                <div className="flex items-center justify-center pr-1">
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border border-border/80 bg-surface-2 shadow-[0_12px_28px_-14px_rgba(40,40,40,0.2)] ring-4 ring-white/90 sm:h-32 sm:w-32">
                    <Image
                      src={profileImage}
                      alt="Máté Melcher"
                      width={5712}
                      height={3213}
                      priority
                      quality={100}
                      sizes="(max-width: 639px) 256px, 288px"
                      className="h-full w-full object-cover object-[32%_34%] sm:object-[30%_32%]"
                    />
                  </div>
                </div>
                <div className="flex min-w-0 w-full flex-col items-center justify-center px-0 text-center sm:px-2 md:px-4">
                  <h1 className="font-sans text-3xl font-semibold uppercase tracking-[0.1em] text-fg sm:text-[2.1rem]">
                    Máté Melcher
                  </h1>
                  <div className="mt-2 w-full text-center">
                    <div
                      className="role-rotator mx-auto font-sans uppercase tracking-[0.1em]"
                      aria-label="Current study track"
                    >
                      <span>Biochemical Engineer BSc</span>
                      <span>Marketing &amp; Commerce BSc</span>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5 font-sans text-sm uppercase tracking-[0.1em] text-fg-subtle">
                    <li className="flex items-center justify-center gap-2">
                      <FaMapMarkerAlt className="text-xs text-fg-subtle" aria-hidden />
                      <span>Innsbruck, Austria</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <FaEnvelope className="text-xs text-fg-subtle" aria-hidden />
                      <a href="mailto:melchermate28@gmail.com" className="text-fg-subtle">
                        melchermate28@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mx-auto grid w-fit grid-cols-4 gap-3 md:ml-auto md:grid-cols-2 md:justify-items-end">
                  <a
                    href="https://www.linkedin.com/in/mate-melcher-5a16601bb/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    onMouseEnter={() => setHoveredSocial("linkedin")}
                    onMouseLeave={() => setHoveredSocial(null)}
                    onFocus={() => setHoveredSocial("linkedin")}
                    onBlur={() => setHoveredSocial(null)}
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-md border bg-surface-1 text-fg transition-colors ${getSocialBorderClass("linkedin")}`}
                  >
                    <FaLinkedin className="text-2xl" aria-hidden />
                  </a>
                  <a
                    href="https://github.com/MelcherMate"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    onMouseEnter={() => setHoveredSocial("github")}
                    onMouseLeave={() => setHoveredSocial(null)}
                    onFocus={() => setHoveredSocial("github")}
                    onBlur={() => setHoveredSocial(null)}
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-md border bg-surface-1 text-fg transition-colors ${getSocialBorderClass("github")}`}
                  >
                    <FaGithub className="text-2xl" aria-hidden />
                  </a>
                  <a
                    href="https://www.instagram.com/mmate_skiing/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    onMouseEnter={() => setHoveredSocial("instagram")}
                    onMouseLeave={() => setHoveredSocial(null)}
                    onFocus={() => setHoveredSocial("instagram")}
                    onBlur={() => setHoveredSocial(null)}
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-md border bg-surface-1 text-fg transition-colors ${getSocialBorderClass("instagram")}`}
                  >
                    <FaInstagram className="text-2xl" aria-hidden />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100080118015753"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    onMouseEnter={() => setHoveredSocial("facebook")}
                    onMouseLeave={() => setHoveredSocial(null)}
                    onFocus={() => setHoveredSocial("facebook")}
                    onBlur={() => setHoveredSocial(null)}
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-md border bg-surface-1 text-fg transition-colors ${getSocialBorderClass("facebook")}`}
                  >
                    <FaFacebook className="text-2xl" aria-hidden />
                  </a>
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
                    <FaFlask className="text-lg text-fg" aria-hidden />
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
                    className="mt-auto inline-flex w-fit items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-fg transition-opacity hover:opacity-90"
                  >
                    Visit site
                  </a>
                </article>

                <article className="flex h-full min-h-0 min-w-0 flex-col gap-4 rounded-2xl border border-border/80 bg-surface-2/50 p-4 sm:p-5">
                  <h3 className="flex items-center gap-2 text-base font-semibold text-fg">
                    <FaBolt className="text-lg text-fg" aria-hidden />
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
                    className="mt-auto inline-flex w-fit items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-fg transition-opacity hover:opacity-90"
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
                      Co-founder &amp; General Manager — Outsider Skis
                    </h3>
                    <span className="shrink-0 font-mono text-xs tabular-nums text-fg-subtle sm:pt-0.5 sm:text-sm">
                      2025 – present
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted sm:text-[15px]">
                    Reshaping the skiing world with a revolutionary solution for
                    shape-changing skis.
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
                <div>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                    <h3 className="font-semibold leading-snug text-fg">
                      Talent Program Intern — K&amp;H Bank
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
              </div>
            </section>

            <section
              id="education"
              className="scroll-mt-6 border-b border-border/60 py-8"
            >
              <SectionTitle>Education</SectionTitle>
              <ul className="space-y-5">
                <EducationEntry
                  icon={ucBerkeleySeal}
                  iconAlt="University of California, Berkeley seal"
                  title="University of California, Berkeley"
                  date="In progress"
                >
                  <p className="mt-1 text-sm text-fg-muted">
                    Entrepreneurship and Leveraging AI summer courses
                  </p>
                </EducationEntry>
                <EducationEntry
                  icon={mciLogo}
                  iconAlt="MCI Management Center Innsbruck logo"
                  title="MCI Management Center Innsbruck"
                  date="In progress"
                >
                  <p className="mt-1 text-sm text-fg-muted">
                    MSc, Environmental, Process and Energy Engineering
                  </p>
                  <p className="mt-1 text-sm text-fg-subtle">Thesis: TBD</p>
                </EducationEntry>
                <EducationEntry
                  icon={universityOfDebrecenLogo}
                  iconAlt="University of Debrecen emblem"
                  title="University of Debrecen"
                  date="2025"
                >
                  <p className="mt-1 text-sm text-fg-muted">
                    BSc, Marketing &amp; Commerce
                  </p>
                  <p className="mt-1 text-sm text-fg-subtle">
                    Thesis:{" "}
                    <a
                      href="/docs/bioversee-thesis.pdf"
                      download="Bioversee — A Startup for Industrial Automation.pdf"
                      className="underline-offset-2 transition-colors hover:text-fg-muted hover:underline"
                    >
                      Bioversee — A Startup for Industrial Automation
                    </a>
                  </p>
                </EducationEntry>
                <EducationEntry
                  icon={universityOfDebrecenLogo}
                  iconAlt="University of Debrecen emblem"
                  title="University of Debrecen"
                  date="2023"
                >
                  <p className="mt-1 text-sm text-fg-muted">BSc, Bioengineering</p>
                  <p className="mt-1 text-sm text-fg-subtle">
                    Thesis:{" "}
                    <button
                      type="button"
                      onClick={() => setBioengThesisDialogOpen(true)}
                      className="cursor-pointer text-left underline-offset-2 transition-colors hover:text-fg-muted hover:underline"
                    >
                      Use of <i>Saccharomyces bayanus</i> and <i>S. pombe</i> in
                      cider making
                    </button>
                  </p>
                </EducationEntry>
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
                  { icon: FaProjectDiagram, label: "Simulink" },
                  { icon: FaFlask, label: "Aspen Plus" },
                  { icon: FaDraftingCompass, label: "Shapr3D" },
                  { icon: FaCube, label: "Blender" },
                  { icon: FaTerminal, label: "Cursor" },
                  { icon: FaWater, label: "ASIM 5" },
                  { icon: FaMicrosoft, label: "Microsoft 365" },
                ].map((s) => (
                  <li key={s.label}>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-surface-2/45 px-3 py-1.5 text-xs font-medium text-fg">
                      <s.icon
                        className="text-sm text-fg"
                        aria-hidden
                      />
                      {s.label}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="interests" className="scroll-mt-6 py-8">
              <SectionTitle>Interests</SectionTitle>
              <p className="text-sm leading-relaxed text-fg-muted sm:text-[15px]">
                Thermodynamics · Industrial automation · Energy storage ·
                Membrane technology · Wastewater treatment · Solid process engineering
                · Software development · Macroeconomics
              </p>
            </section>
          </article>
        </div>
      </main>

      <ThesisDownloadDialog
        open={bioengThesisDialogOpen}
        onClose={() => setBioengThesisDialogOpen(false)}
        onConfirm={downloadBioengThesis}
      />

      <footer className="border-t border-border/60 py-6">
        <p className="text-center text-xs text-fg-subtle">
          © {new Date().getFullYear()} Máté Melcher
        </p>
      </footer>
    </div>
  );
}

export default Home;
