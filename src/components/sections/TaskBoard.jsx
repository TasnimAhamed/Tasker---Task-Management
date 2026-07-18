import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import NoTasksFound from "./NoTaskFound";
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
    const [taskToEdit, setTaskToEdit] = useState(null);

    const handleAddTask = (newTask, isAdd) => {
        if (isAdd) {
            setTask([...tasks, newTask]);
        }
        else {
            const updatedTask = tasks.map((task) => task.id === newTask.id ? newTask : task);
            setTask(updatedTask);
        }
        setOpenModal(false);
    }

    const handleDeleteAll = () => {
        setTask([]);
    }

    const handleOpenModal = () => {
        setTaskToEdit(null);
        setOpenModal(true);
    }
    const handleCloseModal = () => {
        setTaskToEdit(null);
        setOpenModal(false);
    }

    const handleEditTask = (task) =>{
        setTaskToEdit(task);
        setOpenModal(true);
    }

    const handleDeleteTask = (deleteTaskID) =>{
        const updatedTask = tasks.filter((task)=> task.id !== deleteTaskID);
        setTask(updatedTask);
    }

    const handleFavoriteTask = (favoriteTaskID) =>{
        const updatedTask = tasks.map((task) => task.id === favoriteTaskID ? {...task, isFavorite: !task.isFavorite} : task);
        setTask(updatedTask);
    }

    const handleSearch = (searchTerm) => {
        const filteredTask = tasks.filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()) || task.description.toLowerCase().includes(searchTerm.toLowerCase()));
        setTask(filteredTask);
    }

    return (
        <section className="mb-20 w-full">
            {openModal && <AddTaskModal closeModal={handleCloseModal} onSave={handleAddTask} taskToEdit={taskToEdit}/>}
            <div className="container px-4 md:px-8 lg:px-12">
                <div className="flex mb-4 justify-end">
                    <SearchTask onSearch = {handleSearch}/>
                </div>

                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskActions onOpenModal={handleOpenModal} onDeleteAll={handleDeleteAll}/>
                    {tasks.length === 0 ? <NoTasksFound /> : <TaskList tasks={tasks} onEdit = {handleEditTask} onDelete={handleDeleteTask} onFavorite={handleFavoriteTask}/>}
                </div>
            </div>
        </section>
    );
}


export default TaskBoard;