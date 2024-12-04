import { blogModel } from "@/models/blog-model";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const {
    _id,
    title,
    image,
    overviewImage,
    description,
    conclusion,
    category,
  } = await request.json();

  try {
    await blogModel.findByIdAndUpdate(
      _id,
      {
        title,
        image,
        description,
        overviewImage,
        conclusion,
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
