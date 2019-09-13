export interface IEndpoint {
    url : string
    handdler : Function
    method : string
}

export interface IGetRequest{
    page? : number
}