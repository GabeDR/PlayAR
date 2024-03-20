import Play from "./play";

export default function Page() {
    return (
        <>
            <div className="text-4xl font-semibold py-4">Your Plays</div>

            <div className="flex flex-col gap-2">
                {[1,2,3,4,5,6,7,8,9,10].map(x => <Play x={x} />)}  
            </div>
        </>
    )
}