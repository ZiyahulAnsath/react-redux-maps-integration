import { Spin } from "antd";

const Loader =()=>{
    return(
        <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    )
}


export default Loader;