const StringStore = artifacts.require('./StringStore.sol');

contract('StringStore', accounts => {
  it('should store the string \'Hey there!\'', async () => {
    const string_to_store = 'Hey there!'

    const string_store = await StringStore.deployed();

    // Set stored_string to 'Hey there!'
    await string_store.set(string_to_store, { from: accounts[0] });

    // Get stored_string from public variable getter
    const stored_string = await string_store.stored_string.call();

    assert.equal(stored_string, string_to_store, 'The string was not stored');
  });
});
