import React from 'react';
import { Content } from '../../molecules';
import { TitleImg } from '../../molecules';
import RainbowText from 'react-rainbow-text';

export const Home = () => {
    const imgUrl = require('../../../assets/images/shell.png');
    return (
        <Content>
            <h1><RainbowText lightness={0.5} saturation={0.5}>Welcome</RainbowText></h1>
            <h2><RainbowText lightness={0.5} saturation={0.5}>to</RainbowText></h2>

            <TitleImg imgPath={imgUrl} alt="cool picture" />
            <h3><RainbowText lightness={0.5} saturation={0.5}>The amazing world of Shell</RainbowText></h3>
            <h3><RainbowText lightness={0.5} saturation={0.5}>Now featuring the amazing world of Vi/m</RainbowText> </h3>
            </Content>
    )
}
