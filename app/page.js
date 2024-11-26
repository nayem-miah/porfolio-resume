import Main from "@/components/home/Main";
import Sidebar from "@/components/common/Sidebar";

export default function Home() {
  return (
    <>
      <div className="dark">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}
