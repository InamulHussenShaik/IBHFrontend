import "../stylesheets/burqaCollection.css";

import burqaPlane from "../assets/maqna_1.png";
import burqaParty from "../assets/maqna_2.png";
import burqaDaily from "../assets/maqna_3.png";

export default function MaqnaCollection() {
  return (
    <div className="burqa-section">
      <h2 className="burqa-title">Maqna Collection</h2>
      <div className="row burqa-row justify-content-center">

        {/* First Image */}
        <div className="col-md-4 d-flex flex-column align-items-center mb-4">
          <img src={burqaPlane} alt="Maqna Plane" className="burqa-img" />
          <div className="burqa-info">
            <p><strong>Type:</strong> Plane</p>
            <p><strong>Size:</strong> XL, XXL, XXXL</p>
            <p><strong>Price:</strong> ₹400/-</p>
            <p className="stock available">✅ Available</p>
          </div>
        </div>

        {/* Second Image */}
        <div className="col-md-4 d-flex flex-column align-items-center mb-4">
          <img src={burqaDaily} alt="Maqna Daily" className="burqa-img" />
          <div className="burqa-info">
            <p><strong>Type:</strong> Daily Wear</p>
            <p><strong>Size:</strong> XL, XXL, XXXL</p>
            <p><strong>Price:</strong> ₹450/-</p>
            <p className="stock not-available">❌ Not Available</p>
          </div>
        </div>

        {/* Third Image */}
        <div className="col-md-4 d-flex flex-column align-items-center mb-4">
          <img src={burqaParty} alt="Maqna Party" className="burqa-img" />
          <div className="burqa-info">
            <p><strong>Type:</strong> Party Wear</p>
            <p><strong>Size:</strong> XL, XXL, XXXL</p>
            <p><strong>Price:</strong> ₹500/-</p>
            <p className="stock available">✅ Available</p>
          </div>
        </div>

      </div>
    </div>
  );
}
