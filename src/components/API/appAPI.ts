import axios from "axios";

const url = process.env.REACT_APP_DB_URL;

export type ApiDataType = {
    content: string,
    reviewId: string,
    title: string,
    id: string
}

export const appAPI = {

    async fetchItems(lang: string, tableName: string, showAlert: (text: string) => void) {
        try {
            const res = await axios.get(`${url}/${lang}/${tableName}.json`);

            if (res.data != null){
                const appData = Object.keys(res.data).map(key => {
                    return {
                        ...res.data[key],
                        id: key
                    }
                })
                return appData
            }

            return null

        } catch (error) {
            showAlert(error.message)
        }
    },

    async addItem(item: any, lang: string, tableName: string, showAlert: (text: string) => void) {
        try {
            const res = await axios.post(`${url}/${lang}/${tableName}.json`, item);

            return res.data.name

        } catch (error) {
            showAlert(error.message)
        }
    },

    async removeItem(id : string, lang: string, tableName: string, showAlert: (text: string) => void) {

        try {
            await axios.delete(`${url}/${lang}/${tableName}/${id}.json`);

        } catch (error) {
            showAlert(error.message)
        }
    }

}