import React from "react";
import './mainPage.scss'
import photo from './myPhoto.png'
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

export const MainPage: React.FC = () => {
    const {t} = useTranslation();
    return (
        <div className='mainPage'>
            <div className='container-fluid'>
                <div className='row gy-3'>

                    <div className='col-md-5 d-flex justify-content-center'>
                        <img className='mainPagePhoto' alt='MyPhoto' src={photo}/>
                    </div>

                    <div className='col-md-7 mainPageText flex-column'>
                        <div>
                            <h2>{t("mainPage.title")}</h2>
                            <h3>{t("mainPage.subtitle")}</h3>
                        </div>
                        <div className='d-flex flex-column'>
                            <h5>{t("mainPage.mainPageTextTitle")}</h5>
                            <div className='mb-5'>
                                {t("mainPage.mainPageText")}
                                <NavLink className='customLink' to='data'> My CV</NavLink>.
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}