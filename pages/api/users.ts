import users from "../../users.json";

export default (req: any, res: any) => {
  res.statusCode = 200
  // res.json({ name: 'John Doe' })
  console.log(users)
  res.json({ okay: users })
}
