
import { blogModel } from "@/models/blog-model";
import { dbConnect } from "@/databaseConncet/mongo";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  await dbConnect();

  // Extract the ID from query parameters or URL
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  try {
    const blog = await blogModel.findById(id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
};
