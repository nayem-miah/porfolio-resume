"use server";

import { dbConnect } from "@/databaseConncet/mongo";
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

