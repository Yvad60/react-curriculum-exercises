import { Fragment } from "react";
import CenterContent from "./components/CenterContent";
import Header from "./components/Header";
import PlaceCard from "./components/PlaceCard";
import places from "./data";

const App = () => {
  return (
    <div className="App">
      <Header />
      <CenterContent>
        <div className="flex flex-col gap-[18px] mt-10">
          {places.map((place, index) => (
            <Fragment key={index}>
              <PlaceCard {...place} />
              {index < places.length - 1 && <hr />}
            </Fragment>
          ))}
        </div>
      </CenterContent>
    </div>
  );
};

export default App;
