import "./globals.css"
import {
  FaCalculator,
  FaCss3,
  FaDatabase,
  FaFacebook,
  FaFlask,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaMicrosoft,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import profileImage from "../../../public/img/profNoBg.png";

function Home() {
  return (
    <>
      <div className="pageLayout">
        <aside className="leftAside"></aside>

        <main className="mainContent">
          <header className="header">
            <h1>Máté Melcher</h1>
            <p>
              Innsbruck, Austria •{" "}
              <a href="mailto:melchermate28@gmail.com">
                melchermate28@gmail.com
              </a>
            </p>
            <a
              href="https://www.linkedin.com/in/mate-melcher-5a16601bb/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              LinkedIn Profile
            </a>
          </header>

          <div className="introSection">
            <div className="introImageWrapper">
              <img src={profileImage} className="introImage" />
            </div>
            <p className="introText">
              Hi, I'm Máté Melcher. I'm a passionate engineer, amateur
              programmer, and macroeconomics enthusiast. I believe engineering
              isn't just about invention—it's about creating solutions that
              improve lives and make economic sense.<br></br> After working a
              year as an economist at a multinational company, I realized how
              much I missed engineering. Now, I'm studying Environmental,
              Process & Energy Engineering at MCI Innsbruck, focusing on solving
              real-world challenges in heat tranfer management.
            </p>
          </div>

          <section className="linksSection">
            <h2>Social Links & Projects</h2>
            <div className="linksGrid">
              <a
                href="https://www.bioversee.com"
                target="_blank"
                rel="noreferrer"
                className="linkCard"
              >
                <FaFlask className="linkIcon" />
                <span>Bioversee</span>
              </a>
              <a
                href="https://github.com/MelcherMate"
                target="_blank"
                rel="noreferrer"
                className="linkCard"
              >
                <FaGithub className="linkIcon" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/mmate_skiing/"
                target="_blank"
                rel="noreferrer"
                className="linkCard"
              >
                <FaInstagram className="linkIcon" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100080118015753"
                target="_blank"
                rel="noreferrer"
                className="linkCard"
              >
                <FaFacebook className="linkIcon" />
                <span>Facebook</span>
              </a>
            </div>
          </section>

          <section>
            <h2>Professional Experience</h2>
            <div className="entry">
              <h3>
                K&H Bank – Karrierstart! Talent Program Intern (2024–2025)
              </h3>
              <p>
                Participated in a rotational program across Private Banking and
                Corporate Finance. Gained strong analytical, teamwork, and
                problem-solving skills while contributing to projects such as
                the “Bank Branch of the Future” and “1 Million Project”.
              </p>
            </div>
            <div className="entry">
              <h3>Bioversee – Founder & Full-Stack Developer (2024–ongoing)</h3>
              <p>
                Founded Bioversee, developing web-based automation solutions for
                industrial equipment. Integrated cloud control systems and
                database synchronization tools for process control and
                optimization.
              </p>
            </div>
          </section>

          <section>
            <h2>Education</h2>
            <div className="entry">
              <h3>MCI Management Center Innsbruck (ongoing)</h3>
              <p>
                <strong>
                  MSc in Environmental, Process and Energy Engineering
                </strong>{" "}
              </p>
              <p>Thesis: TBD...</p>
            </div>
            <div className="entry">
              <h3>University of Debrecen (2025)</h3>
              <p>
                <strong>BSc in Marketing & Commerce</strong>
              </p>
              <p>Thesis: Bioversee – A Startup for Industrial Automation</p>
            </div>
            <div className="entry">
              <h3>University of Debrecen (2023)</h3>
              <p>
                <strong>BSc in Bioengineering</strong>
              </p>
              <p>
                Thesis: The Use of <i>Saccharomyces bayanus</i> and{" "}
                <i>S. pombe</i> in Cider Making
              </p>
            </div>
          </section>

          <section>
            <h2>Volunteer Experience</h2>
            <div className="entry">
              <h3>Feledhetetlen Foundation (2021–2024)</h3>
              <p>
                Administrative staff at a dementia-focused non-profit,
                increasing website traffic by 40%.
              </p>
            </div>
            <div className="entry">
              <h3>Surf Core – Windsurf Instructor (2019–2022)</h3>
              <p>
                Taught 100+ students aged 5–76, increasing retention by 30%
                through hands-on teaching innovation.
              </p>
            </div>
          </section>

          {/* ====================== */}
          {/*   TECHNICAL SKILLS     */}
          {/* ====================== */}
          <section className="skillsSection">
            <h2>Technical Skills</h2>
            <div className="skillsGrid">
              <div className="skillCard">
                <FaPython className="skillIcon" />
                <span>Python</span>
              </div>
              <div className="skillCard">
                <FaHtml5 className="skillIcon" />
                <span>HTML</span>
              </div>
              <div className="skillCard">
                <FaCss3 className="skillIcon" />
                <span>CSS</span>
              </div>
              <div className="skillCard">
                <SiMongodb className="skillIcon" />
                <span>MongoDB</span>
              </div>
              <div className="skillCard">
                <FaReact className="skillIcon" />
                <span>React</span>
              </div>
              <div className="skillCard">
                <FaCalculator className="skillIcon" />
                <span>Matlab</span>
              </div>
              <div className="skillCard">
                <FaDatabase className="skillIcon" />
                <span>PostgreSQL</span>
              </div>
              <div className="skillCard">
                <FaGithub className="skillIcon" />
                <span>Git & GitHub</span>
              </div>
              <div className="skillCard">
                <FaFlask className="skillIcon" />
                <span>ChemCad</span>
              </div>
              <div className="skillCard">
                <FaMicrosoft className="skillIcon" />
                <span>Office 365</span>
              </div>
            </div>
          </section>

          <section>
            <h2>Interests</h2>
            <p>
              Heat and Mass Transfer • Automation • Energy Storage •
              Biotechnology • Macroeconomics
            </p>
          </section>
        </main>

        <aside className="rightAside"></aside>
      </div>
    </>
  );
}

export default Home;
