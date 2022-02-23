import React from "react";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {useLocation} from 'react-router-dom';
import "./style.css"

const Beer = () => {
  const location = useLocation();
  const beer = location.state.name;
  let maltIngredients = []
  beer.ingredients.malt.forEach(maltIng => {
    maltIngredients.push(maltIng.name)
  });
  console.log(beer);
    return (
        <div>
            <div id="breadcrumbs">
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  home
                </Link>
                <Link underline="hover" color="inherit" href="/beers">
                  beers
                </Link>
                <Typography color="text.primary">{beer.id}</Typography>
              </Breadcrumbs>
         </div>
      <div id="grid">
        <div >
        <img src={`${beer.image_url}` } alt="" style={{width:200, height:500 }} />
        </div>
        <div>
        <b>name: </b>{beer.name}<br/>
        <b>Tagline: </b>{beer.tagline}<br/>
        <b>First Brewed: </b>{beer.first_brewed}<br/>
        <b>Description: </b>{beer.description}<br/>
        <b>Ingredients: </b>{maltIngredients.toString()}<br/>
        <b>Brewers Tips: </b>{beer.brewers_tips} <br/>
        </div>
      </div>
      </div>
    )
}
  export default Beer;