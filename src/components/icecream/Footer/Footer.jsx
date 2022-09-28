import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer> 
            {/* first container is main app means Icecream.jsx er and
             second ai function er means footer.module.css er */}
            <div className={['container', classes.container].join(' ')}>
                <div>Copyright &copy;2022.</div>
                <div className="textRight">
                    Built with <span className="red">&hearts;</span> by
                    <a href="https://reactjs.org/docs/create-a-new-react-app.html">
                        Create React App
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;