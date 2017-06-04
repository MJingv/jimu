var express = require('express'),
  swig = require('../../index'),
  http = require('http'),
  app = express(),
  features;

// NOTE: It is preferred to use consolidate.js
// However, we can't do that in this example, because the example uses
// The uninstalled version of swig for testing purposes
// Please see the documentation for proper use with Express

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
// Optional: use swig's caching methods
// app.set('view cache', false);

app.get('/', function (req, res) {
  res.render('index', {});
});

app.get('/features', function (req, res) {
  res.render('features', { features: features });
});

app.get('/*', function (req, res) {
  res.render(req.params[0], {});
});

features = [
  { 
    src: 'images/aboutus/safe-90bd0b7f6e.png',
    tit: '安全保障',
    info:'第三方担保、保证金风险互助金、法律援助金多重安全防线 为投资者提供保障'
  },
  { 
    src: 'images/aboutus/property-a7ddbe187f.png',
    tit: '合规透明',
    info:'交易资金由民生银行全程存管，资金流转清晰可查，交易真实、合法让投资者安心'
  },

  { 
    src: 'images/aboutus/service-7612927c13.png',
    tit: '贴心服务',
    info:'积木盒子只做一件事为投融双方倾力服务积木盒子全员参与为您提供一站式服务'
  },
  { 
    src: 'images/aboutus/choice-d7f4da06ec.png',
    tit: '丰富选择',
    info:'我们为您提供多期限、多地域、多行业多种形式的投资项目总有一款适合您'
  },
  
  
];

app.listen(1337);
console.log('Application Started on http://localhost:1337/');
