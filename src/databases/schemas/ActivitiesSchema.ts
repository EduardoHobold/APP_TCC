export const ActivitiesSchema = {
    name: "Activities",

    properties: {
        _id: "string",
        idUser: "string",
        time: "int",
        correct: "int",
        wrong: "int",
        nivel: "int",
        date: "date",
    },
    
    primaryKey: "_id",
}