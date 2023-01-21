import { useEffect, useState } from "react"
import { axiosInstance } from "../utilis/axiosInstance";

const useFoods = (category) => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')

    useEffect(() => {
        let url = 'food';

        if(category) {
            url = `${url}/foodCategory/${category}`
        }

        const fetchFoods = async () => {
            setLoading(true);
            try {
                const {status, data} = await axiosInstance(url);
                if(status == 201) {
                    setFoods(data.foods)
                    setLoading(false)
                    setError('')
                }
            } catch (error) {
                setLoading(false)
                setError(error.responce.data.message)
            }
        }


        fetchFoods()
        // console.log(fetchFoods);
    },[category])



    return{
        foods,
        loading,
        error
    }
}

export default useFoods;