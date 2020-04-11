import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Jobs Test <job-test@fakemail.com.br>",
      to: `${user.name} <${user.email}>`,
      subject: "User register",
      html: `Hi, ${user.name}, wellcome to Fake Company :)`,
    });
  },
};
