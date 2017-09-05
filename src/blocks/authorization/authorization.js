import React, { Component } from 'react';
import { Icon, Button } from '../';
import AuthorizationModal from './__modal/authorization__modal';

import './authorization.scss';

const SERVER = 'https://iceberg-project.herokuapp.com';

class Authorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showIframe: false,
        };
    }
    componentDidMount() {
        window.addEventListener('message', this.messageListener);
    }
    componentWillUnmount() {
        window.removeEventListener('message', this.messageListener);
    }
    messageListener = (event) => {
        if (event.origin !== SERVER) return false;
        try {
            const res = JSON.parse(event.data.replace(/&quot;/g, '"'));
            this.setState({ showIframe: false });
            console.log('event', res);
        } catch (error) {
            console.error('Error while parsing JSON:', error);
        }
        return true;
    };
    showIframe = () => {
        console.log('showIframe');
        this.setState({ showIframe: true });
    };
    render() {
        return (
            <main className="authorization">
                <div className="authorization__wrapper">
                    <section className="authorization__description">
                        <div className="authorization__description-img">
                            <Icon iconName="iceberg" />
                        </div>
                        <div className="authorization__description-text">
                            Сохраняйте подборки ссылок или создавайте свои,
                            чтобы разобраться в какой угодно теме
                        </div>
                    </section>
                    <section className="authorization__actions">
                        <Button
                            text="facebook"
                            size="max-width"
                            background="#3b5998"
                            textColor="#fff"
                        />
                        <Button
                            text="вконтакте"
                            size="max-width"
                            background="#5181b8"
                            textColor="#fff"
                        />
                        <Button text="яндекс" size="max-width" background="#ffcc00" onClick={this.showIframe} />
                    </section>
                    <AuthorizationModal show={this.state.showIframe} />
                </div>
            </main>
        );
    }
}

export default Authorization;
