import Play from "./play";

export default function Page() {
    return (
        <>
            <div className="text-4xl font-semibold py-4">Your Football Plays</div>

            <div className="flex flex-col gap-2">
                {["Smash", "Flood", "Mesh", "Hoss", "Crossers", "Scissors", "Run-pass Option", "Inside Run", "Outside Run"].map(play => <Play x={play} />)}  
            </div>
        </>
    )
}