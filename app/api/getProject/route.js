import { dbConnect } from "@/databaseConncet/mongo";
import { getProjects } from "@/queries";
const { NextResponse } = require("next/server");

export const GET = async () => {
  await dbConnect();
  try {
    const projects = await getProjects.find().lean();

    return new NextResponse(JSON.stringify(projects), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new NextResponse(JSON.stringify(err), {
      headers: { "Content-Type": "application/json" },
    });
  }
};
