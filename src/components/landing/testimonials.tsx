import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Johnson",
    title: "Lifelong Learner",
    avatarId: "testimonial-avatar-1",
    quote:
      "TheAskt transformed how I approach learning. The structured paths and community support are unparalleled.",
  },
  {
    name: "Samantha Lee",
    title: "UX Designer",
    avatarId: "testimonial-avatar-2",
    quote:
      "A beautifully designed platform that makes learning feel natural and rewarding. It's a breath of fresh air.",
  },
  {
    name: "Michael Chen",
    title: "Software Engineer",
    avatarId: "testimonial-avatar-3",
    quote:
      "I've connected with so many knowledgeable people. It's like a digital mentorship program that fits my schedule.",
  },
];

function getAvatar(id: string) {
  return PlaceHolderImages.find((img) => img.id === id)!;
}

export function Testimonials() {
  return (
    <section id="testimonials" className="container py-20 md:py-32">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-headline sm:text-4xl text-primary">
          Loved by Learners Worldwide
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Don't just take our word for it. Here's what our community is saying
          about TheAskt.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {testimonials.map((testimonial) => {
          const avatar = getAvatar(testimonial.avatarId);
          return (
            <Card key={testimonial.name} className="flex flex-col bg-transparent border-border/80">
              <CardContent className="pt-6 flex-grow">
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </CardContent>
              <CardFooter className="mt-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={avatar.imageUrl}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      data-ai-hint={avatar.imageHint}
                    />
                    <AvatarFallback>
                      {testimonial.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
