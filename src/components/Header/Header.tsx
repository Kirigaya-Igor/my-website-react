import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './header.scss'
import {useAuthState} from "react-firebase-hooks/auth";
import {firebaseInit} from "../firebase/firebaseInit";
import {useTranslation} from 'react-i18next';
import '../../i18next'

export const Header: React.FC = () => {

    const [user] = useAuthState(firebaseInit.auth());
    const {t, i18n} = useTranslation();
    const [actLang, SetActLang] = useState(i18n.language);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        SetActLang(lang);
        console.log(i18n.language)
    }

    return (
        <nav className="header sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h3 className="headerLogo navbar-brand">{t("header.title")}</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink className='customLink' to='aboutMe'>{t("header.aboutMeLink")}</NavLink>
                        <NavLink className='customLink' to='data'>{t("header.dataLink")}</NavLink>
                        <NavLink className='customLink' to='contact'>{t("header.contactLink")}</NavLink>
                    </div>
                    <div className=" headerItems navbar-nav ml-2 mb-lg-0">
                        <div className="dropdown">
                            <button className="dropdownButton dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">{t("header.langMenu")}: <span className='activeLang'>{actLang}</span></button>
                            <ul className="dropdownMenu dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><button className="dropdownItem" onClick={() => changeLanguage('en')}>EN</button></li>
                                <li><button className="dropdownItem" onClick={() => changeLanguage('pl')}>PL</button></li>
                                <li><button className="dropdownItem" onClick={() => changeLanguage('ru')}>RU</button></li>
                            </ul>
                        </div>
                    </div>

                    { user ?
                        <div className='navbar-nav ml-2 mb-lg-0'>
                            <span className='spanHello' >{t("header.sayHello")}: {user.email}</span>
                            <button className='singOutButton'
                                    onClick={() => firebaseInit.auth().signOut()}>{t("header.singOutLink")}</button>
                        </div>
                        :
                        <div className="headerItems navbar-nav ml-2 mb-lg-0">
                            <NavLink className='customLink' to='login'>{t("header.loginLink")}</NavLink>
                            <NavLink className='customLink' to='registration'>{t("header.registrationLink")}</NavLink>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}