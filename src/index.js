'use strict';

const electron = require('electron');
console.log(electron.remote);
const {remote} = electron
const fileUtil = require('./lib/fileUtil');


fileUtil.fetchReadmeList(function(err,matches){
    if(!err) document.write(matches.join());
});
