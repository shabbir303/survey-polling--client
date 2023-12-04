import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Login/Providers/Authprovider";
import { useQuery } from "@tanstack/react-query";


const useProUser = () => {
    const { user,loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data: isProUser } = useQuery({
        queryKey: [user?.email, 'isProUser'],
        enabled: !loading && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/proUsers/${user?.email}`);
            return res.data?.proUser;

            // console.log(res.data?.proUser);
        }
    })
    return [isProUser]
};

export default useProUser;