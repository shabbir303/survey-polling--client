import useAllUser from "../../Pages/hooks/useAllUser";


const ManageUser = () => {
    const [users] = useAllUser();
    return (
        <div>
<div className="relative max-w-7xl mx-auto mt-[100px] ml-[100px] overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-200 uppercase bg-sky-700 dark:text-gray-200">
            <tr>
                <th scope="col" className="px-6 py-3">
                    No.
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    email
                </th>
                <th scope="col" className="px-6 py-3">
                    role
                </th>
            </tr>
        </thead>
        <tbody>
            {users?.map ((user,index)=><tr key={user._id} className="bg-white border-b font-inter dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index+1}
                </th>
                <td className="px-6 py-4">
                    {user.name}
                </td>
                <td className="px-6 py-4">
                    {user.email}
                </td>
                <td className="px-6 py-4">
                    {user.role}
                </td>
                
            </tr>)}
        </tbody>
    </table>
</div>

        </div>
    );
};

export default ManageUser;