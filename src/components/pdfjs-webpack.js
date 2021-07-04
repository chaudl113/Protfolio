'use strict';

var pdfjs = require('pdfjs-dist/build/pdf.min.js');
var PdfjsWorker = require('worker-loader?esModule=false&filename=[name].js!pdfjs-dist/build/pdf.worker.min.js');

if (typeof window !== 'undefined' && 'Worker' in window) {
  pdfjs.GlobalWorkerOptions.workerPort = new PdfjsWorker();
}

module.exports = pdfjs;
