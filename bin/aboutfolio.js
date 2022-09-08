#! /usr/bin/env node
/* Argument parser */
const program = require("commander");

process.env.OUT_DIR = process.env.OUT_DIR || process.cwd();

const { buildCommand } = require("../build");
const { gitbuildCommand } = require("../gitbuild");
const { updateCommand } = require("../update");
const { uiCommand } = require("../ui");
const { runCommand } = require("../run");
const { version } = require("../package.json");

function collect(val, memo) {
  memo.push(val);
  return memo;
}

program
  .command("build <username>")
  .description(
    "Build site with your customize input. This will be used to customize your site"
  )
  .option("-t, --theme [theme]", "specify a theme to use", "light")
  .option("-b, --background [background]", "set the background image")
  .option("-f, --fork", "includes forks with repos")
  .option("-ab, --about", "specify about description")
  .option("-gt, --github [username]", "specify email")
  .option("-em, --email [email]", "specify email")
  .option("-ln, --linkedin [username]", "specify linkedin username")
  .option("-fb, --facebook [username]", "specify facebook username")
  .option("-tw, --twitter [username]", "specify twitter username")
  .option("-rs, --resume [url]", "specify resume file url")
  .option("-cr, --career [array]", "specify carreer array of object [{'01/01/1989','01/01/2000','CEO','Company A','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}]", "[]")
  .option("-sk, --skill [array]", "specify skill array of object [{'100','GitHub'}]", "[]")
  .option("-pr, --project [array]", "specify project array of object [{'Project Name', '01/01/1989','www.projecturl.com','description'}]", "[]")
  .option("-o, --order [order]", "set default order on sort", "asc")
  .action(buildCommand);

program
  .command("gitbuild <username>")
  .description(
    "Build site with your GitHub username. This will be used to customize your site"
  )
  .option("-t, --theme [theme]", "specify a theme to use", "light")
  .option("-b, --background [background]", "set the background image")
  .option("-f, --fork", "includes forks with repos")
  .option("-em, --email [email]", "specify email")
  .option("-ln, --linkedin [username]", "specify linkedin username")
  .option("-fb, --facebook [username]", "specify facebook username")
  .option("-tw, --twitter [username]", "specify twitter username")
  .option("-rs, --resume [url]", "specify resume file url")
  .option("-cr, --career [array]", "specify carreer array of object [{'01/01/1989','01/01/2000','CEO','Company A','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}]", "[]")
  .option("-sk, --skill [array]", "specify skill array of object [{'100','GitHub'}]", "[]")
  .option("-s, --sort [sort]", "set default sort for repository", "created")
  .option("-o, --order [order]", "set default order on sort", "asc")
  .action(gitbuildCommand);

program
  .command("update")
  .description("Update user and repository data")
  .action(updateCommand);

program
  .command("ui")
  .description("Create and Manage blogs with ease")
  .action(uiCommand);

program
  .command("run")
  .description("Run build files")
  .option("-p, --port [port]", "provide a port for localhost, default is 3000")
  .action(runCommand);

program.on("command:*", () => {
  console.log("Unknown Command: " + program.args.join(" "));
  program.help();
});

program
  .version(version, "-v --version")
  .usage("<command> [options]")
  .parse(process.argv);

if (program.args.length === 0) program.help();
