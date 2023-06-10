import React from "react";
import { Field, Form, Formik } from "formik";
import { notification } from "antd";
import { Input, Avatar, Upload, Button, Select, Switch } from "antd";
import {
  FileOutlined,
  UserOutlined,
  MailOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import * as Yup from "yup";
import axios from "axios";

const { Option } = Select;

const validationSchema = Yup.object().shape({
  cardNumber: Yup.string().required("Card Number Required"),
  expirationDate: Yup.string().required("Expiration Date Required"),
  cvv: Yup.string().required("CVV Required"),
  cardholderName: Yup.string().required("Cardholder Name Required"),
  billingAddress: Yup.string().required("Billing Address Required"),
  email: Yup.string().email("Invalid email").required("Email Required"),
  avatar: Yup.string(),
  lang: Yup.string(),
  timeZone: Yup.string(),
  syncData: Yup.bool(),
});

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
    console.log("val", values);
    notification.success({
      message: "Profile updated",
      placement: "topCenter",
    });
    setSubmitting(false);
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
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        try {
          await axios.post("/api/updateProfile", values);
          onFormSubmit(values, setSubmitting);
        } catch (error) {
          console.error("Update error:", error);
        }
        setSubmitting(false);
      }}
    >
      {({
        values,
        touched,
        errors,
        isSubmitting,
        resetForm,
        setFieldValue,
      }) => (
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
                    prefix={<FileOutlined className="text-xl" />}
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
                    prefix={<FileOutlined className="text-xl" />}
                  />
                </div>
                <div className="form-group p-3 shadow rounded-4">
                  <label htmlFor="cvv">CVV</label>
                  <Field
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="CVV"
                    component={Input}
                    prefix={<FileOutlined className="text-xl" />}
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
                    prefix={<FileOutlined className="text-xl" />}
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
                    prefix={<FileOutlined className="text-xl" />}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-description">
                  <h2>Preferences</h2>
                  <p>Your personalized preference displayed in your account</p>
                </div>
                <div className="form-group p-3 shadow rounded-4">
                  <label htmlFor="lang">Language</label>
                  <Field name="lang">
                    {({ field, form }) => (
                      <Select
                        {...field}
                        id="lang"
                        placeholder="Select language"
                        value={values.lang}
                        onChange={(value) =>
                          form.setFieldValue(field.name, value)
                        }
                      >
                        {langOptions.map((option) => (
                          <Option key={option.value} value={option.value}>
                            <img
                              src={option.imgPath}
                              alt={option.label}
                              className="flag-icon"
                            />
                            {option.label}
                          </Option>
                        ))}
                      </Select>
                    )}
                  </Field>
                </div>
                <div className="form-group p-3 shadow rounded-4">
                  <label htmlFor="timeZone">Time Zone</label>
                  <Field
                    type="text"
                    id="timeZone"
                    name="timeZone"
                    placeholder="Time Zone"
                    component={Input}
                    prefix={<GlobalOutlined className="text-xl" />}
                  />
                </div>
                <div className="form-group p-3 shadow rounded-4">
                  <label htmlFor="syncData">Sync Data</label>
                  <Field
                    type="checkbox"
                    id="syncData"
                    name="syncData"
                    checked={values.syncData}
                    component={Switch}
                  />
                </div>
              </div>
            </div>
            <div className="form-buttons text-center p-3 d-flex justify-content-center">
              <Button
                type="button"
                onClick={resetForm}
                className="border rounded-3"
              >
                Reset
              </Button>
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
