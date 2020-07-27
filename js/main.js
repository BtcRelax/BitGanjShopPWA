const bitganj = (() => {
    
    function getIdentifiactors() {
        const promiseOfIdentificatorsList = new Promise((resolve,reject) => {
            if (this.getIdentificatorsList())  {
                resolve (IdentificatorsList);
            } else {
                reject(Error('Didn\'t recieve identificators!'));
            }
        });
        return promiseOfIdentificatorsList;
    }

    function getIdentificatorsList() {
        const getIdentificatorsList = ['bitIdIdent','EmailIdIdent','telegramIdIdent'];
        return getIdentificatorsList;
    }

    function fetchIdentificator(IdentificatorName) {
        return fetch('api/session/start/' + IdentificatorName);
    }

    function logSuccess(result) {
        console.log('Done:\n'+ result);
    }

    function logError(err) {
        console.log('Error :\n'+ err);
    }


    return {
        fetchIdentificator: (IdentificatorName)
    };

})();