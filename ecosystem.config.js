module.exports = {
  apps: [
    {
      name: "frontend",
      cwd: "/home/forge/anyemedola.com.br/frontend",
      script: "npm",
      args: "start",
      env: { PORT: 3000 }
    },
    {
      name: "backoffice",
      cwd: "/home/forge/anyemedola.com.br/backoffice",
      script: "npm",
      args: "start",
      env: { PORT: 3001 }
    },
    {
      name: "backend",
      cwd: "/home/forge/anyemedola.com.br/backend",
      script: "node",
      args: "dist/server.js", // ou server.js
      env: { PORT: 4000 }
    }
  ]
}