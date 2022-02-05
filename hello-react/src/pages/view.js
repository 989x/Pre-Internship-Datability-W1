//css
import '../components/ViewCss/secone.css';
import '../components/ViewCss/sectwo.css'
import '../components/ViewCss/edit.css'
//image
import noHurt from '../img/noHurt.svg'
import graph from '../img/graph.svg'
import image from '../img/image.svg'
// functions
import  React,{useState} from 'react';

const SecView = () => {
  
    const [show,setShow] = useState(true)
        return (
            <div className="App">
            
                <div className="app-grid">

                    {/* sec one */}

                    <div>
                        <div>
                            <div className="">
                                <div className="conatinerSec">

                                    <div className="part1">

                                        <div className="textHeader">
                                            ห้องเลขที่ 101 VIP Suite
                                        </div>

                                        <div className="between">

                                            <div>
                                                <div class="item1">
                                                    <div className="text1">วันที่ :</div>
                                                    <div className="text2">(Date)</div>
                                                </div>
                                                <div class="item1">
                                                    <div className="text1">พยาบาลผู้ดูแล : </div>
                                                    <div className="text2">(Change nurser)</div>
                                                </div>
                                                <div class="item1">
                                                    <div className="text1">เป้าหมายวันนี้ : </div>
                                                    <div className="text2">(Goals for today)</div>
                                                </div>
                                            </div>

                                            {/*  */}
                                            <div>
                                                <div class="item2">
                                                    {
                                                        show?   <input className="boxsecone" placeholder="10 มกราคม 2565"></input>
                                                        :   <input className="boxEdit" placeholder="10 มกราคม 2565"></input>
                                                    }
                                                </div>  
                                                <div class="item2">
                                                    {
                                                        show?   <input className="boxsecone" placeholder="อริสา งามสะอาด"></input>
                                                        :   <input className="boxEdit" placeholder="อริสา งามสะอาด"></input>
                                                    }
                                                </div>  
                                                <div class="item2">
                                                    {
                                                        show?   <input className="boxsecone" placeholder="ดูแล"></input>
                                                        :   <input className="boxEdit" placeholder="ดูแล"></input>
                                                    }
                                                </div> 
                                            </div>
                                            {/*  */}

                                        </div>

                                    </div>
                                    
                            {/* ----------------------------------- ----------------------------------- -----------------------------------  */}

                                    <div className="part2">

                                        <div className="">
                                            <div className="part2-1">
                                                <div className="part2-1-2">
                                                    <div>
                                                        การควบคุมความเจ็บปวดประจำสม่ำเสมอ <br/> คือเป้าหมายของเรา 
                                                    </div>
                                                    <div className="text3">
                                                        Pain management is our goal always!
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="part2-2">
                                                <div className="part2-2-1">
                                                    <div className="text1">
                                                        ระดับคะแนนความเจ็บปวด
                                                    </div>
                                                    <div className="text2">
                                                        ( Wong-Baker FACES Pain Rating Scale )
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                            {/* ----------------------------------- ----------------------------------- -----------------------------------  */}

                                        <div className="part3">
                                            <img src={noHurt} className="noHurt"/>
                                        </div>

                                        <div className="part4">
                                            <img src={graph} className="graph"/>
                                        </div>

                                    </div>
                                
                                </div>

                            </div>

                        </div>
                    </div>

        {/* end sec 1 */}

                    {/* sec two */}
                    <div>
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

                                        show?<textarea className="boxsectwo" placeholder="Note"></textarea>
                                        :<textarea className="boxEditTwo" placeholder="Note"></textarea>
                                        
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

                                    show?<textarea className="boxsectwo" placeholder="Note"></textarea>
                                    :<textarea className="boxEditTwo" placeholder="Note"></textarea>

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

                                    show?<textarea className="boxsectwo" placeholder="Note"></textarea>
                                    :<textarea className="boxEditTwo" placeholder="Note"></textarea>

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

                                    show?<textarea className="boxsectwo" placeholder="Note"></textarea>
                                    :<textarea className="boxEditTwo" placeholder="Note"></textarea>

                                    }
                                </div>

                                <div className="space"></div>

                            </div>
                        </div>
                    
                    </div>

        {/* end sec 2 */}

                </div>

            </div>
        );
}

export default SecView;
