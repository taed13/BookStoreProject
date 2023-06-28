import React from "react";

const IndependentCard = () => {
  return (
    <div className='col-sm-4'>
      <div className='card shadow'>
        <img
          src='https://picsum.photos/200/150?random=1'
          className='card-img-top'
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>Card title 1</h5>
          <p className='card-text'>
            Some quick example text to build on the card
            title and make up the bulk of the card is
            content.
          </p>
          <a href='#' className='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndependentCard;
