const { assertRevert } = require('./helpers/assertThrow')
const getContract = name => artifacts.require(name)


contract('HashtagMetadataProxy', (accounts) => {
    const TTL = 3600;
    let HashtagMetadataProxy

    before(async () => {
        HashtagMetadataProxy = await getContract('HashtagMetadataProxy').new()
    })

    it('Should change de TTL value', async () => {
        await HashtagMetadataProxy.setTTL(TTL)
        assert.equal(await HashtagMetadataProxy.defaultTTL.call(),TTL,"Should have changed the TTL value")
    })
})