import { Button, Col, Divider, Empty, Row, Space, Typography } from "antd";
import "./index.css";
import EventHeader from "../EventHeader";
import EventListItem from "../EventListItem";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { getAllEvents } from "../../Store/slices/eventSlice";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";
import Skeletons from "../Loader/skelton";

const EventList = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.events);
  const isLoading = useSelector((state)=> state.event.isLoading);
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(getAllEvents())
      .unwrap()
      .then(() => {
        console.log("Finished");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);


  const onEventClick = (id) => {
    navigate(`/view/${id}`)
   };
  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <EventHeader />
          <Divider />
          {
            isLoading ? (
              <>
                {/* <Loader/> */}
                <Skeletons/>
              </>
            ):(
              <>
                {events.length ? (
            <>
              {events.map((event) => (
                <Fragment key={event.id}>
                  <EventListItem event={event} onEventClick={onEventClick}/>
                </Fragment>
              ))}
            </>
          ) : (
            <>
              <Empty />
            </>
          )}

              </>
            )
          }
        </Col>
      </Row>
    </>
  );
};

export default EventList;
