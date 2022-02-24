import { useState, useEffect } from "react";
import axios from "axios";

export const useBeersFetch = (type) =>{
    const [beers, setBeers] = useState([]);

    useEffect(() =>{
        fetchBeers()
    },[fetchBeers]);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function fetchBeers() {
        if(!localStorage.getItem("Caramalt")) {
            let caramalt = []; let extraPale = []; let munich  = []; let darkcrystal = [];
            let types = [caramalt,extraPale,munich,darkcrystal]
            let maltsT = ["Extra Pale","Caramalt","Munich","Dark Crystal"]
            const response = await axios.get('https://api.punkapi.com/v2/beers?page=2&per_page=80')
            
        for (let i = 0; i < response.data.length && maltsT.length>0 ; i++) {
            for (let j = 0; j < maltsT.length ; j++) {
                for (let k = 0; k < response.data[i].ingredients.malt.length; k++) {
                    
                    if(response.data[i].ingredients.malt[k].name === maltsT[j]) {
                        types[j].push(response.data[i]);
                    } 
                    if(types[j].length === 8){
                        console.log(maltsT,caramalt,extraPale,munich,darkcrystal);
                        maltsT.splice(j,1); types.splice(j,1)
                    }     
                }
            }
        }
        localStorage.setItem("Extra Pale",JSON.stringify(caramalt))
        localStorage.setItem("Caramalt",JSON.stringify(extraPale))
        localStorage.setItem("Munich",JSON.stringify(munich))
        localStorage.setItem("Dark Crystal",JSON.stringify(darkcrystal))
    }
    switch(type){
        case "Extra Pale":
            setBeers(JSON.parse(localStorage.getItem("Extra Pale"))); break;
        case "Caramalt":
            setBeers(JSON.parse(localStorage.getItem("Caramalt"))); break;
        case "Munich":
            setBeers(JSON.parse(localStorage.getItem("Munich"))); break;
        case "Dark Crystal":
            setBeers(JSON.parse(localStorage.getItem("Dark Crystal"))); break;
        default:
            setBeers(JSON.parse(localStorage.getItem("Extra Pale"))); break;
    }
    }
    return {useBeersFetch, beers}
} 

export default useBeersFetch

