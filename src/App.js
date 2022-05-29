function Link({ href, text }) {
  return (
    <a className='fx-energy' href={href} target='_self' rel='noreferrer'>
      {text}
    </a>
  );
}

function App() {
  return (
    <>
      <article>
        <header>RL</header>
        <p>Hey there,</p>
        <p>
          I'm Ross Labardee, out of <strike>Grand Rapids MI</strike>
          <br />
          Venice CA.
        </p>

        <p>
          Engineering leadership at <Link href='https://altruist.com/' text='Altruist' />.
        </p>
        <p>Chef, gardener, cat dad at home.</p>
        <p>
          Reach out on <Link href='https://www.linkedin.com/in/ross-labardee' text='LinkedIn' /> or <Link href='https://twitter.com/rossfoo' text='Twitter' />. Slice of life over on <Link href='https://www.instagram.com/rjoss' text='Instagram' />.
        </p>
      </article>

      <aside>
        <dl>
          <dt>Build</dt>
          <dd>{process.env.REACT_APP_GITHUB_RUN_ID}</dd>

          <dt>SHA</dt>
          <dd>{process.env.REACT_APP_GITHUB_SHA}</dd>

          <dt>At</dt>
          <dd>{process.env.REACT_APP_GITHUB_NOW}</dd>
        </dl>
      </aside>
    </>
  );
}

export default App;
