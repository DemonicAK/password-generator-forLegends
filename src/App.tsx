import PasswordGenerator from "./components/PasswordGenerator";
import { PasswordFunFact } from "./components/PasswordFunFact";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 rax" >
      <div className="w-full max-w-md">
        <PasswordGenerator />
        <div className="mt-6">
          <PasswordFunFact />
        </div>
      </div>
    </div>
  );
}

export default App;
