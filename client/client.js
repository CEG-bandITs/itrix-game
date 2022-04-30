/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const hlo =async(data)=>{
    const res = await fetch('http://localhost:3001/api/users/new', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      })
      const response = await res.json()
      return response ;
}


for(var i=20;i<100;i++)
{
    var data={
        'name':'user'+i,
        'clg':'ceg',
        'password':'mnbv0987',
        'email':`user${i}@gmail.com`
    }

    hlo(data).then(resp=>console.log(resp))
    
}