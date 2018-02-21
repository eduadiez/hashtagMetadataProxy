const { assertRevert } = require('./helpers/assertThrow')

const getContract = name => artifacts.require(name)

contract('HashtagMetadataProxy', (accounts) => {
    let HashtagMetadataProxy

    before(async () => {
        HashtagMetadataProxy = await getContract('HashtagMetadataProxy').new()
    })

    it('Should change de TTL value', async () => {
        assert.equal(await HashtagMetadataProxy.defaultTTL.call(),0,"Should have TTL=0 initially")
        await HashtagMetadataProxy.setTTL(3600)
        assert.equal(await HashtagMetadataProxy.defaultTTL.call(),3600,"Should have TTL=0 initially")
    })
})