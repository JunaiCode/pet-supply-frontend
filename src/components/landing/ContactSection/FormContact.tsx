

export const FormContact = ()=>{
    return(<form className="bg-white p-6 rounded-xl shadow space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Your message..."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
            >
              Send Message
            </button>
          </form>)
}