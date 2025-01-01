"use client";

import { signOut } from "next-auth/react";
import ConfirmationModal from "@/components/common/ConfirmationModal";
import formatDateTime from "@/utils/dateTimeConverter";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [blogs, setBlogs] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState({ id: null, type: null });

  const handleTabClick = (tab) => setActiveTab(tab);

  const handleLogout = () => {
    signOut({
   callbackUrl: 'https://nayemmiah.com/admin',
    });
  };

  const openModal = (id, type) => {
    setDeleteInfo({ id, type });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setDeleteInfo({ id: null, type: null });
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    const { id, type } = deleteInfo;
    if (!id || !type) return;

    let endpoint = "";
    let setter;

    if (type === "contact") {
      endpoint = `/api/delete-contact?id=${id}`;
      setter = setContacts;
    } else if (type === "blog") {
      endpoint = `/api/delete-blog?id=${id}`;
      setter = setBlogs;
    } else if (type === "project") {
      endpoint = `/api/delete-project?id=${id}`;
      setter = setProjects;
    }

    try {
      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setter((prev) => prev.filter((item) => item._id !== id));
        closeModal();
      
      } else {
        console.error(`Failed to delete ${type}:`, await response.text());
      }
    } catch (error) {
      console.error(`Error occurred during deletion of ${type}:`, error);
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

  const renderTableRows = (data, type) =>
    data?.map((item) => (
      <tr key={item?._id}>
        <td className="border px-4 py-2 hover:text-theme">
          {item?.title || item?.name}
        </td>
        <td className="border px-4 py-2">
          {type === "blogs" || type === "projects" ? (
            item?.pubshied ? (
              formatDateTime(item?.pubshied)
            ) : (
              <Link href={item?.link} target="_blank">
                Live Preview
              </Link>
            )
          ) : (
            item?.email
          )}
        </td>
        {type === "contact" && (
          <td className="border px-4 py-2">{item?.message}</td>
        )}
        <td className="border px-4 py-2">
          <div className="inline-flex space-x-2">
            {type !== "contact" && (
              <Link
                className="px-2 py-1 bg-blue-600 text-white font-medium text-xs rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-400"
                href={`/admin/update-${type}?id=${item?._id}`}
              >
                Edit
              </Link>
            )}
            <button
              onClick={() => openModal(item?._id, type)}
              className="px-2 py-1 bg-red-600 text-white font-medium text-xs rounded-md hover:bg-red-700 focus:ring focus:ring-red-400"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    ));

  return (
    <div className="container grid h-screen grid-cols-12">
      <aside className="col-span-2 bg-btn text-white p-4">
        <p className="mb-6 text-2xl font-bold">Admin Panel</p>
        <nav>
          <ul className="space-y-4">
            {[
              "Dashboard",
              "Blogs",
              "CreateBlog",
              "Contact",
              "Projects",
              "CreateProject",
            ].map((tab) => (
              <li
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`cursor-pointer rounded-lg px-4 py-2 ${
                  activeTab === tab ? "bg-gray-400 text-white" : ""
                }`}
              >
                {tab.replace(/([A-Z])/g, " $1")}
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-8 w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-gray-200"
        >
          Logout
        </button>
      </aside>

      <div className="col-span-10 p-6">
        <section>
          {activeTab === "Dashboard" && (
            <div>
              <p className="text-3xl font-bold text-white">Welcome, Admin!</p>
              <p className="text-lg mt-4 text-gray-600">
                Here is an overview of your data:
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-blue-100 rounded-lg shadow-md">
                  <h4 className="text-2xl font-semibold text-blue-800">
                    Blogs
                  </h4>
                  <p className="text-lg text-gray-700">{blogs.length} total</p>
                </div>
                <div className="p-4 bg-green-100 rounded-lg shadow-md">
                  <h4 className="text-2xl font-semibold text-green-800">
                    Contacts
                  </h4>
                  <p className="text-lg text-gray-700">
                    {contacts.length} total
                  </p>
                </div>
                <div className="p-4 bg-purple-100 rounded-lg shadow-md">
                  <h4 className="text-2xl font-semibold text-purple-800">
                    Projects
                  </h4>
                  <p className="text-lg text-gray-700">
                    {projects.length} total
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Contact" && (
            <div>
              <h3 className="text-lg font-medium text-btn">Contacts</h3>
              <div className="mt-6 rounded-lg  p-4">
                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-gray-400">
                      <th className="border px-4 py-2">Name</th>
                      <th className="border px-4 py-2">Email</th>
                      <th className="border px-4 py-2">Message</th>
                      <th className="border px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>{renderTableRows(contacts, "contact")}</tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "Blogs" && (
            <div>
              <h3 className="text-lg font-medium text-btn">Blogs</h3>
              <div className="mt-6 rounded-lg  p-4">
                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-gray-400">
                      <th className="border px-4 py-2">Title</th>
                      <th className="border px-4 py-2">Published</th>
                      <th className="border px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>{renderTableRows(blogs, "blog")}</tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "Projects" && (
            <div>
              <h3 className="text-lg font-medium text-btn">Projects</h3>
              <div className="mt-6 rounded-lg  p-4">
                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-gray-400">
                      <th className="border px-4 py-2">Title</th>
                      <th className="border px-4 py-2">Live Link</th>
                      <th className="border px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>{renderTableRows(projects, "project")}</tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "CreateProject" && (
            <div className=" mt-20 col-span-12 flex items-center justify-center">
              <Link href="/admin/create-project" target="_blank">
                <div className="cursor-pointer w-full max-w-sm rounded-lg  bg-red-500 px-4 py-1.5 text-center">
                  <p className="text-md font-semibold  text-white dark:text-gray-50">
                    Create Project
                  </p>
                </div>
              </Link>
            </div>
          )}

          {activeTab === "CreateBlog" && (
            <div className=" mt-20 col-span-12 flex items-center justify-center">
              <Link href="/admin/create-blog" target="_blank">
                <div className="cursor-pointer w-full max-w-sm rounded-lg bg-red-500 px-4 py-1.5 text-center">
                  <p className="text-md font-semibold  text-white dark:text-gray-50">
                    Create Blog
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
