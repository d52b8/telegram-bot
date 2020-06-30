const should = require('chai').should()
const client = require('axios').default;

const Bot = require('../Bot');
const config = require('../config.json');

describe('test.Bot', function () {
    it('sendMessage', async function () {
        const { token ,chat_id } =  { ...config };
        const bot = new Bot(client, token);
        const message = 'Hello, world';
        const response = await bot.sendMessage(chat_id, message);
        message.should.deep.equal(response.data.result.text);
    });
});
