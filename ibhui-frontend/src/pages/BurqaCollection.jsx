import "../stylesheets/burqaCollection.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // stock icons

import burqaPlane from "../assets/burqa_plane.png";
import burqaParty from "../assets/burqa_party.png";
import burqaDaily from "../assets/burqa_daily.png";

export default function BurqaCollection() {
  return (
    <div className="burqa-section">
      <h2 className="burqa-title">Burqa Collection</h2>
      <div className="row burqa-row justify-content-center">
        
        {/* First image */}
        <div className="col-md-4 d-flex flex-column align-items-center mb-4">
          <img src={burqaPlane} alt="Burqa Plane" className="burqa-img" />
          <div className="burqa-info">
            <p><strong>Type:</strong> Plane</p>
            <p><strong>Size:</strong> XL, XXL, XXXL</p>
            <p><strong>Price:</strong> ₹400/-</p>
            <p className="stock available">
              <FaCheckCircle className="stock-icon" /> Available
            </p>
          </div>
        </div>

        {/* Second image */}
        <div className="col-md-4 d-flex flex-column align-items-center mb-4">
          <img src={burqaDaily} alt="Burqa Daily" className="burqa-img" />
          <div className="burqa-info">
            <p><strong>Type:</strong> Daily Wear</p>
            <p><strong>Size:</strong> XL, XXL, XXXL</p>
            <p><strong>Price:</strong> ₹450/-</p>
            <p className="stock not-available">
              <FaTimesCircle className="stock-icon" /> Not Available
            </p>
          </div>
        </div>

        {/* Third image */}
        <div className="col-md-4 d-flex flex-column align-items-center mb-4">
          <img src={burqaParty} alt="Burqa Party" className="burqa-img" />
          <div className="burqa-info">
            <p><strong>Type:</strong> Party Wear</p>
            <p><strong>Size:</strong> XL, XXL, XXXL</p>
            <p><strong>Price:</strong> ₹500/-</p>
            <p className="stock available">
              <FaCheckCircle className="stock-icon" /> Available
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
