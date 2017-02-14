//Default request object
export default class Request {

    constructor() {
        this.xhr = new XMLHttpRequest();
        this.xhr.onreadystate = function () {
            if (this.readyState === 4) {
                console.log(this.status + ':' + this.responseText);
            }
        };
        this.xhr.addEventListener("error", this.errorEvent);
        this.xhr.addEventListener("abort", this.errorEvent);
    }

    get(url, callback) {
        let self = this;
        this.xhr.open("GET", url);
        this.xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                callback(self.xhr.responseText);
            }
        };
        this.xhr.send()
    }

    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                callback(self.xhr.responseText);
            }
        };
        this.xhr.send(data)
    }

    errorEvent() {
        console.log('Process terminated');
    }

}