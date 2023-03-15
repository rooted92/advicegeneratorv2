import React, { useEffect, useState } from 'react';
import DiceButton from "../button/Button";
import { Container, Row, Col } from 'react-bootstrap';
import UseAdviceState from '../../hooks/AdviceStateHook';
import './Display.css';

const Display = () => {
    // using custom hook from AdviceStateHook.js (it's the same exact thing as useState just wanted to mess around with custom hooks)
    const [advice, setAdvice] = UseAdviceState("");
    const [slipID, setSlipID] = UseAdviceState("");

    // will use useState to check if screensize if less than or equal to 375px
    // const [isMobile, setIsMobile] = useState(false);

    // saving svg's to variables
    const mobileDivider = (<svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" /><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>);

    const desktopDivider = (<svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" /><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>);

    // Using async function to get data from advice api
    const GetAdviceData = async () => {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();// saving returned promise object to data variable
        console.log(data);// test
        setAdvice(data.slip.advice);// saving advice data from api to advice variable
        setSlipID(data.slip.id);// saving id data from api to id variable
        console.log('Ive been clicked!');// test
    }
    // useEffect will invoke GetAdviceData and display data upon render
    useEffect(() => {
        GetAdviceData()
    }, []);

    // useEffect(() => {
        // setIsMobile(window.innerWidth <= 375);// upon rendering useEffect will check if screen size is less than 375px if it is then will it show the mobile divider and if not it will show the desktop divider
    //     console.log(isMobile);
    // }, [isMobile]);

    return (
        <div className='d-flex justify-content-center'>
            <Container className='adviceBox'>
                <Row>
                    <Col className='d-flex flex-column align-items-center'>
                        <p className='slipIdText mt-5'>ADVICE #{slipID}</p>
                        <p className='adviceText px-5 mb-5'>&ldquo;{advice}&rdquo;</p>
                        <div className='divider'>
                            {/* Ternary to check if isMobile is true or false. If true display mobile divider else display desktop divider */}
                            {/* {isMobile ? mobileDivider : desktopDivider} */}
                            <picture>
                                {/* when screen size is greater than 375px desktop divider will show */}
                                <source media="(min-width: 375px)" srcSet={desktopDivider}></source>
                                <img src={mobileDivider} alt='divider'></img> 
                            </picture>
                        </div>
                        <DiceButton callFunc={GetAdviceData} />
                        {/* Remember to pass in a prop for the function you want to call in the Button component to be able to use onClick */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Display;