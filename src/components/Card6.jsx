import nodejsLogo from '../assets/logo/nodejs.png';
import expressLogo from '../assets/logo/express.png';
import apiLogo from '../assets/logo/api.png';
import mongoDBLogo from '../assets/logo/mongodb.png';

function Card6() {
  return (
    <section>
      <h1>Mes compétences ?</h1>
      <h2>Côté Backend :</h2>
      <div className="skillsPresentation">
        <div>
          <ul>
            <li>
              <img src={nodejsLogo} alt="Logo NodeJS" />
              Node.js
            </li>
            <p className="comments">
              (je fais tourner des serveurs plus vite que mon café le matin)
            </p>
            <li>
              <img src={expressLogo} alt="Logo Express" />
              Express
            </li>
            <p className="comments">
              (mes routes sont mieux organisées que le périphérique)
            </p>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <img src={apiLogo} alt="Logo API" />
              API REST
            </li>
            <p className="comments">
              (je livre des données fraîches, sans Uber Eats)
            </p>
            <li>
              <img src={mongoDBLogo} alt="Logo MongoDB" />
              MongoDB
            </li>
            <p className="comments">
              (je gère les bases de données comme un bibliothécaire)
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Card6;
