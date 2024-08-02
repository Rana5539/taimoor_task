import {Form, Input, Typography} from 'antd'
import { PercentageOutlined } from '@ant-design/icons';
function For() {
  return (
    <>
    <Typography 
    style={{
      fontSize:'22px', fontFamily:'Poppins', fontWeight:'500'
      }}>Add Tax
      </Typography>
      <div style={{display:'flex', gap:7}}> 
        <Form.Item >
        <Input  style={{width:'60vh'}}/>
       </Form.Item>
      
      <Form.Item >
        <Input  style={{width:'20vh'}}
          suffix={<PercentageOutlined />}/>
       
      </Form.Item>
      
      </div>
     
    </>
  );
}

export default For;
