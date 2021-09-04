import React from 'react'
import './footer.scss'
import {useTranslation} from "react-i18next";
import reactPhoto from './reactlogo.png'
import firebasePhoto from './firebase.png'
import formikPhoto from './formik.png'
import tsPhoto from './typescript.png'
import i18nextPhoto from './i18next.png'
import githubPhoto from './github.png'

export const Footer: React.FC = () => {

    const {t} = useTranslation();

    return (
        <div className='footer'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-6 mt-1 d-flex justify-content-center align-items-center'>
                        <h6>{t("footer.footerText")}</h6>
                        <img style={{height: '35px'}} alt='GitHubImg' src={githubPhoto}/>
                    </div>
                    <div className='col-sm-6 mt-1 d-flex justify-content-center align-items-center'>
                        <div>
                            <img style={{height: '45px'}} alt='GitHubImg' src={reactPhoto}/>
                            <img style={{height: '20px', paddingLeft: '10px'}} alt='GitHubImg' src={tsPhoto}/>
                        </div>
                        <div>
                            <img style={{height: '45px'}} alt='GitHubImg' src={firebasePhoto}/>
                            <img style={{height: '45px'}} alt='GitHubImg' src={i18nextPhoto}/>
                        </div>
                        <img style={{height: '40px'}} alt='GitHubImg' src={formikPhoto}/>
                    </div>
                </div>
            </div>
        </div>
    )
}