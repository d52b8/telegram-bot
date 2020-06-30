module.exports = class Bot {
    _httpClient;
    _token;
    
    constructor(httpClient, token) {
        this._httpClient = httpClient;
        this._token = token;
    }

    uri() {
        return `https://api.telegram.org/bot${this._token}/`;
    }

    async sendMessage(chat_id, text) {
        return await this._httpClient.get(encodeURI(`${this.uri()}sendMessage?chat_id=${chat_id}&parse_mode=html&text=${text}`));
    }
}
