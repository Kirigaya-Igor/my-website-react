import React, {FormEvent, useContext, useState} from "react"
import './contactPage.scss'
import * as Yup from "yup"
import {Form, Formik} from "formik"
import FormItem from "../common/CustomInput"
import {useAuthState} from "react-firebase-hooks/auth"
import {firebaseInit} from "../firebase/firebaseInit"
import {useTranslation} from "react-i18next"
import emailJs from 'emailjs-com'
import {AlertContext} from "../alert/alertState";
import {Loader} from "../Loader/Loader";

export const ContactPage: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [contactData, setContactData] = useState([{}])
    const [user] = useAuthState(firebaseInit.auth())
    const {t} = useTranslation()
    // @ts-ignore
    const {showAlert} = useContext(AlertContext)

    const customSubmit = (e: FormEvent<HTMLFormElement>, handleSubmit: any) => {
        handleSubmit(e)

        setIsLoading(true)

        // @ts-ignore
        emailJs.sendForm(process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_USER_ID)
            .then(() => {
                setIsLoading(false)
                showAlert('Your message send.', true)
            }, (error) => {
                setIsLoading(false)
                showAlert(error.text);
            });
    }

    const validationSchema = Yup.object({
        fullName: Yup.string().min(3, 'The field "Full Name" cannot be shorter than 3 characters')
            .required('The field "Full Name" is required'),
        email: Yup.string().min(6, 'The field "Email" cannot be shorter than 5 characters')
            .required('The field "Email" is required')
            .email('The field "Email" is not valid'),
        message: Yup.string().min(10, 'The field "Message" cannot be shorter than 10 characters')
            .required('The field "Message" is required')
    })

    return (
        <div className='contactPage'>
            {user ? isLoading ? <Loader/> :
                <Formik
                    initialValues={{fullName: "", email: "", message: ""}}
                    validationSchema={validationSchema}
                    onSubmit={(values, {resetForm} ) => {
                        setContactData([...contactData, values])
                        resetForm({})
                    }}
                >
                    {({ isValid, errors, dirty, ...props}) => (
                        <div className='container-fluid'>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-12 textColor d-flex justify-content-center'>
                                    <div className='d-flex flex-column align-items-center'>
                                        <h3 className='text-uppercase '>{t("contactPage.title")}</h3>
                                        <h6 className='textColor'><span className='redText'>* </span>{t("contactPage.description")}</h6>
                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    <Form onSubmit={(e) => {customSubmit(e, props.handleSubmit)}}
                                          className='d-flex flex-column m-3'>
                                        {/*@ts-ignore*/}
                                        <input type="hidden" id="userEmail" name="userEmail" value={user?.email}/>
                                        <FormItem itemId='FullName' placeholder={t("contactPage.input_1")} itemType='text'
                                                  itemName='fullName' itemLabel={t("contactPage.input_1")} important={true} errors={errors}/>
                                        <FormItem itemId='Email' placeholder={t("contactPage.input_2")} itemType='email'
                                                  itemName='email' itemLabel={t("contactPage.input_2")} important={true} errors={errors}/>
                                        <FormItem itemId='Message' placeholder={t("contactPage.input_3")} itemType='text'
                                                  itemName='message' itemLabel={t("contactPage.input_3")} important={true}
                                                  errors={errors} component={TextareaComponent}/>
                                        <button type="submit" disabled={!isValid || !dirty} className="btnColor btn btn-secondary mt-3">{t("contactPage.submitButton")}</button>

                                    </Form>
                                </div>
                            </div>
                        </div>
                    )}
                </Formik>
                :
                <div className='emptyContactPage'>
                    <h3 className='text-uppercase'>{t("contactPage.title")}</h3>
                    <h4>{t("contactPage.subtitle")}</h4>
                </div>
            }
        </div>
    )
}

// @ts-ignore
const TextareaComponent = ({field, form: { touched, errors }, ...props}) => (
    <textarea {...field} {...props} className='form-control customField'>

    </textarea>
)