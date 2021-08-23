import { useOppenedContext } from "./contexts/OppenedContext";

function App() {
  const { status } = useOppenedContext();
  console.log(status);
  
  return (
    <>
    {status ? (
      <h1>Nui OPEN</h1>
    ) : (
      null
    ) }
    </>
  );
}

export default App;
