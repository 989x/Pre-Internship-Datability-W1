import './sectwo.css'

import image from '../../img/image.svg'


const SecTwo = () => {
    return (
        <div>
            <div className="conatinerSec2">

                <div className="parts1">
                    <button className="parts1-1">
                        ย้อนกลับ
                    </button>
                    <button className="parts1-2">
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
                                ข้อควรระวัง :
                            </div>
                            <div className="text2">
                                (Precaution)
                            </div>
                        </div>
                    </div>
                    <textarea className="boxsectwo" placeholder="Note"></textarea>
                </div>

            </div>
        </div>
    )
}

export default SecTwo
