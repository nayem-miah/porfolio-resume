import { dbConnect } from "@/databaseConncet/mongo";
import { NextResponse } from "next/server";
import { projectstModel } from "@/models/projects-model";

export const GET = async (request) => {
  await dbConnect();

  // Extract the ID from query parameters or URL
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  try {
    const project = await projectstModel.findById(id);

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    return NextResponse.json(project, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
};

