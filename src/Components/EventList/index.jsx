import { Button, Col, Divider, Row, Space, Typography } from "antd";
import "./index.css";
import EventHeader from "../EventHeader";
import EventListItem from "../EventListItem";

const EventList = () => {
  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <EventHeader />
          <Divider />

          <EventListItem />
        </Col>
      </Row>
    </>
  );
};

export default EventList;
