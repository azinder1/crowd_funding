export class Project {

  constructor(public name: string, public creator: string, public fundingGoal: number, public image: string, public popularity: number = 0, public achieved: boolean = false, id: string = "") {}
}
