import React, { useContext, useEffect, useState } from "react";
import { DataItem } from "../DataItem/DataItem";
import { ApiDataType, appAPI } from "../../API/appAPI";
import { Loader } from "../../Loader/Loader";
import { newItemType } from "../../common/generalTypes";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseInit } from "../../firebase/firebaseInit";
import { useTranslation } from "react-i18next";
import { AlertContext } from "../../alert/alertState";

export const Education: React.FC = () => {

    const [myData, setMyData] = useState<Array<ApiDataType>>([])
    const [isLoading, setIsLoading] = useState(true)
    const [newItem, setNewItem] = useState<Array<newItemType>>([])
    const [deleteItem, setDeleteItem] = useState<string>('')
    const [user] = useAuthState(firebaseInit.auth());
    const { t, i18n } = useTranslation();
    // @ts-ignore
    const { showAlert } = useContext(AlertContext);

    const receiveNewItem = (newItem: Array<newItemType>) => {
        setNewItem(newItem)
    }

    const receiveDeleteItem = (deleteItem: string) => {
        setDeleteItem(deleteItem)
    }

    useEffect(() => {
        appAPI.fetchItems(i18n.language, 'education', showAlert)
            .then((data) => {
                if (data) {
                    setMyData(data)
                }
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                showAlert(error.message)
            })
    }, [i18n.language])

    useEffect(() => {
        if (user && newItem.length !== 0) {
            const item = {
                reviewId: user.uid,
                title: newItem[0].title,
                content: newItem[0].content
            }

            appAPI.addItem(item, i18n.language, 'education', showAlert)
                .then((res => setMyData([...myData, { ...item, id: res }])))
        }
    }, [newItem])

    useEffect(() => {
        if (deleteItem !== '') {
            appAPI.removeItem(deleteItem, i18n.language, 'education', showAlert)
                .then(() => setMyData(myData.filter(item => item.id !== deleteItem)))
        }
    }, [deleteItem])

    return (
        <div className='row customBorder'>
            <h3 className='col-12 text-white text-uppercase d-flex justify-content-center mb-4 mt-3'>{t("education.title")}</h3>
            {isLoading ? <Loader /> : <DataItem myData={myData}
                receiveNewItem={receiveNewItem}
                receiveDeleteItem={receiveDeleteItem} />}
        </div>
    )
}