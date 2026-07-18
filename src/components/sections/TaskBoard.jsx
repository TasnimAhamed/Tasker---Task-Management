import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import NoTasksFound from "./NoTaskFound";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

function TaskBoard() {
    const defaultTasks = [
        {
            id: crypto.randomUUID(),
            title: "Build a React Task Manager",
            description:
            "Create a responsive task management application using React. Implement CRUD operations, filtering by priority, search functionality, and local storage for data persistence.",
            tags: ["react", "javascript", "frontend", "localStorage"],
            priority: "High",
            isFavorite: true,
        },
        {
            id: crypto.randomUUID(),
            title: "Practice Data Structures",
            description:
            "Solve at least 5 problems on arrays, linked lists, stacks, and queues from LeetCode or Codeforces. Focus on improving problem-solving speed and understanding time complexity.",
            tags: ["dsa", "algorithms", "leetcode", "cpp"],
            priority: "Medium",
            isFavorite: false,
        },
        {
            id: crypto.randomUUID(),
            title: "Design REST API with Node.js",
            description:
            "Build a RESTful API using Express.js and MongoDB. Implement authentication with JWT, input validation, error handling, and CRUD endpoints for user management.",
            tags: ["nodejs", "express", "mongodb", "backend"],
            priority: "High",
            isFavorite: false,
        },
        {
            id: crypto.randomUUID(),
            title: "Read Clean Code",
            description:
            "Read Chapters 1–3 of 'Clean Code' by Robert C. Martin and summarize the key principles. Refactor an existing project by applying meaningful naming conventions and clean coding practices.",
            tags: ["clean-code", "software-engineering", "book", "best-practices"],
            priority: "Low",
            isFavorite: false,
        },
    ];
    const [tasks, setTask] = useState(defaultTasks);
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