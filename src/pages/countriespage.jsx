import Navbar from "../components/navbar";
import axios from "axios";



export default function Countriespage() {
    const url = "https://restcountries.com/v3.1/all"
    console.log(url)

    // function displayCountries(){
    //     let allCountries = fetch(url).then((response) => {
    //         console.log('country', response.json())
    //     })
    // }

    // displayCountries()


    let countriesBox 

    async function displayAllCountries() {
        const countries = await axios.get(url)

        countriesBox = countries.data
        const slicedData = countriesBox.slice(0, 5)
        console.log('yeaaaaa', slicedData)

        let fiveItems = slicedData.map((item) => {
            console.log('five', item.name.common)
        })

        


        return countriesBox

        





        // let fiveItems = countriesBox.slice(0, 5).map((item) => {
        //     console.log('yeaaaa', item)
        // })

        // console.log('countries', countriesBox)
        // return countriesBox
        // const response = countries.json()
        // countriesBox.push(response)
        // return countriesBox

    }

    // console.log("countries", countriesBox)
    displayAllCountries()


    // function display5Countries() {
      
    //     let fiveItems = countriesBox.slice(0, 4)
    //     console.log('five', fiveItems)
    // //  console.log("countries", countriesBox);

    // }
     
     
    //  display5Countries()

    //  displayAllCountries()

        //let countryBox = []
    





    return (
        <>
            <h1>My First Country Page</h1>
            <Navbar />

        </>
    );
}
