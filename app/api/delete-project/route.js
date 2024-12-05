
import { dbConnect } from "@/databaseConncet/mongo"; 
import { NextResponse } from "next/server";
import { projectstModel } from "@/models/projects-model";

export const DELETE = async (request) => { 
  await dbConnect();

  // Extract the ID from query parameters
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

 
  if (!id) {
    return new NextResponse("ID parameter is missing", {
      status: 400, // Bad Request
    });
  }

  try {
    const result = await projectstModel.findByIdAndDelete(id);

    if (!result) {
      return new NextResponse("Project not found", {
        status: 404, // Not Found
      });
    }

    return new NextResponse("Project was deleted!", {
      status: 200, 
    });
  } catch (error) {3
    console.error("Error deleting project:", error);
    return new NextResponse("Internal Server Error", {
      status: 500, // Internal Server Error
    });
  }
};
