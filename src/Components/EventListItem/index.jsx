import { Button, Col, Divider, Row, Typography } from "antd";
import { RightOutlined,DeleteOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteEventsById } from "../../Store/slices/eventSlice";

const EventListItem = ({event,onEventClick}) => {


     const navigate = useNavigate();
      const dispatch = useDispatch();

      const displayDate = (date)=>{
        const splitDate = date.split(",")
        const dateMonth = splitDate[0].split(" ")
        return dateMonth;
      }

      const onDeleteClick=()=>{
        dispatch(deleteEventsById(event.id))
        .unwrap()
        .then(() => {
          navigate('/')
        }).catch((err) => {
          console.log(err);
        });
      }
     

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
      <Col span={5}>
        <Typography.Title level={2}>{displayDate(event.dateTime)[1]}</Typography.Title>
        <Typography.Text>{displayDate(event.dateTime)[0]}</Typography.Text>
      </Col>
      <Col span={15}>
        <Typography.Title level={2}>{event.description}</Typography.Title>
        <Typography.Text>{event.vanue}</Typography.Text>
      </Col>
      <Col span={2}>
        <DeleteOutlined onClick={()=>onDeleteClick()} style={{ fontSize: "28px" }} />
        {/* <Button onClick={()=>onDeleteClick()} >Delete</Button> */}
      </Col>
      <Col span={2}>
        <RightOutlined onClick={() => onEventClick(event.id)} style={{ fontSize: "28px" }} />
      </Col>
      <Divider />
    </Row>
  );
};

export default EventListItem;
