import '../edit.css'

import image from '../../../img/image.svg'

import { useNavigate } from "react-router-dom";

const SecTwo = () => {
    let navigate = useNavigate();
    return (
        <div>
            <div className="conatinerSec2">

                <div className="parts1">

                    <button 
                        onClick={() => {
                            navigate("/");
                        }}
                        className="parts1-1"
                    >
                        ย้อนกลับ
                    </button>

                    <button 
                        onClick={() => {
                            navigate("/edit");
                        }}
                        className="buttonRed"
                    >
                        ผู้ป่วยออก
                    </button>

                    <button 
                        onClick={() => {
                            navigate("/edit");
                        }}
                        className="buttonGreen"
                    >
                        บันทึก
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
                    <textarea className="boxEditTwo" placeholder="Note"></textarea>
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
                    <textarea className="boxEditTwo" placeholder="Note"></textarea>
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
                    <textarea className="boxEditTwo" placeholder="Note"></textarea>
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
                    <textarea className="boxEditTwo" placeholder="Note"></textarea>
                </div>

            </div>
        </div>
    )
}

export default SecTwo
