
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#">⚡ FirstPR</a>

        <div className="nav-links">
          <a href="#discover">Discover Issues</a>
          <a href="#how-it-works">How it works</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub ↗️
          </a>
        </div>

        <span className="badge">✦ Built for beginners</span>
      </nav>

      <main>
        <section className="hero">
          <span className="eyebrow">● YOUR OPEN-SOURCE JOURNEY STARTS HERE</span>

          <h1>
            Your first contribution
            <br />
            starts with <span>FirstPR.</span>
          </h1>

          <p>
            Stop searching endlessly for your first open-source issue.
            Find opportunities that match your skills, understand why
            they're a fit, and take your first step toward contributing.
          </p>

          <div className="features">
            <span>⌘ Real issues from GitHub</span>
            <span>✦ Skill-based matching</span>
            <span>♡ Open source for everyone</span>
          </div>
        </section>

        <section className="profile-card">
          <div className="card-heading">
            <div>
              <h2>Build your contributor profile</h2>
              <p>Tell us what you're comfortable working with.</p>
            </div>
            <span className="step">STEP 01 / 02</span>
          </div>

          <div className="form-grid">
            <label>
              Programming language
              <select id="language">
                <option>Python</option>
                <option>JavaScript</option>
                <option>Java</option>
                <option>C++</option>
                <option>TypeScript</option>
                <option>HTML/CSS</option>
              </select>
            </label>

            <label>
              Your experience
              <select id="experience">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </label>

            <label>
              What would you like to do?
              <select id="interest">
                <option>Good first issues</option>
                <option>Bug fixes</option>
                <option>Documentation</option>
                <option>Features</option>
              </select>
            </label>
          </div>

          <button
            className="primary-button"
            onClick={() => {
              document.getElementById('discover').scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            ⌕ Find my first contribution →
          </button>
        </section>

        <section id="discover" className="discover">
          <div className="section-heading">
            <div>
              <h2>✧ Ready for your first PR?</h2>
              <p>Discover opportunities to begin your open-source journey.</p>
            </div>
            <span className="badge">● Demo preview</span>
          </div>

          <div className="results-grid">
            <article className="issue-card">
              <div className="repo">◉ tensorflow/tensorflow · Example issue</div>
              <h3>Your first open-source contribution</h3>
              <p>
                Explore a real repository, understand the issue, and
                learn how to make your first contribution.
              </p>
              <div className="tags">
                <span>Good first issue</span>
                <span>Python</span>
                <span>Beginner</span>
              </div>
              <a
                className="issue-link"
                href="https://github.com/topics/good-first-issue"
                target="_blank"
                rel="noreferrer"
              >
                Explore beginner issues ↗️
              </a>
            </article>

            <article className="match-card">
              <h3>💡 Why start here?</h3>
              <ul>
                <li>✓ Choose a language you know</li>
                <li>✓ Look for beginner-friendly tasks</li>
                <li>✓ Read the issue before starting</li>
                <li>✓ Check whether the issue is still open</li>
              </ul>
              <p className="note">
                Note: This is a UI demo. Live issue matching is our next step.
              </p>
            </article>
          </div>
        </section>

        <section id="how-it-works" className="how-it-works">
          <h2>How FirstPR works</h2>
          <div className="steps-grid">
            <div><span>01</span><h3>Tell us your skills</h3><p>Choose your language and experience.</p></div>
            <div><span>02</span><h3>Discover issues</h3><p>Explore projects that suit your level.</p></div>
            <div><span>03</span><h3>Make your first PR</h3><p>Follow the contribution guide and get started.</p></div>
          </div>
        </section>

        <footer>
          <a className="logo" href="#">⚡ FirstPR</a>
          <p>Every great developer starts somewhere.</p>
          <p>Built for the open-source community ♡</p>
        </footer>
      </main>
    </div>
  )
}

export default App
