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
        let encodedURI;

        if (searchTerm !== '') {
            encodedURI = window.encodeURI('/fetch');
        } else {
            encodedURI = window.encodeURI(`/fetch/${searchTerm}`);
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