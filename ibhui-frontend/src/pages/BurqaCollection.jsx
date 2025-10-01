import "../stylesheets/burqaCollection.css";

// Import images properly
import burqaPlane from "../assets/burqa_plane.png";
import burqaParty from "../assets/burqa_party.png";
import burqaDaily from "../assets/burqa_daily.png";

export default function BurqaCollection() {
  return (
    <div className="burqa-section">
      <h2 className="burqa-title">Burqa Collection</h2>
      <div className="row burqa-row justify-content-center">
        <div className="col-md-4 d-flex justify-content-center mb-3">
          <img src={burqaPlane} alt="Burqa Plane" className="burqa-img" />
        </div>
        <div className="col-md-4 d-flex justify-content-center mb-3">
          <img src={burqaParty} alt="Burqa Party" className="burqa-img" />
        </div>
        <div className="col-md-4 d-flex justify-content-center mb-3">
          <img src={burqaDaily} alt="Burqa Daily" className="burqa-img" />
        </div>
      </div>
      
    </div>
  );
}
