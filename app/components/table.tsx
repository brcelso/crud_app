export default function Table(){ 
    return (
        <table className="min-w-full table auto">
        <thead>
            <tr className="bg-gray-700">
                <th className="px-16 py-2">
                    <span className="text-gray-200">Event</span>
                </th>
                <th className="px-16 py-2">
                <span className="text-gray-200">TypeOf</span>
                </th>
                <th className="px-16 py-2">
                <span className="text-gray-200">Start</span>
                </th>
                <th className="px-16 py-2">
                <span className="text-gray-200">End</span>
                </th>
                <th className="px-16 py-2">
                <span className="text-gray-200">Status</span>
                </th>
                <th className="px-16 py-2">
                <span className="text-gray-200">Actions</span>
                </th>
                
            </tr>
        
        </thead>
            <tbody className="bg-gray-800">
                <tr className="bg-gray-800 text-center">
                    <td className="px-16 py-2 flex flex-row items-center">
                        <img src="#" alt=""/>
                        <span className="text-center ml-2 font-semibold">Test</span>
                    </td>
                    <td className="px-16 py-2">
                    <span>test@gmail.com</span>
                    </td>
                    <td className="px-16 py-2">
                    <span>09-12-2023</span>
                    </td>
                    <td className="px-16 py-2">
                    <span>09-12-2023</span>
                    </td>
                    <td className="px-16 py-2">
                    <button className="cursor"><span className="bg-green-500 text-white rounded-md">Active</span></button>
                    </td>
                    <td className="px-16 py-2">
                    <button className="cursor"></button>
                    </td>
                </tr>
            </tbody>
        </table>
    
    )

}