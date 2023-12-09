export default function Form(){ 
    return (
        <form>
            
            <div className="input-type">
                <input type="text" name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="FirstName" />
            </div>
            <div className="input-type">
                <input type="text" name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="LastName" />
            </div>
            <div className="input-type">
                <input type="text" name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email" />
            </div>
            <div className="input-type">
                <input type="text" name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email" />
            </div>

            <div>
            <div className="form-check">
                <input type="radio" value="Active" id="radioDefault1"name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" placeholder="Email" />
                <label htmlFor="radioDefault1" className="inline-block tet-gray-8">
                    Active
                </label>
            </div>
            <div className="form-check">
                <input type="radio" value="Inactive" id="radioDefault2"name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" placeholder="Email" />
                <label htmlFor="radioDefault2" className="inline-block tet-gray-8">
                    Inactive
                </label>
            </div>
            </div>

            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Add</button>

        </form>
    )
}

