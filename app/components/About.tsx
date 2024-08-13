import { FaGoogleWallet } from "react-icons/fa6";
import { GiCurledLeaf } from "react-icons/gi";
import { Compass, Map } from "react-feather";

export default function About() {
  return (
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-muted to-muted-foreground/10 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2YxZjFmMSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIyIiBmaWxsPSIjMDAwMDAwIj48L2NpcmNsZT4KPGNpcmNsZSBjeD0iMzAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzAwMDAwMCI+PC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iMTAiIHI9IjIiIGZpbGw9IiMwMDAwMDAiPjwvY2lyY2xlPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIiBmaWxsPSIjMDAwMDAwIj48L2NpcmNsZT4KPGNpcmNsZSBjeD0iNDAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzAwMDAwMCI+PC9jaXJjbGU+CjxjaXJjbGUgY3g9IjEwIiBjeT0iMzAiIHI9IjIiIGZpbGw9IiMwMDAwMDAiPjwvY2lyY2xlPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjMDAwMDAwIj48L2NpcmNsZT4KPGNpcmNsZSBjeD0iNTAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iIzAwMDAwMCI+PC9jaXJjbGU+CjxjaXJjbGUgY3g9IjIwIiBjeT0iNDAiIHI9IjIiIGZpbGw9IiMwMDAwMDAiPjwvY2lyY2xlPgo8Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIyIiBmaWxsPSIjMDAwMDAwIj48L2NpcmNsZT4KPGNpcmNsZSBjeD0iMTAiIGN5PSI1MCIgcj0iMiIgZmlsbD0iIzAwMDAwMCI+PC9jaXJjbGU+CjxjaXJjbGUgY3g9IjMwIiBjeT0iNTAiIHI9IjIiIGZpbGw9IiMwMDAwMDAiPjwvY2lyY2xlPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyIiBmaWxsPSIjMDAwMDAwIj48L2NpcmNsZT4KPC9zdmc+')]"></div>

        <div className="container relative z-10 grid items-center justify-center gap-8 px-4 text-center md:px-6 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl">
              Discover the Hidden Gems
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
              Explore the best-kept secrets and off-the-beaten-path experiences with our local expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Map, title: "Local Expertise", color: "primary" },
              { icon: Compass, title: "Unique Experiences", color: "secondary" },
              { icon: GiCurledLeaf, title: "Sustainable Travel", color: "success" },
              { icon: FaGoogleWallet, title: "Affordable Luxury", color: "info" },
            ].map((item, index) => (
                <div key={index} className="group flex flex-col items-center justify-center gap-4 p-6 bg-background/50 backdrop-blur-sm rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className={`bg-${item.color} rounded-full p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-8 h-8 text-${item.color}-foreground`} />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {getDescription(item.title)}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}

function getDescription(title = "") {
  switch (title) {
    case "Local Expertise":
      return "Discover hidden gems and off-the-beaten-path experiences with the help of our local experts.";
    case "Unique Experiences":
      return "Immerse yourself in authentic, one-of-a-kind experiences that you won't find in typical tourist traps.";
    case "Sustainable Travel":
      return "Explore destinations with a focus on eco-friendly and responsible tourism practices.";
    case "Affordable Luxury":
      return "Experience high-end accommodations and activities at a fraction of the cost.";
    default:
      return "";
  }
}