import NavBar from "../components/NavBar";
import MiddleComponent from "../components/MiddleComponent";

export default function Root() {
  return (
    <>
      <div className="flex w-full">
        <NavBar />
        <MiddleComponent />
      </div>
    </>
  );
}
