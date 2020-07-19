const bitganj = (() => {
    
    function getIdentifiactors() {
        const promiseOfIdentificatorsList = new Promise((resolve,reject) => {
            if (this.getIdentificatorsList())  {
                resolve (IdentificatorsList);
            } else {
                reject (Error('Didn\'t recieve identificators!'));
            }
        });
        return promiseOfIdentificatorsList;
    }

    function getIdentificatorsList() {
        const getIdentificatorsList = ['bitIdIdent','EmailIdIdent','telegramIdIdent'];
        return getIdentificatorsList;
    }

})();