import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useSurvey = () => {
  const axiosPublic = useAxiosPublic();
  const { data: survey } = useQuery({
    queryKey: ['surveys'],
    queryFn: async () => {
      const res = await axiosPublic.get('/surveys');
      return res.data
    }
  })
  return [survey]

};

export default useSurvey;