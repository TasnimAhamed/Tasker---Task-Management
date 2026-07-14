import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

function TaskBoard() {
    const defaultTask = {
        id: crypto.randomUUID(),
        title: "Learn React Native",
        description: "Learn React Native by doing a project",
        tags: ["react", "js", "html", "css"],
        priority: "High",
        isFavorite: false
    }
    const [tasks, setTask] = useState([defaultTask]);
    const [openModal, setOpenModal] = useState(false);

    return (
        <section className="mb-20 w-full">
            <div className="container px-4 md:px-8 lg:px-12">
                <div className="flex mb-4 justify-end">
                    <SearchTask />
                </div>

                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskActions />
                    <TaskList tasks={tasks} />
                </div>
            </div>
        </section>
    );
}


export default TaskBoard;