import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

function TaskList({ tasks, onEdit, onDelete, onFavorite }) {
    return (
        <div className="overflow-auto">
            <table className="table-fixed overflow-auto xl:w-full">
                <thead>
                    <tr>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-12"></th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                            Title
                        </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-75">
                            Description
                        </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-87.5">
                            Tags
                        </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-25">
                            Priority
                        </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-25">
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) =>(
                        <tr
                            key={task.id}
                            className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                            <td className="cursor-pointer">
                                <FaStar color={task.isFavorite ? "yellow" : "gray"} size={16} onClick={()=> onFavorite(task.id)} />
                            </td>
                            <td>{task.title}</td>
                            <td>
                                <div>{task.description}</div>
                            </td>
                            <td>
                                <ul className="flex justify-center gap-1.5 flex-wrap">
                                    {task.tags.map((tag, index) => (
                                        <li key={index}>
                                            <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                                                {tag}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td className="text-center">{task.priority}</td>
                            <td>
                                <div className="flex items-center justify-center space-x-3">
                                    <button
                                        className="text-red-500 cursor-pointer"
                                        onClick={()=> onDelete(task.id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="text-blue-500 cursor-pointer"
                                        onClick={() => onEdit(task)}
                                    >
                                        Edit
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        priority: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired,
    })).isRequired,
    onEdit: PropTypes.func.isRequired,
}

export default TaskList;