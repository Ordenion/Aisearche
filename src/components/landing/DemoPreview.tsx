const DemoPreview = () => {
  return (
    <div className="relative">
      {/* Main video placeholder */}
      <div className="bg-surface rounded-2xl border border-border shadow-card overflow-hidden">
        {/* Video aspect ratio container */}
        <div className="relative aspect-video bg-gradient-to-br from-surface-alt to-border flex items-center justify-center">
          {/* Fake UI elements */}
          <div className="absolute inset-4 bg-surface/80 rounded-lg backdrop-blur-sm border border-border p-4">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-border rounded w-3/4"></div>
              <div className="h-4 bg-border rounded w-1/2"></div>
              <div className="h-20 bg-primary-soft/20 rounded mt-4 flex items-center justify-center">
                <span className="text-primary text-sm font-medium">Dashboard Preview</span>
              </div>
              <div className="flex gap-2">
                <div className="h-8 bg-primary rounded w-24"></div>
                <div className="h-8 bg-surface-alt rounded w-20"></div>
              </div>
            </div>
          </div>

          {/* Play button overlay */}
          <button className="absolute inset-0 flex items-center justify-center bg-black/5 hover:bg-black/10 transition-colors group">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-text-on-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </button>
        </div>

        {/* Caption under video */}
        <div className="p-4 bg-surface-alt border-t border-border">
          <p className="text-sm text-text text-center">
            <span className="font-medium text-text-heading">2 min demo:</span>{' '}
            See how teams save 10+ hours per week
          </p>
          <div className="flex justify-center gap-4 mt-2 text-xs text-text-muted">
            <span>✓ Workflow automation</span>
            <span>✓ Team collaboration</span>
            <span>✓ Integrations</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-primary-soft/30 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -z-10 -bottom-4 -left-4 w-48 h-48 bg-lilac/30 rounded-full blur-3xl opacity-50"></div>
    </div>
  );
};

export default DemoPreview;
