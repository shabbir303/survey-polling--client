import { useContext } from "react";
import { AuthContext } from "../Login/Providers/Authprovider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useSurveyor = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: isSurveyor } = useQuery({
        queryKey: [user?.email, 'isSurveyor'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/surveyor/${user?.email}`);
            return res.data?.surveyor;
        }
    })
    console.log(isSurveyor);
    return [isSurveyor]
    
};

export default useSurveyor;