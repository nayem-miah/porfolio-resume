// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// const PUBLIC_ROUTES = [
//   "/",
//   "/admin",
//   "/about",
//   "/blog",
//   "/my-projects",
//   "/contact",
//   "/api/getBlogs",
//   "/api/getContact",
//   "/api/getProject",
// ];
// const PRIVATE_ROUTES = [
//   "/admin/deshboard",
//   "/admin/create-blog",
//   "/admin/create-project",
//   "/admin/update-project",
//   "/admin/update-blog",
//   "/api/createProject",
//   "/api/createBlog",
//   "/api/delete-blog",
//   "/api/delete-contact",
//   "/api/delete-project",
//   "/api/delete-project",
//   "/api/update-project",
//   "/api/update-blog",
// ]; // Define private routes

// export async function middleware(req) {
//   const { pathname } = req.nextUrl;


//   console.log('pathname...................................................',pathname)

//   // Check if the route is public
//   const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
//   if (isPublicRoute) {
//     console.log(`Public route accessed: ${pathname}`);
//     return NextResponse.next();
//   }

//   // Check if the route is private
//   const isPrivateRoute = PRIVATE_ROUTES.some((route) =>
//     pathname.startsWith(route)
//   );

//   if (isPrivateRoute) {
//     // Validate token for private routes
//     try {
//       const token = await getToken({ req, secret: process.env.AUTH_SECRET });

//       if (token) {
//         console.log(`Authenticated access to private route: ${pathname}`);
//         return NextResponse.next();
//       }
//     } catch (error) {
//       console.error("Error validating token:", error);
//     }

//     console.log(`Unauthenticated access attempt to private route: ${pathname}`);
//     const adminUrl = new URL("/admin", req.url);
//     return NextResponse.redirect(adminUrl);
//   }

//   // If the route is not public or private, let Next.js handle 404
//   console.log(`Unknown route accessed: ${pathname}`);
//   return NextResponse.next(); // Next.js will handle the 404
// }

// export const config = {
//   matcher: ["/((?!_next|favicon.ico|.*\\.[\\w]+$).*)"], // Match all routes except static files
// };
