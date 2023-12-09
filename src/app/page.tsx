import N033Logo from "@/components/N033Logo";

export default function Home() {
  const borderWidth = 8;
  const maxContainerWidth = 1920;
  const maxContainerHeight = 1080;

  const containerWidth = maxContainerWidth - (borderWidth * 2);
  const containerHeight = maxContainerHeight - (borderWidth * 2);

  return (
    <main
      className="flex items-center justify-center w-[1920px] h-[1080px]
        bg-gradient-to-r 
        from-blue-400 
        to-orange-500 
        via-purple-500
        animate-gradient-x
      "
    >
      <div className="flex bg-chromakey"
        style={{
          width: `${containerWidth}px`,
          height: `${containerHeight}px`,
        }}
      >
        <div className="">
          <N033Logo />
        </div>

      </div>
    </main>
  )
}
