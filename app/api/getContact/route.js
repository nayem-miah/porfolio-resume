const { dbConnect } = require("@/databaseConncet/mongo");
const { contactModel } = require("@/models/contact-model");
const { NextResponse } = require("next/server");

export const GET = async () => {
  await dbConnect();
  try {
    const contacts = await contactModel.find();
    return new NextResponse(JSON.stringify(contacts), {
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
