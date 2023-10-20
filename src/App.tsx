import DesktopMultiForm from "./components/DesktopMultiForm";
import MobileMultiForm from "./components/MobileMultiForm";

const App = () => {
  return (
    <main className=" font-ubuntu">
      {/* mobile container */}
      <div className=" mobile:hidden">
        {" "}
        <MobileMultiForm />{" "}
      </div>
      {/* desktop container */}
      <div className="max-mobile:hidden">
        {" "}
        <DesktopMultiForm />{" "}
      </div>
    </main>
  );
};

export default App;
