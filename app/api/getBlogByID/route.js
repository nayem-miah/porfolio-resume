import { blogModel } from "@/models/blog-model";
const { dbConnect } = require("@/databaseConncet/mongo");
const { NextResponse } = require("next/server");

export const GET = async (id) => {
  await dbConnect();
  try {
    const blog = blogModel.findById(id);
    return new NextResponse(JSON.stringify(blog), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new NextResponse(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

