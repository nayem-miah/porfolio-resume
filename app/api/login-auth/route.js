// import { signIn } from "@/auth";

// const { dbConnect } = require("@/databaseConncet/mongo");
// const { NextResponse } = require("next/server")

// export const POST = async (request) => {
//   await dbConnect();
//   const loginData = await request.json();

//   try {
//     await signIn("credentials", {
//       email: loginData?.email,
//       password: loginData?.password,
//       redirect: false,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };





import { signIn } from "@/auth";
import { dbConnect } from "@/databaseConncet/mongo";
import { NextResponse } from "next/server";

export async function POST(request) {
  // Connect to the database
  await dbConnect();

  try {
    // Parse request body
    const loginData = await request.json();

    // Validate the request payload
    if (!loginData?.email || !loginData?.password) {
      return NextResponse.json(
        { message: "Email and password are required." },
        { status: 400 }
      );
    }

    console.log('data...............',loginData?.email, loginData?.password);

    // Perform authentication
    const result = await signIn("credentials", {
      email: loginData.email,
      password: loginData.password,
      redirect: false,
    });

    if (result?.error) {
      // Respond with an error if authentication fails
      return NextResponse.json(
        { message: result.error || "Invalid credentials." },
        { status: 401 }
      );
    }

    // Successful login response
    return NextResponse.json(
      {
        message: "Login successful",
        user: result.user, // Provide authenticated user data
      },
      { status: 200 }
    );
  } catch (err) {
    // Log the error for debugging
    console.error("Error in login API:", err);

    // Handle unexpected server errors
    return NextResponse.json(
      {
        message: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}
