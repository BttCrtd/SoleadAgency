import htmlLogo from '../assets/logo/html.png';
import cssLogo from '../assets/logo/css.png';
import javaScriptLogo from '../assets/logo/javascript.png';
import reactLogo from '../assets/logo/react.png';

function Card5() {
  return (
    <section>
      <h1>Mes compétences ?</h1>
      <h2>Côté Frontend :</h2>
      <div className="skillsPresentation">
        <div>
          <ul>
            <li>
              <img src={htmlLogo} alt="Logo HTML" />
              HTML
            </li>
            <p className="comments">(je fais des &lt;div&gt; comme un chef)</p>
            <li>
              <img src={cssLogo} alt="Logo CSS" />
              CSS
            </li>
            <p className="comments">
              (magicien des pixels et dompteur de margin)
            </p>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <img src={javaScriptLogo} alt="Logo JavaScript" />
              JavaScript
            </li>
            <p className="comments">(je fais des fonctions et tout)</p>
            <li>
              <img src={reactLogo} alt="Logo React" />
              React
            </li>
            <p className="comments">
              (je crée des composants comme si c’étaient des Pokémons)
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Card5;
