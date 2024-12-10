"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CreatingButton from "../blogs/CreatingButton";

export default function CreateProject({ isUpdate, id }) {
  const [image, setImage] = useState(null);
  const [overviewImage, setOverviewImage] = useState(null);
  const [techValue, setTechValue] = useState("");

  const [message, setMessage] = useState("");
  const [project, setProject] = useState({
    title: "",
    category: "",
    description: "",
    conclusion: "",
    liveLink: "",
    client: "",
    technologies: [],
  });

  const addtech = () => {
    if (techValue.trim()) {
      setProject({
        ...project,
        technologies: [...project.technologies, techValue],
      });
      setTechValue("");
    }
  };

  const removeTech = (indexToRemove) => {
    setProject({
      ...project,
      technologies: project.technologies.filter((_, index) => index !== indexToRemove),
    });
  };
  

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
    const { title, category, description, conclusion, liveLink, client } = data;

    try {
      const imageUrl = image ? await handleImageUpload(image) : project?.image;
      const overviewImageUrl = overviewImage
        ? await handleImageUpload(overviewImage)
        : project?.overviewImage;

      const url = isUpdate ? "/api/update-project" : "/api/createProject";
      const method = isUpdate ? "POST" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          title,
          category,
          description,
          conclusion,
          link: liveLink,
          client,
          image: imageUrl,
          overviewImage: overviewImageUrl,
          technologies: project.technologies, // Include technologies array
        }),
      });

      if (response.ok) {
        setMessage(
          isUpdate
            ? "Project was updated successfully!"
            : "Project was created successfully!"
        );
        resetForm();
      } else {
        setMessage("Failed to submit the project. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const resetForm = () => {
    setImage(null);
    setOverviewImage(null);
    setProject({
      title: "",
      category: "",
      description: "",
      conclusion: "",
      liveLink: "",
      client: "",
      technologies: [],
    });
  };

  useEffect(() => {
    if (isUpdate && id) {
      const fetchProject = async () => {
        try {
          const response = await fetch(`/api/get-project-by-id?id=${id}`, {
            cache: "no-store",
            headers: {
              Accept: "application/json",
            },
          });
          if (!response.ok) throw new Error("Failed to fetch project data");
          const data = await response.json();
          setProject(data);
        } catch (error) {
          console.error("Error fetching project data:", error);
          setMessage("Error fetching project data. Please try again later.");
        }
      };

      fetchProject();
    }
  }, [isUpdate, id]);

  useEffect(() => {
    return () => {
      if (image) URL.revokeObjectURL(image);
      if (overviewImage) URL.revokeObjectURL(overviewImage);
    };
  }, [image, overviewImage]);

  return (
    <>
      <form action={handleFormSubmit} className="mt-6">
        <div className="grid w-full gap-[20px]">
          <input
            required
            className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
            type="text"
            name="title"
            placeholder="Project Title"
            value={project?.title || ""}
            onChange={(e) => setProject({ ...project, title: e.target.value })}
          />
          <input
            className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
            type="text"
            name="category"
            placeholder="Category"
            value={project?.category || ""}
            onChange={(e) =>
              setProject({ ...project, category: e.target.value })
            }
          />





<input
  className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
  type="text"
  name="technologies"
  placeholder="Add Technology"
  value={techValue || ""}
  onChange={(e) => setTechValue(e.target.value)}
/>
<button
  type="button"
  onClick={addtech}
  className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
>
  Add Technology
</button>
<ul className="mt-2 list-disc pl-5">
  {project.technologies.map((tech, index) => (
    <li key={index} className="flex items-center justify-between">
      <span>{tech}</span>
      <button
        type="button"
        onClick={() => removeTech(index)}
        className="ml-4 text-red-500"
      >
        Remove
      </button>
    </li>
  ))}
</ul>













          <textarea
            className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
            name="description"
            rows="6"
            placeholder="Project Description"
            required
            value={project?.description || ""}
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
          ></textarea>
          <textarea
            className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
            name="conclusion"
            rows="4"
            placeholder="Conclusion (optional)"
            value={project?.conclusion || ""}
            onChange={(e) =>
              setProject({ ...project, conclusion: e.target.value })
            }
          ></textarea>

          <input
            className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
            type="text"
            name="liveLink"
            placeholder="Live Link"
            value={project?.liveLink || ""}
            onChange={(e) =>
              setProject({ ...project, liveLink: e.target.value })
            }
          />

          <input
            className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
            type="text"
            name="client"
            placeholder="Client"
            value={project?.client || ""}
            onChange={(e) => setProject({ ...project, client: e.target.value })}
          />

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
        <CreatingButton project={true} />
        {message && <p className="mt-4 text-center text-theme">{message}</p>}
      </form>
    </>
  );
}
