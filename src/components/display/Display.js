import React, { useEffect, useState } from 'react';
import DiceButton from "../button/Button";
import { Container, Row, Col } from 'react-bootstrap';
import UseAdviceState from '../../hooks/AdviceStateHook';
import DesktopDivider from '../../images/pattern-divider-desktop.svg';
import MobileDivider from '../../images/pattern-divider-mobile.svg';
import './Display.css';

const Display = () => {

    // using custom hook from AdviceStateHook.js (it's the same exact thing as useState just wanted to mess around with custom hooks)
    const [advice, setAdvice] = UseAdviceState("");
    const [slipID, setSlipID] = UseAdviceState("");

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

    return (
        <div className='d-flex justify-content-center'>
            <Container className='adviceBox'>
                <Row>
                    <Col className='d-flex flex-column align-items-center'>
                        <p className='slipIdText mt-5'>ADVICE #{slipID}</p>
                        <p className='adviceText px-5 mb-5'>&ldquo;{advice}&rdquo;</p>
                        <div className='divider'>
                            <picture>
                                {/* when screen size is less than 550px mobile divider will show */}
                                <source media="(max-width: 550px)" srcSet={MobileDivider}></source>
                                <img src={DesktopDivider} alt='divider'></img> 
                            </picture>
                        </div>
                                    {/* vvv */}
                        <DiceButton callFunc={GetAdviceData} />
                        {/* Remember to pass in a prop for the function you want to call in the Button component to be able to use onClick */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Display;