// import { forwardRef as ref } from "react"
import { DndContext, closestCenter } from "@dnd-kit/core"
import Image from "./Image"
import Search from "./Search"
import data from "./data"
import { SortableContext, arrayMove, rectSortingStrategy, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import {CSS} from '@dnd-kit/utilities'
import { useState } from "react"


const SortableImage = ({image}) => {
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({ id: image.id });
  const style ={
    transition,
    transform: CSS.Transform.toString(transform),
  }
  return (
    <div className="box" style={style} ref={setNodeRef} {...attributes} {...listeners} >
            <img src={image.source} alt={image.description} />
            <button className={image.faction}> {image.faction}</button>
        </div>);
  // return (<Image  image={image} style={style} ref={setNodeRef} {...attributes} {...listeners} />);
}

const Gallery = () => {
  const [images, setImages] = useState(data);
  
    const onDragEnd = (event) => {
      console.log('onDragEnd', event);
      const {active, over } = event
      if(active.id === over.id) {
        return;
      }
      setImages((images) => {
        const oldIndex = images.findIndex(image => image.id === active.id);
        const newIndex = images.findIndex(image => image.id === over.id);
        return arrayMove(images, oldIndex, newIndex);
      });
      
    }
  
  return (
    <>
          <Search  /> 
          <h4 style={{color: 'darkgrey', textAlign: 'left', padding: '2rem 0'}}>Shuffle according to your favorite </h4>
          <section className="img-container" >

           
          
          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={images} strategy={ rectSortingStrategy }>
            {images.map(image => (
             
                <SortableImage key={image.id} image={image} />
               

            ))}
            </SortableContext>
            </DndContext>
          </section>
      
    </>
  )
}

export default Gallery