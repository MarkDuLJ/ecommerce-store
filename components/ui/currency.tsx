"use client"

import { useEffect, useState } from "react"

const formatter = new Intl.NumberFormat("en-US",{
    style:"currency",
    currency:"USD"
})

interface Props{
    value?: string | number
}

const Currency: React.FC<Props> = ({value=0})=>{
    const [mount, setMount] = useState(false)

    useEffect(()=>{
        setMount(true)
    }, [])

    return(
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    )
}

export default Currency