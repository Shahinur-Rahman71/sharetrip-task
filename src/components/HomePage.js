import '../styles/homePage.scss'
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';

function HomePage() {
    return (
        <div className='home'>
            <div className='row'>
                <div className='col-md-3'> <FirstSection/></div>
                <div className='col-md-9'> <SecondSection/></div>
            </div>
        </div> 
    );
}

export default HomePage;