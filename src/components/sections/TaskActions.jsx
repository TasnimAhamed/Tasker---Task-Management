import Button from "../ui/Button";

function TaskActions() {
    return (
        <div className="mb-8 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
                <Button variant="primary">
                    Add Task
                </Button>
                <Button variant="danger">
                    Delete All
                </Button>
            </div>
        </div>
    );
}

export default TaskActions;