import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useSingleUser = () => {
    const axiosSecure = useAxiosSecure();
    const {data:singleUser, refetch}= useQuery({
        queryKey: ['singleUser'],
        queryFn: async()=>{
          const res = await axiosSecure.get('/users/:id');
          res.data
        }
    })
    return [singleUser, refetch]
};

export default useSingleUser;