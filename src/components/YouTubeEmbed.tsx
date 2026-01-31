interface YouTubeEmbedProps {
  videoId: string
  title?: string
}

export default function YouTubeEmbed({ videoId, title = 'YouTube Video' }: YouTubeEmbedProps) {
  return (
    <div className="group relative">
      {/* Gradient border effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan to-green rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-300" />

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  )
}
