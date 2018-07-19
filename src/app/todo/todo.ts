

export class Todo{
    id:number
    title:string= ''
    status:boolean = false

    constructor(value:Object ={}){
        Object.assign(this, value)
    }

}
