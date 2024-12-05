
import { dbConnect } from "@/databaseConncet/mongo"; 
import { NextResponse } from "next/server";
import { blogModel } from "@/models/blog-model";

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
    const result = await blogModel.findByIdAndDelete(id);

    if (!result) {
      return new NextResponse("Blog not found", {
        status: 404, // Not Found
      });
    }

    return new NextResponse("Blog was deleted!", {
      status: 200, 
    });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return new NextResponse("Internal Server Error", {
      status: 500, // Internal Server Error
    });
  }
};
