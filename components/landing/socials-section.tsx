import { Github, Twitter, Youtube, Send, MessageSquare } from "lucide-react";

const socialLinks = [
  { name: "Discord", icon: MessageSquare, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Reddit", icon: MessageSquare, href: "#" }, // Using general icons, will provide true svgs
  { name: "GitHub", icon: Github, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Telegram", icon: Send, href: "#" },
];

export function SocialsSection() {
  return (
    <section className="relative pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="flex items-center justify-center gap-2 px-6 h-12 rounded-full border border-foreground/20 bg-background/50 backdrop-blur-md transition-all hover:bg-foreground/5 hover:border-foreground/30 text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
            </svg>
            Discord
          </a>
          <a href="#" className="flex items-center justify-center gap-2 px-6 h-12 rounded-full border border-foreground/20 bg-background/50 backdrop-blur-md transition-all hover:bg-foreground/5 hover:border-foreground/30 text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Twitter
          </a>
          <a href="#" className="flex items-center justify-center gap-2 px-6 h-12 rounded-full border border-foreground/20 bg-background/50 backdrop-blur-md transition-all hover:bg-foreground/5 hover:border-foreground/30 text-sm font-medium">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 11.5c0-.4.3-.7.7-.7.24 0 .47.12.6.3C2.56 11.75 2.3 12 2.3 12.3c-.02-.26-.06-.52-.1-.8zM8 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm7.1 1.5c-1.3.84-3.26.86-3.32.86-.06 0-2.02-.02-3.32-.86-.27-.17-.34-.53-.16-.8.17-.27.53-.35.8-.18 1 .64 2.25.65 2.68.65.43 0 1.68-.02 2.68-.65.27-.18.63-.1.8.18.17.27.1.63-.16.8zM16 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
            Reddit
          </a>
          <a href="#" className="flex items-center justify-center gap-2 px-6 h-12 rounded-full border border-foreground/20 bg-background/50 backdrop-blur-md transition-all hover:bg-foreground/5 hover:border-foreground/30 text-sm font-medium">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.393.1 2.646.64.698 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            GitHub
          </a>
          <a href="#" className="flex items-center justify-center gap-2 px-6 h-12 rounded-full border border-foreground/20 bg-background/50 backdrop-blur-md transition-all hover:bg-foreground/5 hover:border-foreground/30 text-sm font-medium">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            YouTube
          </a>
          <a href="#" className="flex items-center justify-center gap-2 px-6 h-12 rounded-full border border-foreground/20 bg-background/50 backdrop-blur-md transition-all hover:bg-foreground/5 hover:border-foreground/30 text-sm font-medium">
            <Send className="w-4 h-4" />
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
