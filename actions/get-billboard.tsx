import { Billboard } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard =async (id:string):Promise<Billboard> => {
    const result = await fetch(`${URL}/${id}`)
    return result.json()
}

export default getBillboard