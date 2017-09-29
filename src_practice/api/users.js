/**
 * Api Users static class
 */
export default class ApiUsers {
    /**
     * get the list of users
     * @param action
     * @returns {Promise}
     */
    static getList(action) {
        const timeout = 1000;
        return new Promise(resolve => {
            setTimeout(() => {
                let users = [];
                for (let i = 1; i <= 28; i++) {
                    users.push({
                        id: i,
                        username: 'Sujan' + i,
                        job: 'Employee' + i
                    });
                }
                resolve(users);
            }, timeout)
        });

    }

    /**
     * Add a user
     * @param action
     */
    static add(action){
        //call some api url
    }

    /**
     * Edit a user
     * @param action
     */
    static edit(action){

    }


    /**
     * Delete a user
     * @param action
     */
    static delete(action){

    }
}