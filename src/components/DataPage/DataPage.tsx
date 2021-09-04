import React from "react";
import './dataPage.scss'
import {PersonalData} from "./PersonalData/PersonalData";
import {Education} from "./Education/Education";
import {Experience} from "./Experience/Experience";
import {OtherInformation} from "./OtherInformation/OtherInformation";

export const DataPage: React.FC = () => {

    return (
        <div className='dataPage'>
            <div className='container-fluid'>
                <PersonalData/>
                <Education/>
                <Experience/>
                <OtherInformation/>
            </div>
        </div>
    )
}