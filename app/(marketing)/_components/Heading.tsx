import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Heading = () => {
    return (
        <div className="sm:mt-4 space-y-6 font-helvatica">
            <h1 className="max-w-4xl text-5xl sm:text-6xl font-bold break-words">
            Write, Plan, Remember, Succeed
            </h1>
            <h3 className="max-w-lg text-xl mx-auto font-medium">Organize notes, manage tasks, and handle data effortlessly.
            </h3>
            <Button size={"default"}>
                Enter Notably<ArrowRightIcon className="ml-2" />
            </Button>
        </div>
    )
}

export default Heading;