import { projectstModel } from "@/models/projects-model";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const {
    id,
    title,
    category,
    description,
    conclusion,
    link,
    client,
    image,
    overviewImage,
  } = await request.json();

  try {
    await projectstModel.findByIdAndUpdate(
      id,
      {
        title,
        image,
        description,
        overviewImage,
        conclusion,
        category,
        link,
        client,
      },
      { new: true }
    );

    return new NextResponse("Project has been updated", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
