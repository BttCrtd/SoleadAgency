import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalculator,
  faChalkboardUser,
} from '@fortawesome/free-solid-svg-icons';

function Card3() {
  return (
    <section>
      <div className="logoAndText">
        <div className="logo">
          <FontAwesomeIcon icon={faCalculator} className="myIcon" />
        </div>
        <div className="text">
          <h2>J'ai une licence en mathématiques</h2>
          <p className="rightComments">
            (J'ai pu forger mon arme secrète : rigueur, logique et persévérance.
            Des atouts que je mets désormais au service du code.)
          </p>
        </div>
      </div>
      <div className="logoAndText">
        <div className="text">
          <h2>Et un master 1 MEEF second degré</h2>
          <p className="rightComments">
            (qui m’a appris à transmettre, à communiquer et à collaborer
            efficacement)
          </p>
        </div>
        <div className="logo">
          <FontAwesomeIcon icon={faChalkboardUser} className="myIcon" />
        </div>
      </div>
      <p>Mais l'éducation nationale c'était pas pour moi. Du coup...</p>
    </section>
  );
}

export default Card3;
