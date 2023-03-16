import Button from "./Button";

export default function Landing() {
  return (
    <section className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-4xl font-semibold">Quizzical</h1>
      <p className="mt-4 mb-7 text-xl">Some description if needed</p>
      <Button>Start quiz</Button>
    </section>
  );
}
