import './sectwo.css'
import image from '../../../img/image.svg'

import '../edit.css'

// import { useNavigate } from "react-router-dom";

import  React,{useState} from 'react';

const SecTwo = () => {
    // let navigate = useNavigate();

    const [show,setShow] = useState(true)

    return (
        <div>
            <div className="conatinerSec2">

                <div className="parts1">
                    <button 
                        className="parts1-1"
                        onClick={() => setShow(!show)}
                    >
                        ย้อนกลับ
                    </button>

                    {
                        show? <button className="parts1-2" onClick={() => setShow(!show)}>แก้ไขข้อมูล</button>
                        : null
                    }

                    {
                        show?   null
                        :   <div className="">
                                <button className="buttonGreen">บันทึก</button>
                                <button className="buttonRed">ผู้ป่วยออก</button>
                            </div>  
                        
                    }

                </div>

                <div className="parts2">
                    <img src={image} className="image"/>
                </div>

                <div className="part3">
                    <div>
                        <div className="spacesectwo">
                            <div className="text1">
                                ข้อควรระวัง :
                            </div>
                            <div className="text2">
                                (Precaution)
                            </div>
                        </div>
                    </div>
                    {

                        show?<textarea className="boxsectwo" placeholder="TestNote"></textarea>
                        :<textarea className="boxEditTwo" placeholder="sadddddddd"></textarea>
                        
                    }
                </div>

                <div className="part3">
                    <div>
                        <div className="spacesectwo">
                            <div className="text1">
                                ความต้องการพิเศษของผู้ป่วย :
                            </div>
                            <div className="text2">
                                (Special needs)
                            </div>
                        </div>
                    </div>
                    {

                    show?<textarea className="boxsectwo" placeholder="TestNote"></textarea>
                    :<textarea className="boxEditTwo" placeholder="sadddddddd"></textarea>

                    }
                </div>

                <div className="part3">
                    <div>
                        <div className="spacesectwo">
                            <div className="text1">
                                หากมีข้อเสนอแนะเพิ่มเติมสามารถติดต่อหัวหน้าแผนก :
                            </div>
                            <div className="text2">
                                (For any commnet please contact of department)
                            </div>
                        </div>
                    </div>
                    {

                    show?<textarea className="boxsectwo" placeholder="TestNote"></textarea>
                    :<textarea className="boxEditTwo" placeholder="sadddddddd"></textarea>

                    }
                </div>

                <div className="part3">
                    <div>
                        <div className="spacesectwo">
                            <div className="text1">
                                คำถามที่ต้องการถามแพทย์ :
                            </div>
                            <div className="text2">
                                (Any question ask your doctor)
                            </div>
                        </div>
                    </div>
                    {

                    show?<textarea className="boxsectwo" placeholder="TestNote"></textarea>
                    :<textarea className="boxEditTwo" placeholder="sadddddddd"></textarea>

                    }
                </div>

                <div className="space"></div>

            </div>
        </div>
    
    )
}

export default SecTwo
