const fs = require('fs')

const content = `
User-agent: *
`

fs.writeFileSync('../public/robots.txt', content, 'utf-8')