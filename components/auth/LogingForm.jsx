"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setErr(""); // Clear previous errors
    setLoading(true); // Show loading state

    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");

      // API call to login endpoint
      const response = await fetch("/api/login-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('response............................',response)

      if (response.ok) {
        // Redirect to home or dashboard after successful login
        console.log('logged in .........................................')
        router.push('/admin/deshboard');
      } else {
        // Handle server-side errors
        setErr(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      // Handle client-side errors
      setErr("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      {err && <div className="text-sm text-red-500">{err}</div>}
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="space-y-2">
          <div>
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              Admin Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="youremail.@domain.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-600 mb-2 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="*******"
            />
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            disabled={loading}
            className={`block w-full py-2 text-center text-white bg-primary border border-primary rounded ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-transparent hover:text-primary transition"
            } uppercase font-roboto font-medium`}
          >
            {loading ? "Logging in..." : "Login Admin"}
          </button>
        </div>
      </form>
    </>
  );
}
