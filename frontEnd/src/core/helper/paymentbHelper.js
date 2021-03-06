const { API } = require("../../backend");


export const getmeToken=(userId,token)=>{
    return fetch(`/api/payment/gettoken/${userId}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        }
    }).then(response=>{
        return response.json()
    })
    .catch(error=>{
        console.log(error);
    })
}

export const processPayment=(userId,token,paymentInfo)=>{
    return fetch(`/api/payment/braintree/${userId}`,{
        method:"POST",
        headers:{
         "Content-Type":"application/json",
         Accept:"application/json",
         Authorization:`Bearer ${token}`   
        },
        body:JSON.stringify(paymentInfo)


    }).then(response=>{
        return response.json()
    })
    .catch(error=>{
        console.log(error)
    })

}