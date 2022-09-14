import * as child from 'child_process';


child.exec("sample_client.js"); // notice this without a callback..
process.exit(0); // exit this nodejs process

function main () {
    console.log("wow");
}

