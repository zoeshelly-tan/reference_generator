import { extendObservable, runInAction } from 'mobx';
import SessionStore from 'mobx-session';

class Store {
    constructor() {
        console.log("construct")

        console.log(SessionStore.initialized)
        if (!SessionStore.initialized) {
            console.log("initailizing")
            SessionStore.initialize({ name: 'reference-generator' });

        }

        extendObservable(this, {
            user: null,
            loginError: false,
            logoutError: false,
            get loggedIn() {
                return this.user !== null && SessionStore.hasSession;
            }
        });

        runInAction('Load user', async () => {
            console.log("called " + SessionStore.initialized)

            this.user = await SessionStore.getSession();
        });
    }

    saveUser = (session) => {
        SessionStore.saveSession(session);

        runInAction('Save user', () => {
            this.user = session;
        });
    }

    removeUser = () => {
        SessionStore.deleteSession();
        runInAction('Logout user', () => {
            this.user = null;
        });
    }

    login = async (user) => {
        try {
            runInAction('Init Login', () => {
                this.loginError = false;
            });
            const { username, password } = user;
            if (username && password) {
                const response = await fetch('http://localhost:3001/login', {
                    method: 'POST',
                    body: JSON.stringify({ username, password }),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    response.text().then((body) => {
                        this.saveUser(JSON.parse(body).user)
                    })
                }
            }
        } catch (error) {
            runInAction('Error Login', () => {
                this.loginError = error.errors;
            });
        }
    }

    logout = async () => {
        try {
            runInAction('Init Logout', () => {
                this.logoutError = false;
            });
            this.removeUser();
        } catch (error) {
            runInAction('Error Logout', () => {
                this.logoutError = error.errors;
            });
        }
    }
}

const UserStore = new Store();

export default UserStore;