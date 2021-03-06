const models = {
  react: (name) =>
    `import React from "react";\n\nconst ${name} = () => {\n  return <div>Generated by Component Generator</div>;\n};\n\nexport default ${name};`,
};

module.exports = (componentName) => {
  return models.react(componentName);
};
