// Fetch all products from data.json file
export function fetchAllProducts(amount = 1) {
  return new Promise(async (resolve) =>{
  const response = await  fetch('http://localhost:8000/products')
  const data = await response.json()
  resolve({data})
  }
  );
}

export function fetchProductsByFilters (filter){
// filter ={"category" : "smartphones"}
let queryString = '';
  for(let key in filter){
    queryString += `${key}=${filter[key]}&`
  }


   return new Promise(async(resolve)=>{
    const response = await fetch ('http://localhost:8000/products?'+queryString)
    const data=await response.json()
    resolve({data})
   }
  )
}