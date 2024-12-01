import { projectstModel } from "@/models/projects-model";



const { dbConnect } = require("@/databaseConncet/mongo");

const { NextResponse } = require("next/server");

export const POST = async (request) => {
  await dbConnect();
  const projectData = await request.json();

  try {
    await projectstModel.create(projectData);
    return new NextResponse("Project was created!", {
      status: 201,
    });
  } catch (e) {
    return new NextResponse(e.message, {
      status: 500,
    });
  }
};
