import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import useBeersFetch from "../../hooks/useBeersFetch";
import { useNavigate } from 'react-router-dom';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${160}&h=${260}`,
    srcSet: `${image}?w=${160}&h=${
     260
    }`
  };
}




function BeerDisplay(props) {
  const navigate = useNavigate();
  function goToBeer(id,beer){
    navigate(`/beers/${id}`, {state:{id, name: beer}})
  }
  const { beers } = useBeersFetch(props.type);
  let itemData = [];
  
 

  for (const beer of beers) {
    itemData.push({img: beer.image_url, title: beer.id, data: beer})
  }

  return (
      <div>
    <ImageList
      sx={{ width: "40vw", height: "70vh" , }}
      variant="quilted"
      cols={4}
      rowHeight={260}
      
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={1} rows={1} style={{maxWidth : 66}}>
          <img
            {...srcset(item.img, 1, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            onClick={() => goToBeer(item.title, item.data)}
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

export default BeerDisplay