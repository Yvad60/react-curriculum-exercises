import CenterContent from "./CenterContent";

const Header = () => {
  return (
    <header className="bg-[#F55A5A]">
      <CenterContent>
        <div className="text-white flex justify-center items-center py-4 gap-2">
          <i className="bi bi-globe-europe-africa text-2xl"></i>
          <h3 className="leading-4 text-sm font-medium -tracking-wider">
            My travel journal.
          </h3>
        </div>
      </CenterContent>
    </header>
  );
};

export default Header;
