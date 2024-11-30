const { dbConnect } = require("@/databaseConncet/mongo");
const { contactModel } = require("@/models/contact-model");
const { NextResponse } = require("next/server");

export const POST = async(request) => {
    await dbConnect();
    const contactData = await request.json();
    console.log('server.......',contactData)
    
    
    try {
        await contactModel.create(contactData)
        return new NextResponse("Message was sent!", {
          status: 201,
         
        });
      } catch (e) {
        return new NextResponse(e.message, {
          status: 500,
        });
      }
}