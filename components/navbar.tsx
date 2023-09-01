import Container from "@/components/ui/container"
import Link from "next/link"
import MainNav from "@/components//main-nav"
import getCategories from "@/actions/get-categories";


const Navbar=async()=>{

    const categories = await getCategories()
    
    console.log(categories);
    
    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 items-center h-16 flex">                   
                    <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">STORE</p>
                    </Link>
                    <MainNav data={categories}/>
                </div>
            </Container>
        </div>
    )
    }
    
    export default Navbar