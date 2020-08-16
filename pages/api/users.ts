import users from "../../users.json";

export default (req: any, res: any) => {
  res.statusCode = 200
  console.log(users)
  res.json({ users: users })
}
