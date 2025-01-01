import Main from "@/components/home/Main";
import Sidebar from "@/components/common/Sidebar";

export default async function Home() {
  return (
    <>
      <div>
        <Sidebar />
        <Main />
      </div>
    </>
  );
}
