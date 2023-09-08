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
var gradientBanner = "\x1B[38;2;240;213;59mA\x1B[39m\x1B[38;2;240;210;59ml\x1B[39m\x1B[38;2;240;207;58mi\x1B[39m\x1B[38;2;240;204;58mn\x1B[39m\x1B[38;2;240;201;58ms\x1B[39m \x1B[38;2;239;197;57m-\x1B[39m \x1B[38;2;239;194;57mT\x1B[39m\x1B[38;2;239;191;57mh\x1B[39m\x1B[38;2;239;188;57me\x1B[39m \x1B[38;2;239;185;56mP\x1B[39m\x1B[38;2;239;182;56mu\x1B[39m\x1B[38;2;239;179;56mr\x1B[39m\x1B[38;2;239;176;55me\x1B[39m\x1B[38;2;239;173;55ms\x1B[39m\x1B[38;2;239;170;55mt\x1B[39m \x1B[38;2;238;166;54ma\x1B[39m\x1B[38;2;238;163;54mn\x1B[39m\x1B[38;2;238;160;54md\x1B[39m \x1B[38;2;238;157;53mE\x1B[39m\x1B[38;2;238;154;53ml\x1B[39m\x1B[38;2;238;151;53me\x1B[39m\x1B[38;2;238;148;53mg\x1B[39m\x1B[38;2;238;145;52ma\x1B[39m\x1B[38;2;238;142;52mn\x1B[39m\x1B[38;2;238;139;52mt\x1B[39m \x1B[38;2;237;135;51mW\x1B[39m\x1B[38;2;237;132;51me\x1B[39m\x1B[38;2;237;129;51mb\x1B[39m \x1B[38;2;237;126;50mU\x1B[39m\x1B[38;2;237;123;50mI\x1B[39m \x1B[38;2;237;120;50mf\x1B[39m\x1B[38;2;237;117;49mr\x1B[39m\x1B[38;2;237;114;49ma\x1B[39m\x1B[38;2;237;111;49mm\x1B[39m\x1B[38;2;237;108;49me\x1B[39m\x1B[38;2;236;104;48mw\x1B[39m\x1B[38;2;236;101;48mo\x1B[39m\x1B[38;2;236;98;48mr\x1B[39m\x1B[38;2;236;95;47mk\x1B[39m\x1B[38;2;236;92;47m.\x1B[39m";

console.log(gradientBanner);
console.log('');

process.argv.push('alins-project', 'alins');

require('ebuild-cli/bin/ebuild-init');

