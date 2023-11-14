export default function examplePage() {
  return (
    <div className="container">
      <title>Website</title>
      <link rel="icon" href="/favicon.ico" />

      <main>
        <div className="underline">
          <h1 className="title">Heavenly Church of the Hippo</h1>
        </div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flegendary-digital-network-assets.s3.amazonaws.com%2Fwp-content%2Fuploads%2F2022%2F04%2F20111320%2FTaweret-in-the-MCU-Marvels-depiction-of-the-goddess-with-her-hippo-or-hippopotamus-head.jpg&f=1&nofb=1&ipt=444d7bd13db2359553e21aeaf56a031ebf65b9beebc35aac97abec217dd5b7ad&ipo=images" />

        <p className="description">Hippos are so cool aren't they?</p>

        <a className="button" href="https://youtu.be/3ao55J9eevU">
          <p> Hippo smiting a crocodile</p>
        </a>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 60rem;
          margin: auto;
        }

        main {
          padding: 5rem 0;
          background: #b2a4d4;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .underline {
          /* border-bottom: solid black; */
          margin-bottom: 1.5rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .button {
          /* margin: .5rem; */
          flex-basis: 45%;
          padding: 0.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .button:hover,
        .button:focus,
        .button:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .button p {
          font-size: 1rem;
          font-weight: 600;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Comic Sans MS;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: #b2a4d4;
          font-family: Comic Sans MS;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
