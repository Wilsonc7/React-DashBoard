import { ContentRowItem } from "./ContentRowItem"

export const ContentRowMovies = () => {

const items=[ /* creamos un array de objetos los cuales seran las props a aplicar */
        {
id:crypto.randomUUID(),            
color:'primary',
title:'Movies in Data Base',
value:21,
icon:'fa-film'
},
{
id:crypto.randomUUID(), 
color:'success',
title:'Total awards',
value:79,
icon:'fa-award'
},
{
id:crypto.randomUUID(),     
color:'warning',
title:'Actors quantity',
value:49,
icon:'fa-user'
 }
    ]
  return (
    <div className="row">
        {
        items.map(({id,color,title,value,icon})=>(<ContentRowItem key={id} title={title} value={value} color={color} icon={icon}/>))
        } {/* iteramos con .map para cada uno de los elementos q tiene el arreglo y se le aplica el key para darle 
        a cada uno un valor que sera el id atraves de uuid y se los pasa de a uno para poder pasarle a cada uno el prop type */}
</div>
  )
}
