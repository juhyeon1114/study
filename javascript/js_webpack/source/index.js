import hello_word from './hello.js';
import world_word from './world.js';
import _ from 'lodash'; //경로를 지정해주지 않으면, 웹팩이 node_modules폴더에서 해당하는 모듀을 찾아서 가져온다.
import css from './style.css';

document.querySelector('#root').innerHTML = _.join(hello_word, world_word, ' ');
/**
 * npx webpack --entry ./source/index.js --output ./public/index_bundle.js
 * index.js 파일을 기점으로 하는 하나의 앱(?)을 public폴더에 index_bundle.js파일로 번들링한다.
 */ 