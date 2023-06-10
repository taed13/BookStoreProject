import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Điều hướng trang về trang trước đó
  };

  return (
    <div className="mb-2">
      <Button
        type="primary"
        className="btn-danger bg-danger"
        onClick={handleGoBack}
      >
        Trở về
      </Button>
    </div>
  );
};

export default BackButton;
