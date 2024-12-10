import { featuresAvailable } from "@/app/utlis/constants";
import { Separator } from "../separator";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";

export function Feature() {
  return (
    <div className="py-16 space-y-12 flex flex-col items-center">
      <div className="space-y-2">
        <h3 className="text-4xl font-bold title">
          Powerful Features for Your Workflow
        </h3>

        <p className="text-center text-lg font-medium text-slate-400">
          Everything you need to automate your work and boost productivity
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-4 md:px-6">
        {featuresAvailable.map((item) => (
          <Card
            key={item.title}
            className="bg-bgCard border border-slate-800 hover:border-slate-400 transition"
          >
            <CardHeader>
              <div className="border border-slate-700 p-2 w-fit rounded-md">
                <item.icon className="text-stone-300" />
              </div>

              <p className="text-slate-400 font-medium text-lg">{item.title}</p>
            </CardHeader>

            <CardContent>
              <CardDescription className="text-slate-400">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />
    </div>
  );
}
