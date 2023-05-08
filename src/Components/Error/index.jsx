import { Button, Typography } from "antd"
import { useNavigate } from "react-router-dom"

const Error =()=>{

    const navigate = useNavigate();

    const onBtnClick =()=>{
        navigate('/')
    }
    return(
       <div>
         <Typography.Title>Page is not found...!</Typography.Title>
        <Button type="primary" size="large" onClick={()=>onBtnClick()}>Back To Home</Button>
       </div>
    )
}

export default Error;