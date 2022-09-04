import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import '../styles/fsection.scss'

function FirstSection() {
    const [time,setTime] = useState(false);

    return (
        <div className="first">
            <div className='sort_filter'>
                <span className='sort'>Sort & filter</span>
                <span className='reset'>RESET</span>
            </div>

            <div className='price_range'>
                <p>Price Range</p>
                <div className='min_max'>
                    <span>Minimum Price <b>500</b></span>
                    <span>Maximum Price <b>3,213</b></span>
                </div>
                <div className='price_limit'>
                    <span className='firstPoint'></span>
                    <span className='bar'></span>
                    <span className='secondPoint'></span>
                </div>
            </div>

            <div className='class_section'>
                <p>Class</p>
                <Form>
                    <div className="mb-3">
                        <Form.Check 
                            type={'checkbox'}
                            id={`ac}`}
                            label={`AC (40)`}
                        />

                        <Form.Check
                            type={'checkbox'}
                            label={`Non AC (24)`}
                            id={`non-ac`}
                        />
                    </div>
                </Form>
            </div>
            
            <div className='schedule'>
                <p>Schedule</p>
                <div className='departure'>
                    <span>Departure Time</span>
                    <div className='departure_time'>
                        <span onClick={()=> setTime(0)} className='time_select' style={{backgroundColor: time === 0 && 'green'}}></span>
                        <span >00:00 - 05:59</span>
                    </div>
                    <div className='departure_time'>
                        <span onClick={()=> setTime(1)} className='time_select' style={{backgroundColor: time === 1 && 'green'}}></span>
                        <span >06:00 - 11:59</span>
                    </div>
                    <div className='departure_time'>
                        <span onClick={()=> setTime(2)} className='time_select' style={{backgroundColor: time === 2 && 'green'}}></span>
                        <span >12:00 - 17:59</span>
                    </div>
                    <div className='departure_time'>
                        <span onClick={()=> setTime(3)} className='time_select' style={{backgroundColor: time === 3 && 'green'}}></span>
                        <span >18:00 - 23:59</span>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default FirstSection;