import { blogModel } from "@/models/blog-model";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const {
    id,
    title,
    image,
    description,
    category,
  } = await request.json();
  try {
    await blogModel.findByIdAndUpdate(
      id,
      {
        title,
        image,
        description,
        category,
      },
      { new: true }
    );

    return new NextResponse("Blog has been updated", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
