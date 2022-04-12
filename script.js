#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const componentModel = require("./componentModel");
const preferences = require("./componentPreferences");

(async () => {
  const component = await preferences();

  const name = component.name[0].toUpperCase() + component.name.substring(1);

  const dirPath = path.join(__dirname, `../../src/components/${name}/`);
  const componentPath = path.join(dirPath, `${name}.${component.language}`);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (!fs.existsSync(componentPath)) {
    fs.writeFileSync(componentPath, componentModel(name));

    console.log("Component has been created!");
  } else {
    console.log("Component already exists!");
  }
})();
