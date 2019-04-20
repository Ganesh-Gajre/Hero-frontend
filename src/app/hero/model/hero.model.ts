export class Hero 
{
    public heroName: string;
    public heroHeight: number;
    public heroType: boolean;
    public canFly: boolean;
    public fanFollowing: number;
    public superPowers: string[];
    public fightsWon: number;

    constructor(heroName: string, heroHeight: number, heroType: boolean, canFly: boolean, fanFollowing: number, superPowers: string[], fightsWon: number) 
    {
        this.heroName = heroName;
        this.heroHeight = heroHeight;
        this.heroType = heroType;
        this.canFly = canFly;
        this.fightsWon = fightsWon;
        this.fanFollowing = fanFollowing;
        this.superPowers = superPowers;
    }
}