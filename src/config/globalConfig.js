import defaultConfig from './default.json';

const globalConfig = window.globalConfig || defaultConfig;
const replaceHttpScheme = (url) => url.replace('http', 'https').replace('3000', '3001');

if (location.protocol === 'https:') {
	globalConfig.peersApi.defaultNode = replaceHttpScheme(globalConfig.peersApi.defaultNode);
	globalConfig.peersApi.nodes = globalConfig.peersApi.nodes.map((url) => replaceHttpScheme(url));
}

export default globalConfig;
