import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import '../styles/ssection.scss'
import {ReactComponent as Stroke1} from '../image/stroke1.svg';
import {ReactComponent as Stroke2} from '../image/stroke2.svg'
import {ReactComponent as Stroke3} from '../image/stroke3.svg'
import {ReactComponent as Coin} from '../image/coin.svg'
import {ReactComponent as Bus} from '../image/bus.svg'
import {ReactComponent as SoldOut} from '../image/sold_out.svg'
import {ReactComponent as Available} from '../image/available.svg'
import {ReactComponent as Blocked} from '../image/blocked.svg'
import {ReactComponent as Booked} from '../image/booked.svg'
import {ReactComponent as Selected} from '../image/selected.svg'
import {ReactComponent as Seat} from '../image/seat.svg'

function SecondSection() {
    const [tabbutton,setTabbutton] = useState(1)
    const [seatinfo,setSeatInfo] = useState(0)
    

    return (
        <div className="second">
           <div className='title'>48 Available Buses</div>
           <div className='row tab'>
                <div className='col-md-3 colDesign' onClick={()=> setTabbutton(0)} style={(tabbutton === 0) ? {backgroundColor:  '#3884F7',color: '#FFFFFF'} : {}}><Stroke1 /> Earliest Buses</div>
                <div className='col-md-3 colDesign'onClick={()=> setTabbutton(1)} style={(tabbutton === 1) ? {backgroundColor:  '#3884F7',color: '#FFFFFF'} : {}}><Stroke2 filter={(tabbutton !== 1) ? 'brightness(0.5)' : ''}/> Cheapest Buses</div>
                <div className='col-md-3 colDesign'onClick={()=> setTabbutton(2)} style={(tabbutton === 2) ? {backgroundColor:  '#3884F7',color: '#FFFFFF'} : {}}><Stroke3 /> Available Seats</div>
                <div className='col-md-3 colDesign'onClick={()=> setTabbutton(3)} style={(tabbutton === 3) ? {backgroundColor:  '#3884F7',color: '#FFFFFF'} : {}}><Stroke3/> Fastest Trips</div>
           </div>
           {tabbutton === 1 &&(
           <div className='row second_row'>
                <div className='col-md-9 fCol'>
                    <div className='headline'>
                        <span>AC</span>
                        <span className='hanif'>Hanif Enterprize</span>
                        <span><Coin/> 55</span>
                    </div>
                    <div className='code'>31-DHK-CTG(D)</div>
                    <div className='row '>
                        <div className='col-md-3 firstCol'>
                            <span>From</span>
                            <p>DHAKA</p>
                            <p className='time'>11:30 PM</p>
                            <p className='counter'>Kolabagan Counter</p>
                            <p className='date'>22 June 2021</p>
                        </div>
                        <div className='col-md-5 secondCol'>
                            <span className='span1'>---------</span><Bus/><span className='span2'>--------{`>`} </span>
                            <p className='available_seat'>16 Seats available</p>
                            <p className='hour_minute'>6h 00m</p>
                        </div>
                        <div className='col-md-4 firstCol'>
                            <span>To</span>
                            <p>CHOTTOGRAM</p>
                            <p className='time'>05:30 AM</p>
                            <p className='counter'>Dampara Counter</p>
                            <p className='date'>23 June 2021</p>
                        </div>
                    </div>

                    <div className='row third_row'>
                        <div className='col-md-6'>
                            <fieldset class="border p-2 fieldset1">
                                <legend  class="float-none w-auto p-2">Boarding Point</legend>
                                <select>
                                    <option value={1}>Kolabagan Counter</option>
                                    <option value={2}>Nikunja-2 Counter</option>
                                    <option value={3}>Khilkhet Counter</option>
                                </select>
                            </fieldset>
                        
                        </div>
                        <div className='col-md-6'>
                            <fieldset class="border p-2 fieldset1">
                                <legend  class="float-none w-auto p-2">Dropping Point</legend>
                                <select>
                                    <option>Select Counter</option>
                                    <option value="1" selected>Dampara Counter</option>
                                    <option value="2">Rajshahi Counter</option>
                                    <option value="3">Tangail Counter</option>
                                </select>
                            </fieldset>
                        </div>
                    </div>

                    <div className='row fourth_row'>
                        <div className='col'><SoldOut /> 3 Sold Out</div>
                        <div className='col'><Booked /> 2 Booked</div>
                        <div className='col'><Selected /> 2 Selected</div>
                        <div className='col'><Available /> 14 Available</div>
                        <div className='col' style={{marginRight: '14px'}}><Blocked /> 20 Blocked</div>
                    </div>
                </div>

                <div className='col-md-3 SCol'>
                    <div className='status'>
                        <p className='title1'>Per Person</p>
                        <p className='title2'>BDT 750</p>
                        <p className='title3'>BDT 775</p>
                        <p className='view_seat'>VIEW SEATS</p>
                        <p className='policy'>Cancellation Policy</p>
                    </div>

                    <div className='row button_type'>
                        <div className='col-md-6 seat_info' onClick={()=> setSeatInfo(0)} style={(seatinfo === 0) ? {backgroundColor:  '#3884F7',color: '#FFFFFF'} : {}}>SEAT INFO</div>
                        <div className='col-md-6 policy' onClick={()=> setSeatInfo(1)} style={(seatinfo === 1) ? {backgroundColor:  '#3884F7',color: '#FFFFFF'} : {}}>POLICY</div>
                    </div>
                    { seatinfo === 0 && (
                    <div>
                        <div className='seat_name'>
                            <span><Seat/> B4   <span style={{paddingLeft: '8px'}}>B-Class</span></span>
                            <span>BDT 750</span>
                        </div>

                        <div className='seat_name'>
                            <span><Seat/> C4 <span style={{paddingLeft: '8px'}}>B-Class</span></span>
                            <span>BDT 750</span>
                        </div>

                        <div className='bar'></div>

                        <div className='seat_name'>
                            <span>Charge :</span>
                            <span>BDT 50</span>
                        </div>
                        <div className='seat_name'>
                            <span>Insurance :</span>
                            <span>BDT 20</span>
                        </div>
                        <div className='bar'></div>

                        <div className='seat_name'>
                            <span>Sub Total :</span>
                            <span className='sub_total'>BDT 1,570</span>
                        </div>

                        <div className='last_div'>
                            <div className='inner_lastdiv'>
                                
                                <input type="checkbox" defaultChecked name="vehicle2" value="service"/>
                                <label for="vehicle2"> I want to avail <span>Insurance Service</span></label>
                                
                            </div>
                            <button>SELECT & CONTINUE TO RETURN</button>
                        </div>
                    </div>
                    )}

                </div>
            </div>)}
        
            
        </div> 
    );
}

export default SecondSection;