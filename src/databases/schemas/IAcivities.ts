import Realm from "realm";

export interface IActivities {
    _id: string;
    correct: number;
    date: Date;
    idUser: string;
    nivel: number;
    time: number;
    wrong: number;
  };

export type IActivitiesObject = IActivities & Realm.Object;