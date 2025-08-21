import { TaskList } from "./components/TaskList/TaskList";
import { Header } from "./components/Header/Header";
import { useIsModalOpen } from "./store/useModalStore";
import TaskModal from "./components/TaskModal/TaskModal";

function App() {
  const isOpen = useIsModalOpen();
  return (
    <>
      <Header />

      <main className="p-4">
        <TaskList />
        {isOpen && <TaskModal />}
      </main>
    </>
  );
}

export default App;
