import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/components/ui/tooltip";
import { Cross } from "lucide-react";
import Link from "next/link";
import { Button } from "@repo/ui/components/ui/button";

export function BackButton({ url }: { url: string }) {
  return (
    <div className="flex items-center justify-end">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              asChild
              size="icon"
              variant="destructive"
              className="rounded-full p-5 bg-red-600 flex items-center justify-center"
            >
              <Link href={url}>
                <Cross className="rotate-45" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>ESC</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
