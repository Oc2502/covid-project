const main = document.querySelector('.container');
const btnRegion = document.querySelectorAll('.btn')
const baseEndPoint = "https://restcountries.herokuapp.com/api/v1/region/";
const baseApiCountries ="https://corona-api.com/countries"


//proxy that should work : 
const proxy = 'https://api.allorigins.win/raw?url='; 
//


let region = [];

async function regionContinent(continent) {
    try {
        region = [];
      const result = await fetch(`${proxy}${baseEndPoint}${continent}`);
      let data = await result.json();
      console.log(data)
      data.forEach(element=> {
        covidCountries(element)
      })
    } catch (error) {
    //   errMsg.innerHTML=`${error}`;
    }
    console.log(continent)
}


// fetch covid for each state
async function covidCountries(element) {
    try {
      const countryResult = await fetch(`${baseApiCountries}`);
      const dataState = await countryResult.json();
      dataState.data.forEach(el => {
          if(element.name.common === el.name) {
              let newObj = {
                  name: `${el.name}`,
                  numberOfCases: `${el.latest_data.confirmed}`,
                  numberOfDeaths: `${el.latest_data.deaths}`,
                  numberOfRecoverd: `${el.latest_data.recovered}`,
                  numberOfCritical: `${el.latest_data.critical}`,

              }
              region.push(newObj)
              makeChart(newObj.numberOfCases)
        }
            
    })
    
console.log(region)
    } catch (error) {
    //   errMsg.innerHTML=`${error}`;
    }
    
}

function getRegion(e) {
    regionContinent(e.currentTarget.id)
}

// add event for each region btn
btnRegion.forEach(btn => {
    
    btn.addEventListener('click', getRegion);
})


