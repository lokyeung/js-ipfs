/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const runOnAndOff = require('../utils/on-and-off')

describe('dns', () => runOnAndOff((thing) => {
  let ipfs

  before(function () {
    this.timeout(60 * 1000)
    ipfs = thing.ipfs
  })

  it('resolve ipfs.io dns', function () {
    this.timeout(60 * 1000)

    return ipfs('dns ipfs.io').then((res) => {
      expect(res.substr(0, 6)).to.eql('/ipns/')
    })
  })

  it('resolve _dnslink.ipfs.io dns', function () {
    this.timeout(60 * 1000)

    return ipfs('dns _dnslink.ipfs.io').then((res) => {
      expect(res.substr(0, 6)).to.eql('/ipns/')
    })
  })

  it('resolve subdomain docs.ipfs.io dns', function () {
    this.timeout(60 * 1000)

    return ipfs('dns docs.ipfs.io').then(res => {
      expect(res.substr(0, 6)).to.eql('/ipfs/')
    })
  })

  it('resolve subdomain _dnslink.docs.ipfs.io dns', function () {
    this.timeout(60 * 1000)

    return ipfs('dns _dnslink.docs.ipfs.io').then(res => {
      expect(res.substr(0, 6)).to.eql('/ipfs/')
    })
  })
}))
