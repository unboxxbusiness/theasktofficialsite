import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Sprout, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Sprout className="w-8 h-8 text-primary" />,
    title: "Guided Learning Paths",
    description:
      "Follow curated paths designed by experts to master new skills from the ground up.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Collaborative Gardens",
    description:
      "Join communities of learners, share insights, and grow together in a supportive environment.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Personalized Growth Tracking",
    description:
      "Visualize your progress, set goals, and see how far you've come on your learning journey.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="container space-y-12 bg-muted/30 py-20 md:py-32 rounded-3xl"
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-headline sm:text-4xl text-primary">
          Everything you need to grow
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Our platform is packed with features designed to make your learning
          experience seamless and engaging.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <CardHeader>
              <div className="bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <CardTitle className="font-headline text-2xl text-primary">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
