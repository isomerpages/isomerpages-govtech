const travisScript = require("@liyicheng/isomerpages-travisci-scripts");
const travisBranch = process.env.TRAVIS_BRANCH;

if(travisBranch == "master") {
    travisScript.testsOnly();
    console.log("master branch!");
}
else {
    travisScript.testsOnly();
}
