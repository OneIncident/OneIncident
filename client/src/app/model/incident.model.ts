export class Incident {

    constructor(
        public id?: number,
        public record?: string,
        public name?: string,
        public date?: string,
        public status?: string,
        public location?: string,
        public priority?: number,
        public description?: string) { }

        public toString(): string{
            return `Incident
            ------------------------------
            Name:        ${this.name}
            Date:        ${this.date}
            Status:      ${this.status}
            Location:    ${this.location}
            Priority:    ${this.priority}
            Description: ${this.description}`
        }
    }


