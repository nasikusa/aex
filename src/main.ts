// import CreateLayer from './createLayer';

// const createLayer = new CreateLayer();

require('es6-promise').polyfill();

function waitFor3Seconds(){
  return new Promise((resolve)=>{
    setTimeout(resolve, 3000);
  });
}

async function main(){
  await waitFor3Seconds();
  console.log('done!');
}

main();