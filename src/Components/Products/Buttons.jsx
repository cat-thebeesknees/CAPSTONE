
//Details Button
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import "../CSS/DetailsButton.css";
import SingleProductCard from './SingleProductCard';
const DetailsButton = () => {
    const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate(<SingleProductCard />);
  };

  return (
    <div className="details-button">
    <nav className='dbutton'>
      <Link to="products/single-product-card/:id" className="singleProductCardLink">
        <button className="rainbow-button" onClick={handleClick}>
          See Details
        </button>
      </Link>
      </nav>
      <Routes>
        <Route path="/single-product-card" element={<SingleProductCard />} />
        <Route path="buttons/*" element={<DetailsButton />} />
      </Routes>
    </div>
    
  );
};

export default DetailsButton;

