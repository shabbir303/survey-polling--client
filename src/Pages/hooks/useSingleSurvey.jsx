import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSingleSurvey = () => {
    const axiosSecure = useAxiosSecure();
    const {data: eachSurvey, refetch} = useQuery({
      queryKey: ['eachSurvey'],
      queryFn: async()=>{
       const res = await axiosSecure.get('/surveys/:id');
       res.data
    }
    })
    
    return [eachSurvey, refetch]
};

export default useSingleSurvey;