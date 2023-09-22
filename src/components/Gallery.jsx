import { forwardRef as ref } from "react"
import { DndContext, closestCenter } from "@dnd-kit/core"
import Image from "./Image"
import Search from "./Search"
import images from "./data"
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import {CSS} from '@dnd-kit/utilities'


const SortImage = ({image, ref}) => {
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({ id: image.id });
  const style ={
    transition,
    transform: CSS.Transform.toString(transform),
  }
  return <Image key={image.id} image={image} style={style} ref={setNodeRef} {...attributes} {...listeners} />
}

const Gallery = () => {

  
    const onDragEnd = (event) => {
      console.log('onDragEnd', event);
      const {active, over } = e
      if(active.id === over.id) {
        return;
      }
      
    }
  
  return (
    <>
          <Search  /> 
        
          <section className="img-container" >
          
          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={images} strategy={verticalListSortingStrategy}>
            {images.map(image => (
             
                <SortImage key={image.id} image={image} />
               

            ))}
            </SortableContext>
            </DndContext>
          </section>
      
    </>
  )
}

export default Gallery