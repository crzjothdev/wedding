export default function AttendanceForm() {
    return (
        <form className="w-full md:max-w-lg shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h3 className="text-2xl mb-4">Confirm your attendance</h3>
            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Email
                </label>
                <input
                    className="shadow appearance-none w-full border focus:shadow-outline py-2 px-3"
                    name="email"
                    type="text"
                    placeholder="your@email.com"
                    id="email"
                />
            </div>
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                type="submit"
            >
                Submits
            </button>
        </form>
    )
}