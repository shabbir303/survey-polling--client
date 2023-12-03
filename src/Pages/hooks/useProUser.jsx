import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Login/Providers/Authprovider";
import { useQuery } from "@tanstack/react-query";


const useProUser = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const{data: isProUser} = useQuery({
      queryKey:[user?.email,'isProUser'],
      queryFn: async()=>{
       const res = await axiosSecure.get(`/users/proUser/${user?.email}`);
       res.data?.proUser
    }
    })
    return [isProUser]
};

export default useProUser;