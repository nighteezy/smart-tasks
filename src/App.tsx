import { TaskList } from "./components/TaskList/TaskList";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />

      <main className="p-4">
        <TaskList />
      </main>
    </>
  );
}

export default App;
