const travisScript = require("@liyicheng/isomerpages-travisci-scripts");

const travisBranch = process.env.TRAVIS_BRANCH;

if(travisBranch == "master") {
    travisScript.runAll(false);
}
else {
    travisScript.testsOnly(false);
}
