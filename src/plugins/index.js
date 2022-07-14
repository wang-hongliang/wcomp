const requireComponent = require.context('./', true, /\.vue$/);
// console.log(requireComponent.keys())
const install = (Vue) => {
  if (install.installed) return;
  install.installed = true;
  requireComponent.keys().map(path => {
    const config = requireComponent(path);
    // console.log(config)
    const componnetName = config.default.name;
    Vue.component(componnetName, config.default || config)
  })
}
export default {
  install
};