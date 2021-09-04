import React, {useContext, useState} from "react"
import {Formik} from "formik"
import * as Yup from 'yup'
import './RegistrationPage.scss'
import {firebaseInit} from "../firebase/firebaseInit";
import {Redirect, useHistory} from "react-router-dom";
import {LoginAndRegisterForm} from "../common/LoginAndRegisterForm";
import {AuthContext} from "../firebase/firebaseAuth";
import {useTranslation} from "react-i18next";
import {AlertContext} from "../alert/alertState";
import {Loader} from "../Loader/Loader";

export const RegistrationPage: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false)
    let history = useHistory();
    const {t} = useTranslation();
    // @ts-ignore
    const {showAlert} = useContext(AlertContext);

    const onSubmit = async (email: string, password: string) => {
        setIsLoading(true)
        try {
            await firebaseInit.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                        history.push("/aboutMe")
                        setIsLoading(false)
                    }
                )
        } catch (error) {
            setIsLoading(false)
            showAlert(error.message)
        }
    }

    // @ts-ignore
    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/aboutMe"/>;
    }


    const validationSchema = Yup.object({
        email: Yup.string().min(6, 'The field "Email" cannot be shorter than 6 characters')
            .required('The field "Email" is required')
            .email('The field "Email" is not valid'),
        password: Yup.string().min(6, 'The field "Password" cannot be shorter than 6 characters')
            .required('The field "Password" is required')
    })

    return (
        <div className='RegistrationPage'>
            {isLoading ?
                <Loader/>
                :
                <Formik
                    initialValues={{email: "", password: ""}}
                    validationSchema={validationSchema}
                    onSubmit={(values, {resetForm} ) => {
                        onSubmit(values.email, values.password)
                        resetForm({})
                    }}
                >
                    {({ isValid, errors, dirty }) => (
                        <LoginAndRegisterForm sendButton={t("registrationPage.submitButton")} pageTitle={t("registrationPage.title")} errors={errors} dirty={dirty} isValid={isValid}/>
                    )}
                </Formik>
            }
        </div>
    )
}