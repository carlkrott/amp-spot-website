import Header from "../components/Header";
import Footer from "../components/Footer";

export default function YouTubePage() {
  const videos = [
    {
      id: "preview-eq",
      title: "Amp Spot EQ - 7-Band Parametric Preview",
      description: "Get a sneak peek at our upcoming 7-band parametric EQ with analog-modeled circuits and spectrum visualization.",
      thumbnail: "🎚️",
      duration: "Coming Soon",
      status: "in-development",
    },
    {
      id: "preview-comp",
      title: "Amp Spot Comp - VU Meter Compressor",
      description: "Preview our analog-style compressor with real-time VU metering and variable compression curves.",
      thumbnail: "📊",
      duration: "Coming Soon",
      status: "in-development",
    },
    {
      id: "preview-analyzer",
      title: "Amp Spot Analyzer - Spectrum Analysis",
      description: "See our professional spectrum analyzer in action with real-time frequency visualization and spectral editing.",
      thumbnail: "📈",
      duration: "Coming Soon",
      status: "in-development",
    },
    {
      id: "preview-ms",
      title: "Amp Spot MS - Mid/Side Processing",
      description: "Explore the power of mid/side processing for width control, imaging, and creative mixing techniques.",
      thumbnail: "⚡",
      duration: "Coming Soon",
      status: "in-development",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF0000] to-[#CC0000] flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                <span className="text-[#FF0000]">YouTube</span> Channel
              </h1>
              <p className="text-gray-400">Tutorials, previews, and production tips</p>
            </div>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl">
            Watch plugin demos, production tutorials, mixing tips, and behind-the-scenes content on our YouTube channel.
          </p>
          <a
            href="https://youtube.com/@ampspot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 glass-button text-white font-medium px-6 py-3 rounded-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-2xl p-8 mb-12 border-2 border-dashed border-[rgba(255,140,0,0.3)]">
            <div className="text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-[rgba(255,140,0,0.2)] text-[#FF8C00] font-medium mb-4">
                🚧 Channel Launching Soon
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">Stay Tuned!</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our YouTube channel is coming soon with in-depth plugin tutorials, production tips,
                and exclusive previews of our upcoming VST plugins.
              </p>
            </div>
          </div>

          {/* Preview Videos */}
          <h2 className="text-2xl font-bold text-white mb-6">Upcoming Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="glass-card rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative">
                  <span className="text-6xl opacity-50">{video.thumbnail}</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-white text-xs font-medium">
                    {video.duration}
                  </span>
                  {video.status === 'in-development' && (
                    <span className="absolute top-2 left-2 px-2 py-1 rounded bg-[#FF8C00] text-white text-xs font-medium">
                      Coming Soon
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF8C00] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Notified When We Launch</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our channel to be the first to know when we publish new content
          </p>
          <a
            href="https://youtube.com/@ampspot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF0000] to-[#CC0000] hover:from-[#FF3333] hover:to-[#FF0000] text-white font-bold px-8 py-4 rounded-lg transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe to Amp Spot on YouTube
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
