import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Terms from './Terms';

const PurchaseItemButtons = () => {
  // Initialize the main price
  const mainPrice = 1575.00;

  // Create a state variable to store the selected protection plan price
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(0);

  // Create a state variable to track if the protection plan is selected
  const [protectionPlanSelected, setProtectionPlanSelected] = useState(false);

  // Calculate the total price by adding the main price and selected plan price
  const totalPrice = mainPrice + selectedPlanPrice;

  // Function to handle button click and update the selected protection plan price
  const handleButtonClick = (price) => {
    setSelectedPlanPrice(price);
    setProtectionPlanSelected(true); // Set protection plan selected to true
  };

  // Function to handle the "Buy Now" button click
  const handleBuyNowClick = () => {
    // Check if a protection plan is selected
    if (!protectionPlanSelected) {
      // Throw an error if no protection plan is selected
      throw new Error('Please select a protection plan before clicking "Buy Now".');
    } else {
      // You can now access the totalPrice variable here
      console.log(`Total Price: $${totalPrice.toFixed(2)}`);
    }
  };

  return (
    <div className='rightSidebar m-5'>
      {/* Display the total price */}
      <h3 className='text-center'>Price: ${totalPrice.toFixed(2)}</h3>
      <Button variant="warning mt-4 payBtn" onClick={handleBuyNowClick}>Buy Now</Button>
      <div className="row proBtn">
        <div className="h6 m-3">Protection Plan</div>
        <div className="col-3 proBtn">
          {/* Use onClick to call the handleButtonClick function with the selected price */}
          <Button
            variant="light"
            id='1yearPro'
            className='btnHover'
            onClick={() => handleButtonClick(350.00)}
          >
            1 year - $350.00
          </Button>
        </div>
        <div className="col-3 proBtn">
          {/* Use onClick to call the handleButtonClick function with the selected price */}
          <Button
            variant="light"
            id='2yearPro'
            className='btnHover'
            onClick={() => handleButtonClick(650.00)}
          >
            2 year - $650.00
          </Button>
        </div>
        <div className="col-3 proBtn">
          {/* Use onClick to call the handleButtonClick function with the selected price */}
          <Button
            variant="light"
            id='3yearPro'
            className='btnHover'
            onClick={() => handleButtonClick(1050.00)}
          >
            3 year - $1050.00
          </Button>
        </div>
        <div className="col-3 proBtn">
          {/* Use onClick to call the handleButtonClick function with the selected price */}
          <Button
            variant="light"
            id='noPro'
            className='btnHover'
            onClick={() => handleButtonClick(0.00)}
          >
            No Protection
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <Button className='mt-4 bg-primary'>
            <i className="fa-solid fa-money-bill-trend-up px-1"></i>
            <small> Financing Available</small>
            <a href='#' className='text-center text-white mx-2'><small>Terms and Contitions</small></a>
          </Button>
        </div>
      </div>
      <div className="row mt-2  containBg">
      <div className="col-12">
          <span className='productInfo'>
            <i className="fa-solid fa-circle-check productAvailability"></i>
            <small>In Stock</small>
          </span>
        </div>
        <div className="col-12">
          <span className='productInfo'>
            <i className="fa-solid fa-truck-fast productMoreInfo"></i>
            <small>shipping from Nashville</small>
          </span>
        </div>
        <div className="col-12">
          <span className='productInfo'>
            <i className="fa-solid fa-rotate-left productMoreInfo"></i>
            <small>14-day return policy</small>
          </span>
        </div>
        <div className="col m-3 text-center">
          <p>Have Questions?</p>
          <Button variant="secondary m-2"><i className="fa-solid fa-comments" ></i> Chat Now</Button>
          <Button variant="warning"><i className="fa-solid fa-phone"></i> Call Us</Button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseItemButtons;
