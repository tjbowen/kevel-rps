import React from 'react';
import { IResultsProps } from '../models/ResultsModel';

export const Results = (props: IResultsProps) => {
    return (
        <div className='col-sm-12'>
            <h2>{props.userSelectedWeapon}</h2><br/>
            <b>VS</b><br/>
            <h2>{props.cpuSelectedWeapon}</h2>
        </div>
    )
}