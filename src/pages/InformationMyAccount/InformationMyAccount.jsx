import React from "react";
import { Field, Form, Formik } from "formik";
import {
  Input,
  Avatar,
  Upload,
  Button,
  Select,
  Switch,
  notification,
} from "antd";
import {
  CreditCardOutlined,
  LockOutlined,
  UserOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import axios from "axios";

const { Option } = Select;

const langOptions = [
  { value: "en", label: "English (US)", imgPath: "/img/countries/us.png" },
  { value: "ch", label: "中文", imgPath: "/img/countries/cn.png" },
  { value: "jp", label: "日本语", imgPath: "/img/countries/jp.png" },
  { value: "fr", label: "French", imgPath: "/img/countries/fr.png" },
];

const InformationMyAccount = ({ data }) => {
  const onSetFormFile = (form, field, file) => {
    form.setFieldValue(field.name, URL.createObjectURL(file[0]));
  };

  const onFormSubmit = (values, setSubmitting) => {
    const errors = validateForm(values);
    if (errors.length === 0) {
      try {
        axios.post("/api/updateProfile", values);
        notification.success({
          message: "Profile cá nhân đã cập nhật",
          placement: "topCenter",
        });
      } catch (error) {
        console.error("Lỗi cập nhật:", error);
      }
    } else {
      notification.error({
        message: "Lỗi xác nhận",
        description: errors.join(", "),
        placement: "topCenter",
      });
    }
    setSubmitting(false);
  };

  const validateForm = (values) => {
    const errors = [];
    if (!values.cardNumber) {
      errors.push("Số thẻ là bắt buộc");
    }
    if (!values.expirationDate) {
      errors.push("Ngày hết hạn là bắt buộc");
    }
    if (!values.cvv) {
      errors.push("CVV là bắt buộc");
    }
    if (!values.cardholderName) {
      errors.push("Tên chủ thẻ là bắt buộc");
    }
    if (!values.billingAddress) {
      errors.push("Địa chỉ thanh toán là bắt buộc");
    }
    if (!values.email) {
      errors.push("Email là bắt buộc");
    } else if (!isValidEmail(values.email)) {
      errors.push("Email không hợp lệ");
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Add your email validation logic here
    return true;
  };

  const initialValues = {
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: "",
    avatar: "",
    title: "",
    lang: "",
    timeZone: "",
    syncData: false,
    ...data,
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        onFormSubmit(values, setSubmitting);
      }}
    >
      {({ values, isSubmitting, resetForm, setFieldValue }) => (
        <Form>
          <div className="container p-3 my-3 rounded-4 shadow-lg">
            <div className="row">
              <div className="col-md-6">
                <div className="form-description">
                  <h2>Tổng quan</h2>
                  <p>Thông tin đơn giản như thông tin thẻ tín dụng VNPay</p>
                </div>
                <div className="form-group p-3 rounded-4 shadow">
                  <label htmlFor="avatar" className="">
                    <h3>Ảnh Đại Diện</h3>
                  </label>
                  <div className="text-center">
                    {" "}
                    <Field name="avatar">
                      {({ field, form }) => {
                        const avatarProps = field.value
                          ? { src: field.value }
                          : {};
                        return (
                          <Upload
                            className="cursor-pointer"
                            beforeUpload={(file) => {
                              onSetFormFile(form, field, [file]);
                              return false;
                            }}
                            onRemove={() => {
                              setFieldValue("avatar", "");
                            }}
                            showUploadList={false}
                          >
                            <Avatar
                              className="border-2 border-white shadow-lg"
                              size={164}
                              shape="circle"
                              icon={<UserOutlined />}
                              {...avatarProps}
                            />
                          </Upload>
                        );
                      }}
                    </Field>
                  </div>
                </div>

                <div className="form-group p-3 shadow rounded-4">
                  <label htmlFor="cardNumber">Số Thẻ</label>
                  <Field
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="Số Thẻ"
                    component={Input}
                    prefix={<CreditCardOutlined className="text-xl" />}
                  />
                </div>
              </div>
              <div className="col-md-6 mt-2 pt-1">
                <div className="form-group p-3 shadow rounded-4">
                  <label htmlFor="cvv">CVV</label>
                  <Field
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="CVV"
                    component={Input}
                    prefix={<LockOutlined className="text-xl" />}
                  />
                </div>
                <div className="form-group p-3 shadow rounded-4">
                  <label htmlFor="cardholderName">Tên Chủ Thẻ</label>
                  <Field
                    type="text"
                    id="cardholderName"
                    name="cardholderName"
                    placeholder="Ghi hoa không dấu"
                    component={Input}
                    prefix={<UserOutlined className="text-xl" />}
                  />
                </div>
                <div className="form-group p-3 shadow rounded-4">
                  <label htmlFor="billingAddress">Địa Chỉ Thanh Toán</label>
                  <Field
                    type="text"
                    id="billingAddress"
                    name="billingAddress"
                    placeholder="Địa Chỉ Thanh Toán"
                    component={Input}
                    prefix={<EnvironmentOutlined className="text-xl" />}
                  />
                </div>
                <div className="form-group p-3 shadow rounded-4">
                  <label htmlFor="expirationDate">Ngày Hết Hạn</label>
                  <Field
                    type="text"
                    id="expirationDate"
                    name="expirationDate"
                    placeholder="Ngày Hết Hạn"
                    component={Input}
                    prefix={<CalendarOutlined className="text-xl" />}
                  />
                </div>
              </div>
            </div>
            <div className="form-buttons text-center p-3 d-flex justify-content-center">
              <Button
                type="primary"
                htmlType="submit"
                loading={isSubmitting}
                className="btn-danger bg-danger"
              >
                {isSubmitting ? "Updating" : "Update"}
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default InformationMyAccount;
