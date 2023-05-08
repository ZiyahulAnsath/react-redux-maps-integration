import {
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
} from "antd";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { saveEvents } from "../../Store/slices/eventSlice";
import { useNavigate } from "react-router-dom";
import MapContainer from "../MapContainer";
import { useState } from "react";
const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

const EventCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.event.isLoading);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (!markers.length) {
      form.setFields([
        {
          name: "placeLatLng",
          errors: ["Please select an event place"],
        },
      ]);
      return;
    } else {
      form.setFields([
        {
          name: "placeLatLng",
          errors: [],
        },
      ]);
    }

    const data = {
      ...values,
      placeLat: markers[0].lat,
      placeLng: markers[0].lng,
      dateTime: dayjs(values.dateTime).format("lll"),
    };

    dispatch(saveEvents(data))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {});
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };

  const [markers, setMarkers] = useState([]);

  const onMapClick = (event) => {
    setMarkers([{ lat: event.lat, lng: event.lng }]);
  };

  return (
    <>
      <Row>
        <Col span={12} offset={6} style={{ marginTop: "2rem" }}>
          <Card hoverable>
            <Form
              form={form}
              name="basic"
              initialValues={{}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              style={{ width: "600px" }}
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 18,
              }}
              requiredMark={false}
            >
              <Form.Item
                className="mb-2"
                label="Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please input your Description!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                className="mb-2"
                label="Vanue"
                name="vanue"
                rules={[
                  {
                    required: true,
                    message: "Please input your vanue!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                className="mb-2"
                label="Event Date and Time"
                name="dateTime"
                rules={[
                  {
                    required: true,
                    message: "Please input your date and time!",
                  },
                ]}
              >
                <DatePicker
                  size="large"
                  format="YYYY-MM-DD HH:mm:ss"
                  disabledDate={disabledDate}
                  // disabledTime={disabledDateTime}
                  showTime={{
                    defaultValue: dayjs("00:00:00", "HH:mm:ss"),
                  }}
                />
              </Form.Item>
              <Form.Item name="placeLatLng" className="mb-2">
                <MapContainer markers={markers} onMapClick={onMapClick} />
              </Form.Item>

              <Form.Item style={{ textAlign: "center" }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                  Save Event
                </Button>
               
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default EventCreate;
