import axios from "axios";
import { setUsers } from "./redux/reducer";

export const getUsers = async () => {
    return await axios.get('http://localhost:3000/api/users')
    .then(res => {
        let users = res?.data?.okay?.members;
        setUsers(users);
        console.log(users);
        return 'done';
    });
}
