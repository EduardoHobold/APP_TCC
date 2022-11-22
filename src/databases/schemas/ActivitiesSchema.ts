export const ActivitiesSchema = {
    name: "Activities",

    properties: {
        _id: "string",
        idUser: "string",
        time: "number",
        correct: "number",
        wrong: "number",
        nivel: "number",
        date: "date",
    },
    
    primaryKey: "_id",
}