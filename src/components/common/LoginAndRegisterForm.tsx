import React from "react"
import {Form, FormikErrors} from "formik";
import FormItem from "./CustomInput";
import {useTranslation} from "react-i18next";

type LoginAndRegisterFormType = {
    pageTitle: string,
    errors: FormikErrors<{ email: string; password: string; }>,
    isValid: boolean,
    dirty: boolean,
    sendButton: string
}

export const LoginAndRegisterForm: React.FC<LoginAndRegisterFormType> = ({pageTitle, errors, isValid, dirty, sendButton}) => {

    const {t} = useTranslation();

    return (
        <div className='container-fluid'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 textColor d-flex justify-content-center'>
                    <div className='d-flex flex-column align-items-center'>
                        <h3>{pageTitle}</h3>
                        <h6 className='textColor'><span className='redText'>* </span>{t("contactPage.description")}</h6>
                    </div>
                </div>
                <div className='col-xl-6'>
                    <Form className='d-flex flex-column m-5 mt-3'>
                        <FormItem itemId='Email' placeholder={t("LoginAndRegisterForm.email")} itemType='email'
                                  itemName='email' itemLabel={t("LoginAndRegisterForm.email")} important={true} errors={errors}/>
                        <FormItem itemId='Password' placeholder={t("LoginAndRegisterForm.password")} itemType='password'
                                  itemName='password' itemLabel={t("LoginAndRegisterForm.password")} important={true} errors={errors}/>
                        <button type="submit" disabled={!isValid || !dirty} className="btnColor btn btn-secondary mt-3">{sendButton}</button>

                    </Form>
                </div>
            </div>
        </div>
    )
}
