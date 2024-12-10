import Link from "next/link";
import { Separator } from "../separator";
import { Button } from "../ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-12 py-52">
      <div className="w-full text-center mx-auto space-y-4">
        <h1 className="text-3xl md:text-6xl font-bold title tracking-normal leading-2 md:w-[70%] mx-auto">
          Simplify Your Workflows with Custom Automations
        </h1>

        <p className="text-base md:text-lg text-center font-semibold text-zinc-400 md:w-[70%] mx-auto">
          Create powerful automated workflows that connect your favorite apps
          and services. Save time and boost productivity with custom triggers
          and actions.
        </p>
      </div>

      <Link href="#">
        <Button>Get Started Now</Button>
      </Link>

      <div className="bg-zinc-900 rounded-md border-8 border-stone-600 shadow-lg h-[400px] w-[400px] xl:h-[600px] xl:w-[1200px]">
        <Image
          priority
          src="/image.png"
          alt="image"
          width={900}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      <Separator />
    </div>
  );
}
