import usePayment from "../../Pages/hooks/usePayment";

const PaymentDetails = () => {
    const [payments] = usePayment();
    console.log(payments);
    return (
        <div>
            <h1 className="text-center text-[50px] my-[50px] font-[700] text-teal-600">Pro User Payment Details</h1>
            

<div className="relative overflow-x-auto">
    <table className=" max-w-6xl mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-200 uppercase bg-cyan-800 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    User Email
                </th>
                <th scope="col" className="px-6 py-3">
                    transaction Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Payment Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Payment Date
                </th>
            </tr>
        </thead>
        <tbody>
            {payments?.map(payment=> <tr key={payment._id} className="bg-white border-b font-inter dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {payment.email}
                </th>
                <td className="px-6 py-4">
                    {payment.transactionId}
                </td>
                <td className="px-6 py-4">
                    ${payment.price}
                </td>
                <td className="px-6 py-4">
                    {payment.status}
                </td>
                <td className="px-6 py-4">
                    {payment.date}
                </td>
            </tr>)}
        </tbody>
    </table>
</div>

        </div>
    );
};

export default PaymentDetails;