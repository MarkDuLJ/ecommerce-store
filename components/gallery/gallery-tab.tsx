import { cn } from "@/lib/utils"
import { Image as ImageType} from "@/type"
import { Tab } from "@headlessui/react"
import NextImage from "next/image"

interface Props{
    image:ImageType
}

const GalleryTab: React.FC<Props> = ({
    image
  }) => {
    
    return ( 
      <Tab
      className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"  key={image.id}
    >
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <NextImage 
              fill 
              src={image.url} 
              alt="" 
              className="object-cover object-center" 
              sizes="100vw"
              priority
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent',
            )}
          />
        </div>
      )}
    </Tab>
      )
}

export default GalleryTab