export class Idea {
    constructor(public name: string, public creator: string, public fundingGoal: number, public image: string, public description: string, public popularity: number = 0, id: string = "") {}
}
