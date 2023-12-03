import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const usePayment = () => {
    const axiosSecure = useAxiosSecure();
    const {data: payments}=useQuery({
        queryKey: ['payment'],
        queryFn: async()=>{
          const res = await axiosSecure.get('/payment');
          return res.data
        }
     })
    return [payments]
};

export default usePayment;