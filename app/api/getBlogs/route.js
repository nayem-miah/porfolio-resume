import { blogModel } from "@/models/blog-model";
const { dbConnect } = require("@/databaseConncet/mongo");
const { NextResponse } = require("next/server");

export const GET = async () => {
  await dbConnect();
  try {
    const blogs = await blogModel.find();
    return new NextResponse(JSON.stringify(blogs), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new NextResponse(
      JSON.stringify({ error: e.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
