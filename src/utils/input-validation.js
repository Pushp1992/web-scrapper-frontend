const urlValidation  = require('url-validation');

export const isValidUrl = (urlList) => {
    let isValidurl = true;

    urlList.forEach(url => {
        if(!urlValidation(url)) {
            isValidurl = false;
            return;
        }
    });
    return isValidurl;
};