import React, { useState, useEffect } from "react";
import { Form, Button, notification } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { apiGetAccountSettingBillingData } from "../../api/apiGetAccountSettingBillingData"; // Import the API function

const Billing = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState({});
  const [selectedCard, setSelectedCard] = useState({});
  const [ccDialogType, setCcDialogType] = useState("");

  const fetchData = async () => {
    try {
      // Fetch data from API and update state
      const response = await apiGetAccountSettingBillingData();
      setData(response.data);
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Failed to fetch billing data.",
      });
    }
  };

  const onFormSubmit = () => {
    form.submit();
    notification.success({
      message: "Billing information updated",
    });
  };

  const onCreditCardDialogClose = () => {
    setCcDialogType("");
    setSelectedCard({});
  };

  const onEditCreditCard = (card, type) => {
    setCcDialogType(type);
    setSelectedCard(card);
  };

  const onCardUpdate = (cardValue) => {
    // Update card information
  };

  const onRedirect = (url) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <Form
        form={form}
        initialValues={data}
        onFinish={onFormSubmit}
        scrollToFirstError
      >
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
          <p>You can update your card information here</p>
        </div>
        <div className="mt-4">
          <h4 className="text-base font-semibold">Credit Cards</h4>
          <div className="rounded-lg border border-gray-200 dark:border-gray-600">
            {/* Map over credit cards and display card information */}
          </div>
          <div className="mt-2">
            <Button
              type="button"
              size="small"
              icon={<PlusOutlined />}
              onClick={() => onEditCreditCard({}, "NEW")}
            >
              Add new card
            </Button>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-base font-semibold">Other payment methods</h4>
          <div className="rounded-lg border border-gray-200 dark:border-gray-600">
            {/* Map over other payment methods and display method information */}
          </div>
        </div>
        <div className="mt-4 text-right">
          <Button type="default" onClick={form.resetFields}>
            Reset
          </Button>
          <Button type="primary" htmlType="submit" loading={false}>
            Update
          </Button>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Billing History</h3>
          <p>View your previous billing</p>
        </div>
        <div className="mt-4 rounded-lg border border-gray-200 dark:border-gray-600">
          {/* Render billing history table */}
        </div>
      </Form>
    </div>
  );
};

export default Billing;
