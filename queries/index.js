"use server";

import { dbConnect } from "@/databaseConncet/mongo";
import { blogModel } from "@/models/blog-model";
import { contactModel } from "@/models/contact-model";
import { projectstModel } from "@/models/projects-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

export async function getProjects() {
  await dbConnect();
  const projects = await projectstModel.find().lean();
  return replaceMongoIdInArray(projects);
}

export async function getProjectById(id) {
  await dbConnect();
  const project = await projectstModel.findById(id).lean();
  return replaceMongoIdInObject(project);
}

export async function getBlogs() {
  await dbConnect();
  const blogs = await blogModel.find().lean();
  return replaceMongoIdInArray(blogs);
}

export async function getBlogById(id) {
  await dbConnect();
  const blog = await blogModel.findById(id).lean();
  return replaceMongoIdInObject(blog);
}




export async function getContact() {
  await dbConnect();
  const contact = await contactModel.find().lean();
  return replaceMongoIdInArray(contact);
}


