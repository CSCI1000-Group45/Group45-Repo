export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>DOGS ARE BETTER THAN CATS </h1>
          </div>
          <img
            className='pic'
            src='https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg'
            alt='dog'
          />

          <p className='description'>
            DOGS ARE SUPERIOR. There is no chance that anyone could ever say that cats are better than dogs. Dogs are just
            objectively better pets and emotional support. Dogs will play with you. Dogs love to be around people (for the most part)
            and cats just run away for most of the day. (oh and also I am allergic to cats more than I am dogs) Dogs just be better (
              not that I have 2 or anything either.
            )
          </p>

          <a className='button' href='/'>
            <p> MOM! I WANNA GO HOME!!!</p>
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
            background: #ADD8E6;
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

          .pic {
            
            width: 450px;
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
            background: #FFFFFF;
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
            background: #FFFFFF;
            font-family: Comic Sans MS;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}