import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/gitfolio" : "";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono selection:bg-fuchsia-500/30 selection:text-fuchsia-200 overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-fuchsia-900/20 to-transparent opacity-30" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-cyan-900/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:to-cyan-400 transition-all duration-300"
          >
          A developer with an SRE mindset
          </Link>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-cyan-700/80">
            <Link href="#work" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">PROJECTS</Link>
            <Link href="#philosophy" className="hover:text-fuchsia-400 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)] transition-all">ABOUT</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* Selected Work */}
        <section id="work" className="py-20 space-y-12">
          <div className="flex items-end justify-between border-b border-cyan-900/30 pb-4">
            <h2 className="text-2xl font-bold tracking-widest text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.6)]">
              // Self development projects
            </h2>
            <span className="text-xs font-mono text-cyan-700">Showcase of my recent studies</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <ProjectCard 
              title="KodeKloud - Senior DevOps Engineer"
              description="Used this marvelous website to update myself on current DevOps and SRE tooling by delivering hands on tasks. 
              Managed to solve more than 130 of those already, achieving more than 75000 points to gain the title"
              tags={["KUBERNETES", "DOCKER", "MLOPS", "DEVOPS", "AI", "AWS", "AZURE"]}
              color="cyan"
              href="https://engineer.kodekloud.com"
            />
            {/* Project 2 */}
            <ProjectCard 
              title="Built kubernetes cluster on two Raspberry Pis via kubeadm"
              description="I'm working on getting the CKA exam done to receive this certificate. During learning I decided to 
                create my own kubernetes cluster using kubeadm. This is the closest I could get at home with this hardware to the prod environments.
                the cluster consists of a Raspberry pi 5 serving as the control plane, and a Raspberry pi 4 as a worknode. I managed to deploy and test ollama and localai containers on it.
                I also deployed Graphana / Prometheus to be able to monitor the workloads and set up some alarms"
              tags={["KUBERNETES", "CKA", "GRAPHANA", "PROMETHEUS", "LOCALAI", "OLLAMA"]}
              color="fuchsia"
              href="https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/"
            />
            {/* Project 3 */}
            <ProjectCard 
              title="Studying EITCA/AI Artificial Intelligence Academy"
              description="I'm also learning about Artificial Intelligence in this academy to be up to date with what is coming. 
              This one is a long journey with lots of modules, but I keep crunching through it as its extremely useful."
              tags={["AI", "ML", "Tensorflow", "Pytorch", "GCP", "Deep Learning"]}
              color="purple"
              href="https://eitca.org/certification/eitca-ai-artificial-intelligence-academy/"
            />
          </div>
        </section>

        {/* Philosophy / Approach */}
        <section id="philosophy" className="py-20 grid md:grid-cols-12 gap-12 border-t border-cyan-900/30">
          <div className="md:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              {"// ABOUT_ME"}
            </h2>
            
            {/* Profile Image - Replace src with your image in /public */}
            <div className="relative w-full aspect-[3/4] border border-cyan-500/30 rounded-sm overflow-hidden bg-cyan-950/30 group">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,5,16,0.8)_100%)] z-10" />
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:100%_4px] z-20 pointer-events-none" />
              
              <Image 
                src={`${basePath}/profile.png`}
                alt="Profile"
                fill
                className="object-cover z-0 opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-8 text-cyan-100/80 leading-relaxed font-light text-justify">
            <p>
              I have a long journey behind me since I first started working as a System Administrator in 1999. My main drivers were always curiosity and the willingness to help by solving complex problems through deeply understanding them. This mindset and approach pushed me forward throughout the years and forged me under the hammers of incidents, night on-calls, tight deadlines, and complex projects on the anvil of the community of engineers I worked with
            </p>
            <p>
              These people and our interactions were also the fuel that kept me moving forward. I met many brilliant‑minded individuals—some incredibly helpful, and some I will always admire. I also love exploring how society and nature interact, as well as reading about the latest discoveries in physics, chemistry, biology, and new technological inventions.
            </p>
            <div className="p-6 bg-cyan-950/20 border border-cyan-500/20 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500" />
              <div className="grid grid-cols-2 gap-8 font-mono text-sm">
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">STACK_TRACE</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Python / TypeScript / Kotlin / Java</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> React / Next.js / Node.js / AWS</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Git / GitHub / VS Code</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">MINDSET</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Learning never ends, so enjoy the ride</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Respect the unexpected</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Roll back first, ask questions later</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
       {/*  <section id="contact" className="py-20 border-t border-cyan-900/30">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              WANT TO KNOW  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">MORE?</span>
            </h2>
            <p className="text-cyan-200/60 text-lg">
              Fork this template on GitHub and make it yours. Update the content, add your projects, and deploy to GitHub Pages in under 30 minutes.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a 
                href="https://github.com/ladykerr/gfbs3-portfolio-demo" 
                className="px-10 py-4 bg-fuchsia-600 text-white font-bold tracking-widest uppercase text-sm hover:bg-fuchsia-500 transition-all hover:shadow-[0_0_30px_rgba(232,121,249,0.6)] hover:scale-105 duration-300 clip-path-polygon"
              >             
              </a>
              <div className="flex items-center gap-8 pt-4">
                <SocialLink href="https://github.com" label="GITHUB" />
                <SocialLink href="https://linkedin.com" label="LINKEDIN" />
                <SocialLink href="https://twitter.com" label="TWITTER" />
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <footer className="py-8 text-center text-xs font-mono text-cyan-900/50 border-t border-cyan-900/20">
        <p>Made with ❤️ and my bare &#9995; </p>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, tags, color, href }: { title: string, description: string, tags: string[], color: "cyan" | "fuchsia" | "purple" | "yellow", href: string }) {
  // Valid color options for the card styling
  const validColors = ["cyan", "fuchsia", "purple", "yellow"] as const;
  
  // Runtime validation: default to "cyan" if an invalid color is provided
  const safeColor = validColors.includes(color) ? color : "cyan";

  const colorClasses = {
    cyan: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    fuchsia: "group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]",
    purple: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    yellow: "group-hover:border-yellow-500/50 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
  };

  const textColors = {
    cyan: "group-hover:text-cyan-400",
    fuchsia: "group-hover:text-fuchsia-400",
    purple: "group-hover:text-purple-400",
    yellow: "group-hover:text-yellow-400",
  };

  return (
    <Link href={href} className={`group block space-y-4 p-6 bg-[#0a0a1a] border border-cyan-900/30 transition-all duration-300 ${colorClasses[safeColor]}`} target='_blank'>
      <div className="flex justify-between items-start">
        <h3 className={`-xl ftextont-bold text-white tracking-wider transition-colors ${textColors[safeColor]}`}>
          {title}
        </h3>
        <ArrowUpRightIcon className={`w-5 h-5 text-cyan-700 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${textColors[safeColor]}`} />
      </div>
      <p className="text-sm text-cyan-100/60 leading-relaxed text-justify font-light border-l border-cyan-900/50 pl-4">
        {description}
      </p>
      <div className="flex gap-2 pt-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-cyan-700 bg-cyan-950/30 px-2 py-1 border border-cyan-900/30 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function SocialLink({ href, label }: { href: string, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-xs font-bold tracking-widest text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all"
    >
      {label}
    </a>
  );
}

// Simple Icons
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}
