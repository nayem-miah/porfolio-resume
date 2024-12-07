import LoginForm from "@/components/auth/LogingForm";

export default function page() {
  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl text-center uppercase font-medium mb-1">Admin Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}
