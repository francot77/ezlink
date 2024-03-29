
export default function Button({ color, text, tcolor, mobile }: { mobile?: boolean, color: string, text: string, tcolor: string }) {


    return (
        <div className={`w-min h-min p-2 px-4 m-4 rounded-lg ${mobile ? "hidden" : ""} sm:block ${color} ${tcolor} font-semibold text-nowrap`}>
            <button>{text}</button>
        </div>
    )
}
