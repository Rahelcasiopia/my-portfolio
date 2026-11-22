import {
  profile, facts, about, skills, experience, projects, education,
} from "../data/site";

const nav = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Work", "#work"],
  ["Contact", "#contact"],
];

function Ext({ href, className, children }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <nav>
        <div className="wrap">
          <a className="mark" href="#top" aria-label="Rachel Nigussie, back to top">R</a>
          <ul>
            {nav.map(([label, href]) => (
              <li key={href}><a className="l" href={href}>{label}</a></li>
            ))}
          </ul>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="wrap">
          <span className="eyebrow">Portfolio &middot; {profile.location}</span>
          <h1>{profile.name} <em>{profile.surname}</em></h1>
          <div className="role">{profile.role}</div>
          <p className="lede">{profile.intro}</p>
          <div className="cta">
            <a className="btn solid" href="#work">View my work</a>
            <Ext className="btn ghost" href={profile.linkedin}>LinkedIn</Ext>
            <Ext className="btn ghost" href={profile.github}>GitHub</Ext>
          </div>
          <div className="facts">
            {facts.map(([big, small]) => (
              <div key={big}><b>{big}</b>{small}</div>
            ))}
          </div>
        </div>
      </header>

      <section className="about" id="about">
        <div className="wrap">
          <div className="cols">
            <div className="eyebrow">About</div>
            <div>
              <p className="pull">{about.pull}</p>
              {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="rule" id="skills">
        <div className="wrap">
          <div className="head"><div className="eyebrow">Capabilities</div><h2>Technical skills</h2></div>
          <div className="skills">
            {skills.map((s) => (
              <div className="skill" key={s.title}>
                <h3>{s.title}</h3>
                <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rule" id="experience">
        <div className="wrap">
          <div className="head"><div className="eyebrow">Experience</div><h2>Where I have worked</h2></div>
          <div className="job">
            <div className="when">{experience.when}</div>
            <div>
              <h3>{experience.title}</h3>
              <div className="org">{experience.org}</div>
              <ul>{experience.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="band" id="work">
        <div className="wrap">
          <div className="head"><div className="eyebrow">Selected work</div><h2>Projects</h2></div>
          <div>
            {projects.map((p) => (
              <Ext className="proj" href={p.url} key={p.name}>
                <span className="n">{p.numeral}</span>
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                  <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
                <span className="go">View code &rarr;</span>
              </Ext>
            ))}
          </div>
        </div>
      </section>

      <section id="education">
        <div className="wrap">
          <div className="head"><div className="eyebrow">Education</div><h2>Training and study</h2></div>
          <div className="edu">
            {education.map((e) => (
              <div key={e.name}><h3>{e.name}</h3><p>{e.detail}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <span className="eyebrow">Open to opportunities</span>
          <h2>Let&rsquo;s build something <em>excellent</em>.</h2>
          <p>I am looking for a team that values clean code and good user experience. Review my code on GitHub, then message me on LinkedIn.</p>
          {(profile.email || profile.phone) && (
            <p>{[profile.email, profile.phone].filter(Boolean).join("  ·  ")}</p>
          )}
          <div className="cta">
            <Ext className="btn solid" href={profile.linkedin}>Message on LinkedIn</Ext>
            <Ext className="btn ghost" href={profile.github}>See my GitHub</Ext>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span>RACHEL NIGUSSIE &middot; FULL-STACK WEB DEVELOPER</span>
          <span>{profile.location}</span>
        </div>
      </footer>
    </>
  );
}
