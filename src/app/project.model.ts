export class Project {

  constructor(public name: string, public creator: string, public fundingGoal: number, public image: string, public description: string, public currentFunding:number = 0, public popularity: number = 0, id: string = "") {}
}
