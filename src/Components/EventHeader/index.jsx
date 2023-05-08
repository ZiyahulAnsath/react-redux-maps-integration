import { Button, Col, Divider, Row, Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./index.css";
import { useNavigate } from "react-router-dom";

const EventHeader = () => {

  const navigate = useNavigate();


  const onBtnClick = ()=>{
    navigate('/create')
  }



  return (
    <Row justify={"center"} align={"middle"} className="events__header">
      <Col xs={18}>
        <Typography.Title>EVENT</Typography.Title>
      </Col>
      <Col xs={6}>
        <Button type="primary" size="large" icon={<PlusCircleOutlined />} onClick={()=>onBtnClick()}>
          Add New Events
        </Button>
      </Col>
    </Row>
  );
};

export default EventHeader;
