#!/usr/bin/env node

/**
var gradient = require("gradient-string")
var tinycolor = require("tinycolor2")
var fs = require("fs")
let coolGradient = gradient([
    tinycolor('#f0d53b'),
    tinycolor('#ec5c2f')
]);
let coolString = coolGradient('Alins - The Purest and Elegant Web UI framework.');
fs.writeFileSync('./a.txt', coolString, '');
 */

const inquirer = require('inquirer');
const progress = require('log-progress');
const download = require('download-git-repo');
const log = require('./log.cjs');
const path = require('path');
const fs = require('fs');



const banner = 'Alins - The Purest and Elegant Web UI framework.';

const gradientBanner = "\x1B[38;2;240;213;59mA\x1B[39m\x1B[38;2;240;210;59ml\x1B[39m\x1B[38;2;240;207;58mi\x1B[39m\x1B[38;2;240;204;58mn\x1B[39m\x1B[38;2;240;201;58ms\x1B[39m \x1B[38;2;239;197;57m-\x1B[39m \x1B[38;2;239;194;57mT\x1B[39m\x1B[38;2;239;191;57mh\x1B[39m\x1B[38;2;239;188;57me\x1B[39m \x1B[38;2;239;185;56mP\x1B[39m\x1B[38;2;239;182;56mu\x1B[39m\x1B[38;2;239;179;56mr\x1B[39m\x1B[38;2;239;176;55me\x1B[39m\x1B[38;2;239;173;55ms\x1B[39m\x1B[38;2;239;170;55mt\x1B[39m \x1B[38;2;238;166;54ma\x1B[39m\x1B[38;2;238;163;54mn\x1B[39m\x1B[38;2;238;160;54md\x1B[39m \x1B[38;2;238;157;53mE\x1B[39m\x1B[38;2;238;154;53ml\x1B[39m\x1B[38;2;238;151;53me\x1B[39m\x1B[38;2;238;148;53mg\x1B[39m\x1B[38;2;238;145;52ma\x1B[39m\x1B[38;2;238;142;52mn\x1B[39m\x1B[38;2;238;139;52mt\x1B[39m \x1B[38;2;237;135;51mW\x1B[39m\x1B[38;2;237;132;51me\x1B[39m\x1B[38;2;237;129;51mb\x1B[39m \x1B[38;2;237;126;50mU\x1B[39m\x1B[38;2;237;123;50mI\x1B[39m \x1B[38;2;237;120;50mf\x1B[39m\x1B[38;2;237;117;49mr\x1B[39m\x1B[38;2;237;114;49ma\x1B[39m\x1B[38;2;237;111;49mm\x1B[39m\x1B[38;2;237;108;49me\x1B[39m\x1B[38;2;236;104;48mw\x1B[39m\x1B[38;2;236;101;48mo\x1B[39m\x1B[38;2;236;98;48mr\x1B[39m\x1B[38;2;236;95;47mk\x1B[39m\x1B[38;2;236;92;47m.\x1B[39m";

log.n();
console.log(process.stdout.isTTY && process.stdout.getColorDepth() > 8 ? gradientBanner : banner);
log.n();

const date = new Date();

function main () {
    const options = [
        {
            type: 'input',
            name: 'name',
            default: 'alins-demo',
            message: 'Input project name'
        },
        {
            type: 'input',
            name: 'description',
            default: 'Alins project',
            message: 'Input description'
        },
        {
            type: 'input',
            name: 'author',
            default: 'author',
            message: 'Input author name'
        }
    ];
    inquirer.prompt(options).then(answers => {
        const url = 'github:alinsjs/ebuild-template-alins';
        downloadProject(answers, url);
    });
}

function start () {
    progress.start({
        title: 'Downloading Alins template.',
        ontick: function (value, percent) {
            if (percent > 90) {
                this.pause(value);
            }
        },
        time: 100,
        total: 199
    });
}

function downloadProject (answers, url) {
    log.n();
    start();
    download(url, answers.name, err => {
        if (progress.isPause()) {
            progress.start();
        }

        if (err) {
            progress.fail('Failed');
            log.n();
            log.red('Project creation failed');
            console.log(err);
        } else {
            progress.complete('Succeed');

            modifyPkg(answers);

            log.n();
            log.green(`Project <${answers.name}> created successfully in ` + (new Date() - date) + ' ms.');
            log.n();
            log.blue('Run the following command to start:');
            log.n();
            log.green(`cd ${answers.name}`);
            log.green('npm i');
            log.green('npm run dev');
        }
        log.n();
    });
}

function modifyPkg(answers){
    const pkgPath = path.resolve(process.cwd(), `./${answers.name}/package.json`);
    const pkg = require(pkgPath);
    Object.assign(pkg, answers);
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf8');
}

main();
 


