
export default function Card({ color, text, description, icon }: { icon?: any, description: string, color: string, text: string }) {


    return (
        <div className={`h-max ${color} flex text-wrap flex-col px-8 py-5 border-[#3b544a] border-2 rounded-lg `}>
            <div className="size-10 text-white mb-3">
                {icon}
            </div>
            <h1 className="text-white font-semibold">{text}</h1>
            <h4 className="text-white font">{description}</h4>
        </div>
    )
}
