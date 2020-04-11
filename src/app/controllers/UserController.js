import Mail from "../lib/Mail";

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    await Mail.sendMail({
      from: "Jobs Test <job-test@fakemail.com.br>",
      to: `${name} <${email}>`,
      subject: "User register",
      html: `Hi, ${name}, wellcome to Fake Company :)`,
    });

    // Send mail
    return res.json(user);
  },
};
