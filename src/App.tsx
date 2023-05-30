import { Button } from "./components/Button";

const App: React.FC = () => {
  const handleClick = (buttonNumber: number): void => {
    alert(`You clicked on button ${buttonNumber}`);
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex gap-6">
        {[1, 2, 3].map((number) => (
          <Button onClick={() => handleClick(number)} key={number}>
            Button {number}
          </Button>
        ))}
      </div>
    </main>
  );
};

export default App;
