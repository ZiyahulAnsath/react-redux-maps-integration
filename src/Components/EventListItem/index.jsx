import { Col, Divider, Row, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";

const EventListItem = () => {
  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
      justify={"center"}
      align={"middle"}
    >
      <Col span={6}>
        <Typography.Title level={2}>Date</Typography.Title>
        <Typography.Text>Month</Typography.Text>
      </Col>
      <Col span={15}>
        <Typography.Title level={2}>Description</Typography.Title>
        <Typography.Text>Vanue</Typography.Text>
      </Col>
      <Col span={3}>
        <RightOutlined style={{ fontSize: "28px" }} />
      </Col>
      <Divider />
    </Row>
  );
};

export default EventListItem;
