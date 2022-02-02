import '../edit.css'

import noHurt from '../../../img/noHurt.svg'
import graph from '../../../img/graph.svg'

const SecOne = () => {
    return (
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

                            <div>
                                <div class="item2">
                                    <input className="boxEdit" placeholder="10 มกราคม 2565"></input>
                                </div>  
                                <div class="item2">
                                    <input className="boxEdit" placeholder="อริสา งามสะอาด"></input>
                                </div>  
                                <div class="item2">
                                    <input className="boxEdit" placeholder="ดูแล"></input>
                                </div> 
                            </div>
                            {/* <div className="grid-container">
                                <div class="item1">
                                    <div className="text1">วันที่ :</div>
                                    <div className="text2">(Date)</div>
                                </div>

                                <div class="item2">
                                    <input placeholder="10 มกราคม 2565"></input>
                                </div>                        
                            </div>

                            <div className="grid-container">
                                <div class="item1">
                                    <div className="text1">พยาบาลผู้ดูแล : </div>
                                    <div className="text2">(Change nurser)</div>
                                </div>

                                <div class="item2">
                                    <input placeholder="10 มกราคม 2565"></input>
                                </div>                        
                            </div>

                            <div className="grid-container">
                                <div class="item1">
                                    <div className="text1">เป้าหมายวันนี้ : </div>
                                    <div className="text2">(Goals for today)</div>
                                </div>

                                <div class="item2">
                                    <input placeholder="10 มกราคม 2565"></input>
                                </div>                        
                            </div> */}
                        </div>

                    </div>
                    
    {/* ----------------------------------- ----------------------------------- -----------------------------------  */}

                    <div className="part2">

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
    )
}

export default SecOne
