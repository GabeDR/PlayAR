export default function LiveView() {
    return (
        <>
            <div className="text-4xl font-semibold py-4">Live View</div>
            <iframe src="https://www.bloomberg.com"
      allowFullScreen className="rounded-xl h-screen w-full border border-gray-300" />
        </>
    )
}