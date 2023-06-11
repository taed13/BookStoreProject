...
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const VnpayResponsePage = () => {
  const location = useLocation();
  const [response, setResponse] = useState({});

  useEffect(() => {
    // Process return from VNPAY
    const queryParams = new URLSearchParams(location.search);
    const fields = {};
    queryParams.forEach((value, key) => {
      fields[key] = value;
    });

    const { vnp_SecureHash, ...fieldsWithoutSecureHash } = fields;
    const signValue = hashAllFields(fieldsWithoutSecureHash);

    // Update response state
    setResponse({
      merchantTransactionCode: fields.vnp_TxnRef,
      amount: fields.vnp_Amount,
      orderInfo: fields.vnp_OrderInfo,
      vnpayResponseCode: fields.vnp_ResponseCode,
      vnpayTransactionCode: fields.vnp_TransactionNo,
      bankCode: fields.vnp_BankCode,
      payDate: fields.vnp_PayDate,
      paymentStatus: signValue === vnp_SecureHash ? "Success" : "Failed",
    });
  }, [location]);

  return (
    <div className="container">
      <div className="header clearfix">
        <h3 className="text-muted">VNPAY RESPONSE</h3>
      </div>
      <div className="table-responsive">
        {/* Display response information */}
        <div className="form-group">
          <label>Merchant Transaction Code:</label>
          <label>{response.merchantTransactionCode}</label>
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <label>{response.amount}</label>
        </div>
        <div className="form-group">
          <label>Order info:</label>
          <label>{response.orderInfo}</label>
        </div>
        <div className="form-group">
          <label>VNPAY Response Code:</label>
          <label>{response.vnpayResponseCode}</label>
        </div>
        <div className="form-group">
          <label>VNPAY Transaction Code:</label>
          <label>{response.vnpayTransactionCode}</label>
        </div>
        <div className="form-group">
          <label>Bank Code:</label>
          <label>{response.bankCode}</label>
        </div>
        <div className="form-group">
          <label>Pay Date:</label>
          <label>{response.payDate}</label>
        </div>
        <div className="form-group">
          <label>Payment Status:</label>
          <label>{response.paymentStatus}</label>
        </div>
      </div>
      <p>&nbsp;</p>
      <footer className="footer">
        <p>&copy; VNPAY 2020</p>
      </footer>
    </div>
  );
};

export default VnpayResponsePage;
