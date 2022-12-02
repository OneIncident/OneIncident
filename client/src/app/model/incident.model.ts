export class Incident 
{
    constructor (
        public _id?: number,
        public record?: string,
        public name?: string,
        public date?: string,
        public status?: string,
        public location?: string,
        public priority?: number,
        public description?: string
        //make model identical with the backend
        //format the data
    ) {}
}

