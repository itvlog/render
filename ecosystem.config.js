module.exports = {
  apps: [{
    script: 'app.js',
    watch: '.'
  }],
  deploy: {
    production: {
      user: 'root',
      host: ['10.12.51.139'],
      port: '30022',
      ref: 'origin/main',
      repo: 'git@github.com:itvlog/render.git',
      path: '/apps/www1',
      "post-deploy": 'npm install && pm2 reload ecosystem.config.js',  //部署后的动作
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
};
