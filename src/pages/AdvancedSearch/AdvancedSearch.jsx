import React, { useState } from "react";
import {
  Input,
  DatePicker,
  Radio,
  Select,
  Button,
  notification,
  InputNumber,
} from "antd";

const { RangePicker } = DatePicker;
const { Option } = Select;

const AdvancedSearch = () => {
  const [searchFields, setSearchFields] = useState({
    author: "",
    title: "",
    keyword: "",
    publisher: "",
    minPrice: undefined,
    maxPrice: undefined,
  });

  const handleInputChange = (name, value) => {
    setSearchFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const handleSearch = () => {
    const { author, title, keyword, publisher, minPrice, maxPrice } =
      searchFields;
    if (
      !author &&
      !title &&
      !keyword &&
      !publisher &&
      minPrice === undefined &&
      maxPrice === undefined
    ) {
      notification.error({
        message: "Lỗi",
        description: "Vui lòng nhập ít nhất một trường để tìm kiếm.",
      });
    } else {
      // Perform search logic here
      // ...
      // Reset search fields
      setSearchFields({
        author: "",
        title: "",
        keyword: "",
        publisher: "",
        minPrice: undefined,
        maxPrice: undefined,
      });
    }
  };

  return (
    <>
      <div className="container mt-2" style={{ padding: "0 11rem" }}>
        <div className="p-2">
          <h4>Tìm Kiếm Nâng Cao</h4>
        </div>
        <div className="px-2 mb-3">
          <div className="alert alert-warning alert-dismissible d-flex align-items-center fade show p-1">
            <small className="p-1">
              <i className="fa-solid fa-triangle-exclamation"></i>
              <strong className="mx-2">Cảnh báo!</strong>Quý khách vui lòng nhập
              ít nhất một trường bất kỳ để tìm kiếm.
            </small>
          </div>
        </div>
        <div style={{ backgroundColor: "#f2f2f2" }} className="px-5 py-3">
          <div className="row">
            <div className="col">
              <label>Tác giả</label>
              <Input
                name="author"
                value={searchFields.author}
                onChange={handleInputChange}
                placeholder="Nhập tác giả"
              />
            </div>
            <div className="col">
              <label>Tiêu đề</label>
              <Input
                name="title"
                value={searchFields.title}
                onChange={handleInputChange}
                placeholder="Nhập tiêu đề"
              />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col">
              <label>Từ khoá</label>
              <Input
                name="keyword"
                value={searchFields.keyword}
                onChange={handleInputChange}
                placeholder="Nhập từ khoá"
              />
            </div>
            <div className="col">
              <label>Nhà xuất bản</label>
              <Input
                name="publisher"
                value={searchFields.publisher}
                onChange={handleInputChange}
                placeholder="Nhập nhà xuất bản"
              />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col">
              <label>Ngày xuất bản</label>
              <RangePicker style={{ width: "100%" }} />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col">
              <label>Giá tiền</label>
              <div className="row">
                <div className="col">
                  <InputNumber
                    name="minPrice"
                    value={searchFields.minPrice}
                    onChange={(value) => handleInputChange("minPrice", value)}
                    placeholder="Từ"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col">
                  <InputNumber
                    name="maxPrice"
                    value={searchFields.maxPrice}
                    onChange={(value) => handleInputChange("maxPrice", value)}
                    placeholder="Đến"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <label className="mr-2">Kiểu sản phẩm</label>
              <Radio.Group>
                <Radio value="sach-giao-trinh" className="p-2 border rounded-2">
                  Sách giáo trình
                </Radio>
                <Radio value="sach-tham-khao" className="p-2 border rounded-2">
                  Sách tham khảo
                </Radio>
                <Radio value="tiep-thi" className="p-2 border rounded-2">
                  Tiếp thị
                </Radio>
                <Radio value="kinh-te" className="p-2 border rounded-2">
                  Kinh tế
                </Radio>
                <Radio value="tin-hoc" className="p-2 border rounded-2">
                  Tin học
                </Radio>
                <Radio value="ngon-ngu" className="p-2 border rounded-2">
                  Ngôn ngữ
                </Radio>
              </Radio.Group>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <label className="mr-2">Ràng buộc</label>
              <Radio.Group className="">
                <Radio value="tat-ca" className="p-2 border rounded-2">
                  Tất cả
                </Radio>
                <Radio value="ban-cung" className="p-2 border rounded-2">
                  Bản cứng
                </Radio>
                <Radio value="ban-mem" className="p-2 border rounded-2">
                  Bản mềm
                </Radio>
              </Radio.Group>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <label className="mr-2">Sắp xếp bằng</label>
              <Select style={{ width: "100%" }} placeholder="Chọn cách sắp xếp">
                <Option value="gia-thap-cao">Giá từ thấp tới cao</Option>
                <Option value="gia-cao-thap">Giá từ cao tới thấp</Option>
                <Option value="ngay-xuat-ban-moi-nhat">
                  Ngày xuất bản mới nhất
                </Option>
                <Option value="ngay-xuat-ban-cu-nhat">
                  Ngày xuất bản cũ nhất
                </Option>
                <Option value="tac-gia-a-z">Tác giả/Tác phẩm từ A-Z</Option>
                <Option value="tac-gia-z-a">Tác giả/Tác phẩm từ Z-A</Option>
                <Option value="tieu-de-a-z">Tiêu đề từ A-Z</Option>
                <Option value="tieu-de-z-a">Tiêu đề từ Z-A</Option>
                <Option value="nam-xuat-ban-tang-dan">
                  Năm xuất bản tăng dần
                </Option>
                <Option value="nam-xuat-ban-giam-dan">
                  Năm xuất bản giảm dần
                </Option>
              </Select>
            </div>
          </div>
          <div className="row mt-3 justify-content-center">
            <div className="col-auto">
              <Button
                type="primary"
                className="btn-danger"
                onClick={handleSearch}
              >
                Tìm kiếm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedSearch;
