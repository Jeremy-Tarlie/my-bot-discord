
import sendMail  from "./send.js";

export default async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        //Do some thing
        await sendMail(
          "TEST",
          "test@test.fr",
          "THI IS A TEST FOR MY MEDIUM USERS"
        );
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        //Do some thing
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};
