
import { Billboard as BillboardType } from "@/type";

interface BillboardProps {
    data:BillboardType
}

const Billboard:React.FC<BillboardProps> =({data})=>{
    return (
        <div className="p-14 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <div 
            style={{backgroundImage:`url(${data?.imageUrl})`}}
            className="rounded-xl relative aspect-auto md:aspect-auto overflow-hidden bg-cover ">
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billboard