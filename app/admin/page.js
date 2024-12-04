"use client";
import formatDateTime from "@/utils/dateTimeConverter";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("blogs");
  const [blogs, setBlogs] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await fetch("/api/getBlogs", {
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();

        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFunction();
  }, []);

  return (
    <div className=" container grid h-screen grid-cols-12">
      <aside className="col-span-3 bg-btn  text-white p-4 sm:col-span-2">
        <h1 className="mb-6 text-xl font-bold">Admin Panel</h1>
        <nav>
          <ul className="space-y-4">
            <li
              onClick={() => handleTabClick("blogs")}
              className={`cursor-pointer rounded-lg px-4 py-2 hover:bg-white hover:text-btn ${
                activeTab === "blogs" ? "bg-white text-btn" : ""
              }`}
            >
              Blogs
            </li>

            <li
              onClick={() => handleTabClick("users")}
              className={`cursor-pointer rounded-lg px-4 py-2 hover:bg-white hover:text-btn ${
                activeTab === "users" ? "bg-white text-btn" : ""
              }`}
            >
              Users
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
              projects
            </li>

            <li
              onClick={() => handleTabClick("settings")}
              className={`cursor-pointer rounded-lg px-4 py-2 hover:bg-white hover:text-btn ${
                activeTab === "settings" ? "bg-white text-btn" : ""
              }`}
            >
              Settings
            </li>
          </ul>
        </nav>
        <button className="mt-8 flex w-full items-center rounded-lg px-4 py-2 hover:bg-white hover:text-btn">
          {/* <FaSignOutAlt className="mr-2" /> */}
          Logout
        </button>
      </aside>

      <div className="col-span-9 flex flex-col p-6 sm:col-span-10">
        <section className="grid grid-cols-12 gap-4">
          {activeTab === "dashboard" && (
            <div className="col-span-12">
              <h3 className="text-lg font-medium text-btn dark:text-white">
                Dashboard Overview
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Welcome to the admin panel. Use the menu to navigate sections.
              </p>

              {/* Stats Grid */}
              <div className="mt-6 grid grid-cols-12 gap-4">
                <div className="col-span-12 rounded-lg bg-btn p-4 text-white sm:col-span-6 lg:col-span-4">
                  <h4 className="text-lg font-bold">Users</h4>
                  <p className="text-2xl font-semibold">123</p>
                </div>
                <div className="col-span-12 rounded-lg bg-btn p-4 text-white sm:col-span-6 lg:col-span-4">
                  <h4 className="text-lg font-bold">Posts</h4>
                  <p className="text-2xl font-semibold">456</p>
                </div>
                <div className="col-span-12 rounded-lg bg-btn p-4 text-white sm:col-span-6 lg:col-span-4">
                  <h4 className="text-lg font-bold">Comments</h4>
                  <p className="text-2xl font-semibold">789</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "users" && (
            <div className="col-span-12">
              <h3 className="text-lg font-medium text-btn dark:text-white">
                User Management
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Manage your platform users here.
              </p>

              {/* User List */}
              <div className="mt-6 rounded-lg border p-4 dark:border-gray-700">
                <table className="w-full table-auto border-collapse text-btn dark:text-white">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border px-4 py-2">Name</th>
                      <th className="border px-4 py-2">Email</th>
                      <th className="border px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">John Doe</td>
                      <td className="border px-4 py-2">john@example.com</td>
                      <td className="border px-4 py-2">
                        <button className="rounded bg-btn px-2 py-1 text-white hover:bg-white hover:text-btn">
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === "contact" && (
            <div className="col-span-12">
              <h3 className="text-lg font-medium text-btn dark:text-white">
                Contact Messages
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                All contact messages here
              </p>
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
                        <td className="border px-4 py-2">{blog?.title}</td>
                        <td className="border px-4 py-2">
                          {" "}
                          {formatDateTime(blog?.pubshied)}
                        </td>
                        <td className="border px-4 py-2">
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
        </section>
      </div>
    </div>
  );
}
