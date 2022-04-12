const prompts = require("prompts");

const preferences = async () => {
  const response = await prompts([
    {
      type: "text",
      name: "name",
      message: "Component name",
      validate: (name) => (name.trim() ? true : "Is required!"),
    },
    {
      type: "select",
      name: "language",
      message: "Language used",
      choices: [
        { title: "JavaScript", value: "js" },
        { title: "TypeScript", value: "tsx" },
      ],
    },
  ]);

  return response;
};

module.exports = preferences;
