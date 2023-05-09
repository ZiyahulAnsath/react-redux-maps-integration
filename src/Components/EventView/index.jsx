import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventsById } from "../../Store/slices/eventSlice";
import { Button, Card, Col, Empty, Row, Space, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/index";
import MapContainer from "../MapContainer";
import dayjs from "dayjs";
import { ClockCircleTwoTone } from "@ant-design/icons";

const EventView = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const events = useSelector((state) => state.event.selectedEvents);
  const isLoading = useSelector((state) => state.event.isLoading);
  //   console.log(events);

  useEffect(() => {
    dispatch(getEventsById(params.id))
      .unwrap()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <Row
      style={{
        marginTop: "2rem",
      }}
    >
      <Col span={12} offset={6}>
        <Card hoverable>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {events ? (
                <>
                  <div>
                    <Typography.Title>{events.description}</Typography.Title>
                    <Typography.Text>{events.vanue}</Typography.Text>
                    <Typography.Title level={3}>
                      <Space size={"middle"}>
                        <ClockCircleTwoTone twoToneColor={"#003B4A"} />

                        {events.dateTime}
                      </Space>
                    </Typography.Title>
                    <MapContainer
                      onMapClick={null}
                      markers={[
                        {
                          lat: events.placeLat,
                          lng: events.placeLng,
                        },
                      ]}
                    />
                    <Typography.Text>
                      Created On: {dayjs(events.createdAt).format("lll")}
                    </Typography.Text>
                    <Button
                      type="link"
                      loading={isLoading}
                      onClick={() => navigate(-1)}
                    >
                      Back
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <Empty />
                </>
              )}
            </>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default EventView;
