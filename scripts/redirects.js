'use strict'

const AWS = require('aws-sdk')
AWS.config.credientials = new AWS.SharedIniFileCredentials({ profile: 'default' })
const s3 = new AWS.S3({ region: 'us-east-1' })

const bucket = process.env.NODE_ENV === 'production' ? 'paradigmconstruction-tx.com' : 'paradigmconstruction-tx-dev'

const DEFAULT_OPTIONS = {
  ACL: 'public-read',
  Bucket: bucket,
  Body: '',
  ContentLength: 0,
  WebsiteRedirectLocation: '/',
}

const redirects = require('./redirects.json')
console.log('Bucket: ' + bucket)
for (let key in redirects) {
  const redirect = { Key: key, WebsiteRedirectLocation: redirects[key] }
  const options = Object.assign({}, DEFAULT_OPTIONS, redirect)

  s3.putObject(options, function(err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log(`Redirected ${key} to ${redirects[key]}`)
    }
  })
}
