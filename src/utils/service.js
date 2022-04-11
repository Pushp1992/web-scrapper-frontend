import axios from 'axios';

const proxyServer = 'mediaScrapperServerHost';

export const mediaService = {

    scrapWebUrl(urlList) {
        const encodedURI = window.encodeURI('/create');

        return axios({
            method: 'POST',
            data: urlList,
            url: encodedURI,
            "headers": {
                'Content-type': 'application/json',
                'server': proxyServer
            }
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.log(`Something wrong happened. ${err.message}`);
            return;
        });
    },

    fetchMediaUrl(searchTerm) {
        console.log('searchTerm', searchTerm);
        let encodedURI;

        if (searchTerm) {
            encodedURI = window.encodeURI(`/fetch/${searchTerm}`);
        } else {
            encodedURI = window.encodeURI('/fetch');
        }

        return axios({
            method: 'GET',
            url: encodedURI,
            "headers": {
                'Content-Type': 'application/json',
                'server': proxyServer
            }
        }).then((res) => {
            return res.data;
        });
    }
};