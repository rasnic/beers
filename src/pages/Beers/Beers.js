import React from "react";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import BeerTab from '../../components/BeerTab/BeerTab';
import "./style.css";


const Beers = () => {

    return (
      <div>
        <div id="breadcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              home
            </Link>
            <Typography  color="text.primary">beers</Typography>
          </Breadcrumbs>
        </div>

        <div>
          <div id="pics-container">
           <BeerTab/>
          </div>
        </div>
      </div>
    )
}

export default Beers;