"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CreatingButton from "./CreatingButton";

export default function CreateBlog({ isUpdate, id }) {
  const [image, setImage] = useState(null);
  const [overviewImage, setOverviewImage] = useState(null);
  const [message, setMessage] = useState("");
  const [blog, setBlog] = useState({
    title: "",
    category: "",
    description: "",
    conclusion: "",
  });

  const handleImageChange = (e, setImageCallback) => {
    const file = e.target.files[0];
    if (file) {
      setImageCallback(file);
    }
  };

  const handleImageUpload = async (imageFile) => {
    if (!imageFile) return null;
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_imageBB_key}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await response.json();
      if (result.success) {
        return result.data.url;
      } else {
        console.error("Image upload failed:", result.error);
        return null;
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const handleFormSubmit = async (formData) => {
    const data = Object.fromEntries(formData);
    const { title, category, description, conclusion } = data;

    try {
      const imageUrl = await handleImageUpload(image);
      const overviewImageUrl = await handleImageUpload(overviewImage);

      const response = await fetch("/api/createBlog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          category,
          description,
          conclusion,
          image: imageUrl,
          overviewImage: overviewImageUrl,
        }),
      });

      if (response.status === 201) {
        setMessage("Blog was created successfully!");
        setImage(null);
        setOverviewImage(null);
      } else {
        setMessage("Failed to create the blog. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const handleUpdateForm = async (formData) => {
    const data = Object.fromEntries(formData);
    const { title, category, description, conclusion } = data;

    try {
      const imageUrl = image ? await handleImageUpload(image) : blog?.image;
      const overviewImageUrl = overviewImage
        ? await handleImageUpload(overviewImage)
        : blog?.overviewImage;

      const response = await fetch("/api/update-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          title,
          category,
          description,
          conclusion,
          image: imageUrl,
          overviewImage: overviewImageUrl,
        }),
      });

      if (response.status === 201) {
        setMessage("Blog was updated successfully!");
        setImage(null);
        setOverviewImage(null);
        setBlog({
          title: "",
          category: "",
          description: "",
          conclusion: "",
        })
      } else {
        setMessage("Failed to update the blog. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    const fetchFun = async () => {
      try {
        const response = await fetch(`/api/get-blog-by-id?id=${id}`, {
          cache: "no-store",
          headers: {
            Accept: "application/json",
          },
        });
        const data = await response.json();

        setBlog(data); // Set the resolved data to state
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchFun();
  }, [isUpdate, id]);

  return (
    <>
      <form
        action={isUpdate ? handleUpdateForm : handleFormSubmit}
        className="mt-6"
      >
        <div className="grid w-full gap-[20px]">
          <input
            required
            className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
            type="text"
            name="title"
            value={blog?.title}
            placeholder="Blog Title"
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
          <input
            className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
            type="text"
            name="category"
            value={blog?.category}
            placeholder="Category"
            onChange={(e) =>
              setBlog({
                ...blog,
                category: e.target.value,
              })
            }
          />
          <textarea
            className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
            name="description"
            rows="6"
            placeholder="Blog Description"
            value={blog?.description}
            required
            onChange={(e) =>
              setBlog({
                ...blog,
                description: e.target.value,
              })
            }
          ></textarea>
          <textarea
            className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
            name="conclusion"
            rows="4"
            value={blog?.conclusion}
            placeholder="Blog Conclusion (optional)"
            onChange={(e) =>
              setBlog({
                ...blog,
                conclusion: e.target.value,
              })
            }
          ></textarea>

          {/* File input and preview for image */}
          <div className="flex items-center space-x-4">
            <input
              type="file"
              accept="image/*"
              className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
              onChange={(e) => handleImageChange(e, setImage)}
            />
            {image && (
              <Image
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="h-16 w-16 rounded-md"
                width={64}
                height={64}
              />
            )}
          </div>

          {/* File input and preview for overview image */}
          <div className="flex items-center space-x-4">
            <input
              type="file"
              accept="image/*"
              className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
              onChange={(e) => handleImageChange(e, setOverviewImage)}
            />
            {overviewImage && (
              <Image
                src={URL.createObjectURL(overviewImage)}
                alt="Overview Preview"
                className="h-16 w-16 rounded-md"
                width={64}
                height={64}
              />
            )}
          </div>
        </div>
        <CreatingButton />
        {message && <p className="mt-4 text-center text-theme">{message}</p>}
      </form>
    </>
  );
}
