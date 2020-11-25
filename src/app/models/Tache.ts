export class Tache {
    id: number;
    titre: string;
    date: Date;
    amende: number;
    etat: string;
    
    constructor(info?: any) {
        if (typeof info === 'undefined' || info === null) {
            this.id = -1;
            this.titre = "Non identifié";
            this.amende = 0;
            this.etat = "en_cour";
        } else {
            this.id = info.id;
            this.titre = info.titre;
            this.date = info.date;
            this.amende = info.amende;
            this.etat = "en_cour";
        }
    }
}