import { Button, Col, Divider, Row, Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const EventHeader = () => {

  const navigate = useNavigate();
  const isLoading = useSelector((state)=>state.event.isLoading)

  const onBtnClick = ()=>{
    navigate('/create')
  }



  return (
    <Row justify={"center"} align={"middle"} className="events__header">
      <Col xs={18}>
        <Typography.Title>EVENT</Typography.Title>
      </Col>
      <Col xs={6}>
        <Button type="primary" size="large" icon={<PlusCircleOutlined />} onClick={()=>onBtnClick()} loading={isLoading}>
          Add New Events
        </Button>
      </Col>
    </Row>
  );
};

export default EventHeader;
