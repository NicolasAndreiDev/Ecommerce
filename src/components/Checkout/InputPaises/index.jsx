import { useEffect, useState } from "react";
import axios from "axios";

const Paises = ({...props}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      const fetchCountries = async () => {
        const response = await axios.get('https://restcountries.com/v2/all');
        const countriesData = response.data;
        setCountries(countriesData);
      };
  
      fetchCountries();
    }, []);
    
    return(
        <select {...props}>
        <option></option>
        {countries.map(country => (
          <option key={country.alpha2Code} value={country.alpha2Code}>{country.name}</option>
        ))}
      </select>
    )
}

export default Paises