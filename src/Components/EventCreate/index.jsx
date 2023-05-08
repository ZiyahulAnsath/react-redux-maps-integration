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

const onFinish = (values) => {
  console.log("Success:", values);
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
  return current && current < dayjs().endOf('day');
};
const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
});

const EventCreate = () => {
  return (
    <>
      <Row>
        <Col span={12} offset={6} style={{ marginTop: "2rem" }}>
          <Card hoverable>
            <Form
              name="basic"
              initialValues={{}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              style={{ width:"600px" }}
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
                <Input/>
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
              ]}>
                  <DatePicker
                    size="large"
                    format="YYYY-MM-DD HH:mm:ss"
                    disabledDate={disabledDate}
                    disabledTime={disabledDateTime}
                    showTime={{
                      defaultValue: dayjs("00:00:00", "HH:mm:ss"),
                    }}
                  />
                </Form.Item>
              <Form.Item style={{textAlign:"center"}}>
                <Button type="primary" htmlType="submit" >
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
