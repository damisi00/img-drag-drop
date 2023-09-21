// import { useState } from "react"
import { DndContext, closestCenter } from "@dnd-kit/core"
import Image from "./Image"
import Search from "./Search"
import images from "./data"
import { SortableContext, rectSwappingStrategy, useSortable } from "@dnd-kit/sortable"


const SortImage = ({image}) => {
  const {attributes, listeners, setNodeRef, transform, transition} =useSortable({ id: image.id });
  return <Image key={image.id} image={image} />
}

const Gallery = () => {

  
    const onDragEnd = (e) => {
      console.log('onDragEnd', e);
    }
  
  return (
    <>
          <Search  /> 
        
          <section className="img-container" >
          
          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={images} strategy={rectSwappingStrategy}>
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