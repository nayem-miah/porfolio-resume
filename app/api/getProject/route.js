import { dbConnect } from "@/databaseConncet/mongo";
const { NextResponse } = require("next/server");
import { projectstModel } from "@/models/projects-model";


export const GET = async () => {
  await dbConnect();
  try {
    const projects = await projectstModel.find();

    return new NextResponse(JSON.stringify(projects), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new NextResponse(JSON.stringify(err), {
      headers: { "Content-Type": "application/json" },
    });
  }
};

