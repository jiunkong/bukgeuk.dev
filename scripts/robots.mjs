import * as fs from 'fs'

const content = `
User-agent: *
`

fs.writeFileSync('../public/robots.txt', content, 'utf-8')