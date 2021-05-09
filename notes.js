const fs = require("fs");
const chalk = require("chalk");

const addFun = (title, body) => {
  const load = loadFun();

  const repeatedTitle = load.find(
    (note) => note.title === title // return statement
  );

  if (!repeatedTitle) {
    load.push({
      title: title,
      body: body,
    });
    saveFun(load);
    console.log(chalk.green("added new note"));
  } else {
    console.log(chalk.red("title already exists"));
  }
};

const saveFun = (load) => {
  fs.writeFileSync("notes.json", JSON.stringify(load));
};

const loadFun = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const data = dataBuffer.toString();
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

const removeFun = (title) => {
  const load = loadFun();
  var t = [title];
  var arr = load.filter((note) => !t.includes(note.title));
  if (arr.length === load.length) {
    console.log(chalk.red("No note removed"));
  } else {
    saveFun(arr);
    console.log(chalk.green("Note removed successfully"));
  }
};

const listFun = () => {
  const load = loadFun();
  console.log(chalk.green("your notes: "));
  load.forEach((element) => {
    console.log(element.title);
  });
};

const readFun = (title) => {
  const load = loadFun();
  const note = load.find((element) => {
    return element.title === title;
  });
  if (note) {
    console.log(note)
  } else {
    console.log(chalk.red("No Note Found"));
  }
};

module.exports = {
  addFun: addFun,
  removeFun: removeFun,
  listFun: listFun,
  readFun: readFun,
};
