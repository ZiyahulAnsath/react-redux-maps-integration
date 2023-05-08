import { Button, Result, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const onBtnClick = () => {
    navigate("/");
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={()=>onBtnClick()}>Back Home</Button>}
    />
  );
};

export default Error;
