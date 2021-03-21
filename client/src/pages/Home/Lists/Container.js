
import React from 'react';
import './Container.css'
import Cards from "./Cards"
import CardsTres from "./Cards3"
import Wrapper from "../wrapper/Wrapper"
import ColorCard from '../ScrollBox/ColorCard';
import ScrollBox from '../ScrollBox/ScrollBox';
import COLORS from '../ScrollBox/data.json';

const Container = () => {
    return (
        <div className='Container'>
            <h1>Test Wrapper con efecto</h1>
                <Wrapper/>
            <h1>Test Wrapper Clickeable</h1>
                <ScrollBox>
                    {COLORS.map(({ color, id }) => (
                    <ColorCard color={color} key={id} />
                    ))}
                </ScrollBox>
                <h1>Test Wrapper con efecto 2</h1>
                <Wrapper/>
            <h1>Test Wrapper Clickeable 2</h1>
                <ScrollBox>
                    {COLORS.map(({ color, id }) => (
                    <ColorCard color={color} key={id} />
                    ))}
                </ScrollBox>
        </div>
        )
}

export default Container;