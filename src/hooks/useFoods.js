import { useEffect, useState } from "react"
import { axiosInstance } from "../utilis/axiosInstance";

const useFoods = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchFoods = async () => {
            setLoading(true);
            try {
                const {status, data} = await axiosInstance('food');
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
    },[])


    return{
        foods,
        loading,
        error
    }
}

export default useFoods;