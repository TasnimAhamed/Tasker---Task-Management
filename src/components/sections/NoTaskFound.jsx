import { FaInbox } from "react-icons/fa";

function NoTasksFound() {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
            <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-tr from-[#2A3142] to-[#1E2533] shadow-lg shadow-black/20 ring-1 ring-white/10">
                <div className="absolute -inset-1 rounded-full bg-linear-to-r from-blue-500/20 to-purple-500/20 blur-sm opacity-50"></div>
                <FaInbox className="h-10 w-10 text-blue-400/80 transition-transform duration-300 hover:scale-110" />
            </div>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">
                No Tasks Found
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
                Your task board is clear! Relax, or click <strong className="text-blue-400 font-semibold">"Add Task"</strong> above to start planning your next achievement.
            </p>
        </div>
    );
}

export default NoTasksFound;