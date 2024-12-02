import { getContact } from "@/queries";


export default async function page() {
    const contacts = await getContact()
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
          <div className="w-full lg:w-3/4">
            <div className="main__body">
              <h2 className="text-[24px] font-bold text-white mb-[20px] text-center">
                Admin User Data
              </h2>
              <div className="overflow-x-auto bg-gray-800 shadow-lg rounded-lg">
                <table className="w-full border-collapse text-white">
                  <thead className="bg-gray-700 border-b border-gray-600">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">
                        Name
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">
                        Email
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">
                        Website
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">
                        Message
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((user) => (
                      <tr
                        key={user.id}
                        className="border-b border-gray-700 hover:bg-gray-600"
                      >
                        <td className="px-4 py-3 text-sm">{user?.name}</td>
                        <td className="px-4 py-3 text-sm">{user?.email}</td>
                        <td className="px-4 py-3 text-sm text-blue-400">
                          <a
                            href={user?.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {user?.websiteLink}
                          </a>
                        </td>
                        <td className="px-4 py-3 text-sm">{user?.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
