import HeroSection from "../sections/Hero";
import TaskBoard from "../sections/TaskBoard";

function Main() {
    return (
        <main className="flex flex-col justify-center items-center">
            <HeroSection />
            <TaskBoard />
        </main>
    )
}
export default Main;