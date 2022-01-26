import React, { useContext, useEffect, useState } from "react";
import './mainPage.scss'
import photo from './myPhoto.png'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FormItem from "../common/CustomInput";
import { Form, Formik } from "formik";
import * as Yup from 'yup'
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseInit } from "../firebase/firebaseInit";
import { AlertContext } from "../alert/alertState";
import { ApiDescriptionType, appAPI } from "../API/appAPI";
import { Loader } from "../Loader/Loader";

const admin = process.env.REACT_APP_ADMIN_ID;

export const MainPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [mainPageText, setMainPageText] = useState('')
    const [newMainPageText, setNewMainPageText] = useState('')
    const [user] = useAuthState(firebaseInit.auth());
    const [isLoading, setIsLoading] = useState(true)
    // @ts-ignore
    const { showAlert } = useContext(AlertContext);

    const validationSchema = Yup.object({
        description: Yup.string().required('The field "Description" is required')
    })

    useEffect(() => {
        appAPI.getDescription(i18n.language, 'mainPageDescription', showAlert)
            .then((data: ApiDescriptionType) => {
                if (data) {
                    setMainPageText(data.description)
                }
                setIsLoading(false)
            })
            .catch((error: any) => {
                setIsLoading(false)
                showAlert(error.message)
            })
    }, [i18n.language])

    useEffect(() => {
        if (user && newMainPageText !== '') {
            const item = {
                reviewId: user.uid,
                description: newMainPageText
            }

            appAPI.updateDescription(item, i18n.language, 'mainPageDescription', showAlert)
                .then((res => setMainPageText(newMainPageText)))
        }
    }, [newMainPageText])

    return (
        <div className='mainPage'>
            <div className='container-fluid'>
                <div className='row gy-5'>

                    <div className='col-md-5 d-flex justify-content-center'>
                        <img className='mainPagePhoto' alt='MyPhoto' src={photo} />
                    </div>

                    <div className='col-md-7 mainPageText flex-column'>
                        <div>
                            <h2>{t("mainPage.title")}</h2>
                            <h3>{t("mainPage.subtitle")}</h3>
                        </div>
                        {isLoading ? <Loader /> : <div className='d-flex flex-column'>
                            <h5>{t("mainPage.mainPageTextTitle")}</h5>
                            <div>
                                <span>{mainPageText}</span>
                                <span> {t("mainPage.mainPageLinkText")}</span>
                                <NavLink className='customLink' to='data'> My CV</NavLink>.
                                {user && admin === user.uid &&
                                    <Formik
                                        initialValues={{ description: "" }}
                                        validationSchema={validationSchema}
                                        onSubmit={(values, { resetForm }) => {
                                            setNewMainPageText(values.description)
                                            resetForm({})
                                        }}
                                    >
                                        {({ isValid, errors, dirty }) => (
                                            <div className='row'>
                                                <div className='col-lg-6'>
                                                    <Form className='d-flex flex-column m-0 mt-3'>
                                                        <FormItem itemId='Description' placeholder='Description' itemType='text'
                                                            itemName='description' itemLabel='Description' important={true} errors={errors} component={'textarea'} />
                                                        <button type="submit" disabled={!isValid || !dirty} className="btnColor btn btn-success mt-3">Submit</button>
                                                    </Form>
                                                </div>
                                            </div>
                                        )}
                                    </Formik>
                                }
                            </div>
                        </div>}
                    </div>
                </div>

            </div>
        </div>


    )
}