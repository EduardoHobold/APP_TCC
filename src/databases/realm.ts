import Realm from "realm";
import { ActivitiesSchema } from "./schemas/ActivitiesSchema";

export const getRealm = async () => await Realm.open({
    path: "APP_TCC",
    schema: [ActivitiesSchema]
});