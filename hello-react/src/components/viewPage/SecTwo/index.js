import './sectwo.css'

import image from '../../../img/image.svg'

import { useNavigate } from "react-router-dom";

const SecTwo = () => {
    let navigate = useNavigate();
    return (
        <div>
            <div className="conatinerSec2">

                <div className="parts1">
                    <button className="parts1-1">
                        ย้อนกลับ
                    </button>
                    <button 
                        onClick={() => {
                            navigate("/edit");
                        }}
                        className="parts1-2"
                    >
                        แก้ไขข้อมูล
                    </button>
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
                    <textarea className="boxsectwo" placeholder="Note"></textarea>
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
                    <textarea className="boxsectwo" placeholder="Note"></textarea>
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
                    <textarea className="boxsectwo" placeholder="Note"></textarea>
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
                    <textarea className="boxsectwo" placeholder="Note"></textarea>
                </div>

                <div className="space"></div>

            </div>
        </div>
    )
}

export default SecTwo
