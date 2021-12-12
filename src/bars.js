import React from "react";
import {Button} from 'react-bootstrap';

export const Botnavbar=() => {
    return <div class="botnavbar_container ">
        <Button variant="outline-dark" size="sm" href={'https://www.ongundemirag.com/contact'} target="_blank">Contact</Button>{' '}
        <Button variant="outline-dark" size="sm" href={'https://www.linkedin.com/in/ongun-demirag/'} target="_blank" >Linkedin</Button>{' '}
        <Button variant="outline-dark" size="sm" href={'https://github.com/wodsuz'} target="_blank">Github</Button>{' '}
        <Button variant="outline-dark" size="sm" href={'https://www.hackerrank.com/wodsuz'} target="_blank" >Hackerrank</Button>{' '}
        <Button variant="outline-dark" size="sm "href={'https://www.ongundemirag.com'} target="_blank"> Portfolio</Button>{' '}
    </div>
}

export const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

export const Copyrighttags=() => {
    return  <div class="header">
        <h6>
            {(new Date().getFullYear())}
             - Ongun Demirag Ⓒ  <br></br> React,Hooks,States,Bootstrap,FA Icons,Circle flags,Gradient Coloring,Mobile Friendly,
        </h6>
    </div>
}
