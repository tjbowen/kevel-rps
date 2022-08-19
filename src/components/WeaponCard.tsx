import React from 'react';
import { IWeaponCardProps } from '../models/WeaponsCardModel';
import Card from 'react-bootstrap/Card';
import './WeaponCard.css';


const WeaponsCard = (props: IWeaponCardProps) => {
    return (
        <Card
            onClick={() => props.onClick(props.Name)}
            className='col-md-4 weapon-card' 
            style={{ backgroundColor: props.Name.toLowerCase() == 'rock' ? '#9b7653'
                                    : props.Name.toLowerCase() == 'scissors' ? '#FF0000'
                                    : '#FFFAF0' }}>
            <Card.Body>
                <Card.Title>{props.Name}</Card.Title>
                <Card.Text>
                    <b>Strength</b>&#58;&nbsp;<span>{props.Strength}</span><br/>
                    <b>Weakness</b>&#58;&nbsp;<span>{props.Weakness}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default WeaponsCard;

