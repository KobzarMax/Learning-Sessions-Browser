import SessionsWrapper from "./components/Sessions/SessionsWrapper";

function App() {
  return (
    <div className="min-h-dvh bg-green-100 flex items-start justify-center p-5">
      <div className="mx-auto container space-y-4">
        <h1 className="font-bold text-green-900 text-4xl">Learning Sessions</h1>
        <SessionsWrapper />
      </div>
    </div>
  );
}

export default App;
