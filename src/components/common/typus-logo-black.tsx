import { cn } from "@/lib/utils";

export default function TypusLogoBlack({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex items-center justify-center p-2.5", className)} {...props}>
            <div className="bg-black w-full h-full" />
        </div>
    );
}
