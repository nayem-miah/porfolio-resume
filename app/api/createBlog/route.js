import { blogModel } from "@/models/blog-model";

const { dbConnect } = require("@/databaseConncet/mongo");

const { NextResponse } = require("next/server");

export const POST = async (request) => {
  await dbConnect();
  const blogData = await request.json();

  try {
    await blogModel.create(blogData);
    return new NextResponse("Blog was created!", {
      status: 201,
    });
  } catch (e) {
    return new NextResponse(e.message, {
      status: 500,
    });
  }
};
