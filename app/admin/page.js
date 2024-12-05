"use client";
import ConfirmationModal from "@/components/common/ConfirmationModal";
import formatDateTime from "@/utils/dateTimeConverter";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("blogs");
  const [blogs, setBlogs] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const openModal = (id) => {
    setDeleteId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setDeleteId(null);
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      const response = await fetch(`/api/delete-contact?id=${deleteId}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        console.log("Contact deleted successfully.");
        setContacts((prevContacts) =>
          prevContacts.filter((contact) => contact._id !== deleteId)
        );
        closeModal();
      } else {
        console.error("Failed to delete contact:", await response.text());
      }
    } catch (error) {
      console.error("Error occurred during deletion:", error);
    }
  };

  const fetchData = async (endpoint, setter) => {
    try {
      const response = await fetch(endpoint, {
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setter(data);
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
    }
  };

  useEffect(() => {
    fetchData("/api/getBlogs", setBlogs);
    fetchData("/api/getContact", setContacts);
    fetchData("/api/getProject", setProjects);
  }, []);

  return (
    <div className=" container grid h-screen grid-cols-12">
      <aside className="col-span-2 bg-btn  text-white p-4 sm:col-span-2">
        <p className="mb-6 text-xxl font-bold">Admin Panel</p>
        <nav>
          <ul className="space-y-4">
            <li
              onClick={() => handleTabClick("blogs")}
              className={`cursor-pointer rounded-lg px-4 py-2 hover:bg-white hover:text-btn ${
                activeTab === "blogs" ? "bg-white text-btn" : ""
              }`}
            >
              All Blogs
            </li>

            <li
              onClick={() => handleTabClick("createBlog")}
              className={`cursor-pointer rounded-lg px-4 py-2 hover:bg-white hover:text-btn ${
                activeTab === "createBlog" ? "bg-white text-btn" : ""
              }`}
            >
              Create Blog
            </li>

            <li
              onClick={() => handleTabClick("contact")}
              className={`cursor-pointer rounded-lg px-4 py-2 hover:bg-white hover:text-btn ${
                activeTab === "contact" ? "bg-white text-btn" : ""
              }`}
            >
              Contact
            </li>

            <li
              onClick={() => handleTabClick("projects")}
              className={`cursor-pointer rounded-lg px-4 py-2 hover:bg-white hover:text-btn ${
                activeTab === "projects" ? "bg-white text-btn" : ""
              }`}
            >
              Projects
            </li>

            <li
              onClick={() => handleTabClick("createProject")}
              className={`cursor-pointer rounded-lg px-4 py-2 hover:bg-white hover:text-btn ${
                activeTab === "createProject" ? "bg-white text-btn" : ""
              }`}
            >
              Create Project
            </li>
          </ul>
        </nav>
        <button className="mt-8 flex w-full items-center rounded-lg px-4 py-2 hover:bg-white hover:text-btn">
          {/* <FaSignOutAlt className="mr-2" /> */}
          Logout
        </button>
      </aside>

      <div className="col-span-10 flex flex-col p-6 sm:col-span-10">
        <section className="grid grid-cols-12 gap-4">

          {activeTab === "contact" && (
            <div className="col-span-12">
              <h3 className="text-lg font-medium text-btn dark:text-white">
                Contacts Message
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                All Contact Message Here
              </p>
              <div className="mt-6 rounded-lg border p-4 dark:border-gray-700">
                <table className="w-full table-auto border-collapse text-btn dark:text-white">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border px-4 py-2">Name</th>
                      <th className="border px-4 py-2">Email</th>
                      <th className="border px-4 py-2">Website</th>
                      <th className="border px-4 py-2">Message</th>
                      <th className="border px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts?.map((contact) => (
                      <tr key={contact?._id}>
                        <td className="border px-4 py-2 hover:text-theme">
                          {contact?.name}
                        </td>

                        <td className="border px-4 py-2">{contact?.email}</td>
                        <td className="border px-4 py-2">{contact?.website}</td>
                        <td className="border px-4 py-2">{contact?.message}</td>

                        <td
                          onClick={() => openModal(contact?._id)}
                          className="hover:text-red-600 cursor-pointer border px-4 py-2"
                        >
                          Delete
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "createBlog" && (
            <div className=" mt-20 col-span-12 flex items-center justify-center">
              <Link href="/admin/create-blog" target="_blank">
                <div className="cursor-pointer w-full max-w-sm rounded-lg bg-theme px-4 py-2 text-center">
                  <p className="text-lg font-semibold  text-btn dark:text-gray-50">
                    Create a New Blog
                  </p>
                </div>
              </Link>
            </div>
          )}

          {activeTab === "blogs" && (
            <div className="col-span-12">
              <h3 className="text-lg font-medium text-btn dark:text-white">
                Blogs
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                All Blogs Here
              </p>
              <div className="mt-6 rounded-lg border p-4 dark:border-gray-700">
                <table className="w-full table-auto border-collapse text-btn dark:text-white">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border px-4 py-2">Title</th>
                      <th className="border px-4 py-2">Published</th>
                      <th className="border px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs?.map((blog) => (
                      <tr key={blog?._id}>
                        <td className="border px-4 py-2 hover:text-theme">
                          {blog?.title}
                        </td>
                        <td className="border px-4 py-2">
                          {" "}
                          {formatDateTime(blog?.pubshied)}
                        </td>
                        <td className=" hover:text-red-600  border px-4 py-2">
                          <Link href={`/admin/update-blog?id=${blog?._id}`}>
                            Edit
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="col-span-12">
              <h3 className="text-lg font-medium text-btn dark:text-white">
                Projects
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                All Projects Here
              </p>
              <div className="mt-6 rounded-lg border p-4 dark:border-gray-700">
                <table className="w-full table-auto border-collapse text-btn dark:text-white">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border px-4 py-2">Title</th>
                      <th className="border px-4 py-2">Live Link</th>
                      <th className="border px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects?.map((project) => (
                      <tr key={project?._id}>
                        <td className="border px-4 py-2 hover:text-theme">
                          {project?.title}
                        </td>
                        <td className="border px-4 py-2">
                          <Link href={project?.link} target="_blank">
                            Live Preview
                          </Link>
                        </td>
                        <td className=" hover:text-red-600  border px-4 py-2">
                          <Link href={`/admin/update-project?id=${project?._id}`}>
                            Edit
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "createProject" && (
            <div className=" mt-20 col-span-12 flex items-center justify-center">
              <Link href="/admin/create-project" target="_blank">
                <div className="cursor-pointer w-full max-w-sm rounded-lg bg-theme px-4 py-2 text-center">
                  <p className="text-lg font-semibold  text-btn dark:text-gray-50">
                    Create a New Project
                  </p>
                </div>
              </Link>
            </div>
          )}
          
        </section>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleDelete}
      />
    </div>
  );
}
