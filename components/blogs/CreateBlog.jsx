"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CreatingButton from "./CreatingButton";
import JoditRich from "./JoditRichEdit";




export default function CreateBlog({ isUpdate, id }) {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [content, setContent] = useState(""); //declare using state
  const [blog, setBlog] = useState({
    title: "",
    category: "",
    description: "",
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
    const { title, category } = data;

    try {
      const imageUrl = await handleImageUpload(image);

      const response = await fetch("/api/createBlog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          category,
          description:content,
          image: imageUrl,
        }),
      });

      if (response.status === 201) {
        setMessage("Blog was created successfully!");
        resetForm();
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
      
        }),
      });

      if (response.status === 201) {
        setMessage("Blog was updated successfully!");
        resetForm();
      } else {
        setMessage("Failed to update the blog. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const resetForm = () => {
    setImage(null);
  
    setBlog({
      title: "",
      category: "",
      description: "",
    });
  };

  useEffect(() => {
    if (isUpdate && id) {
      const fetchFun = async () => {
        try {
          const response = await fetch(`/api/get-blog-by-id?id=${id}`, {
            cache: "no-store",
            headers: {
              Accept: "application/json",
            },
          });
          if (!response.ok) throw new Error("Failed to fetch blog data");
          const data = await response.json();
          setBlog(data);
        } catch (error) {
          console.error("Error fetching blog data:", error);
          setMessage("Error fetching blog data. Please try again later.");
        }
      };

      fetchFun();
    }
  }, [isUpdate, id]);

  useEffect(() => {
    return () => {
      if (image) URL.revokeObjectURL(image);
    
    };
  }, [image]);

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
            value={blog?.title || ""}
            placeholder="Blog Title"
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
          <input
            className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
            type="text"
            name="category"
            value={blog?.category || ""}
            placeholder="Category"
            onChange={(e) =>
              setBlog({
                ...blog,
                category: e.target.value,
              })
            }
          />
          {/* <textarea
            className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
            name="description"
            rows="6"
            placeholder="Blog Description"
            value={blog?.description || ""}
            required
            onChange={(e) =>
              setBlog({
                ...blog,
                description: e.target.value,
              })
            }
          ></textarea> */}


          <JoditRich setContent={setContent} content={content}/>

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

        </div>
        <CreatingButton />
        {message && <p className="mt-4 text-center text-theme">{message}</p>}
      </form>

 
    </>
  );
}




