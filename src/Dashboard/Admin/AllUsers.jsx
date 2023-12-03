import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Pages/hooks/useAxiosSecure";
// import { BringToFront } from "lucide-react";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import ReactiveButton from "reactive-button";
import useAllUser from "../../Pages/hooks/useAllUser";
// import { useState } from "react";

const AllUsers = () => {
    // const [disabled, setDisabled] = useState(true);
    const [users, refetch] = useAllUser();
    const axiosSecure = useAxiosSecure();
    // const { data: users = [], refetch } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/users');
    //         return res.data;
    //     }
    // })
    const handleDelete = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-middle',
                        icon: 'success',
                        title: `${user.name} is new Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleSurveyor = (user) => {
        axiosSecure.patch(`/users/surveyor/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-middle',
                        icon: 'success',
                        title: `${user.name} is new Surveyor`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className="max-w-7xl mx-auto p-[50px]">
            <h1 className="text-[30px] font-[700] font-mono uppercase">Total User:{users.length} </h1>
            <div>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    User ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Choose Role
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Delete User
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-inter">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {user.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 justify-center mb-[10px]">
                                        {user.role === 'admin' ? 'Admin' : <ReactiveButton onClick={() => handleMakeAdmin(user)} color="teal" rounded shadow size="small" idleText="Make Admin"></ReactiveButton>}
                                        {user.role === 'surveyor' ? 'Surveyor' : <ReactiveButton onClick={() => handleSurveyor (user)} color="green" rounded shadow size="small" idleText="Make Surveyour"></ReactiveButton>}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                         <button
                                            onClick={() => handleDelete(user)}>
                                            <FaDeleteLeft className="text-center text-[30px] text-red-600" />
                                        </button>
                                    </td>

                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllUsers;