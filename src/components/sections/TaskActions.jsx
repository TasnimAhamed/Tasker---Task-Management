import PropTypes from "prop-types";
import Button from "../ui/Button";

function TaskActions({onOpenModal, onDeleteAll}) {
    return (
        <div className="mb-8 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
                <Button
                    variant="primary"
                    handleClick={onOpenModal}
                >
                    Add Task
                </Button>
                <Button 
                    variant="danger"
                    handleClick={onDeleteAll}
                >
                    Delete All
                </Button>
            </div>
        </div>
    );
}

TaskActions.propTypes = {
    onAddTask: PropTypes.func.isRequired,
    onDeleteAll: PropTypes.func.isRequired,
}

export default TaskActions;