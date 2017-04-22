import Vue from 'vue';
import axios from 'axios';
import "./server/mock";
import App from './app';
import "babel-polyfill";



let data = {
	render: h => h(App)
}

const app = new Vue(data).$mount('#app');
