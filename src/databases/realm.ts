import Realm from "realm";
import { useAuth } from "../hooks/auth";
import { ActivitiesSchema } from "./schemas/ActivitiesSchema";

const getRealm = async () => {
    // const { user } = useAuth();

    // const app = new Realm.App({ id: "application-0-wbytk" });
    // const credentials = Realm.Credentials.anonymous();
    // const User = await app.logIn(credentials);

    return await Realm.open({
        path: "TCC",
        schema: [ActivitiesSchema]
        // sync: { user: User, partitionValue: user.id, flexible: false }
    });
};

export default getRealm;