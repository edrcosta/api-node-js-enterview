export interface IEndpoint {
    url : string
    handdler : Function
    method : string
}

export interface IGetRequest{
    body : {
        page? : number
    }
}

export interface IRemoveRequest{
    params : {
        id : number
    }
}

export interface IUpdateRequest<T>{
    params : {
        id : number
    },
    body : T
}

export interface ICreateRequest<T>{
    body : T
}