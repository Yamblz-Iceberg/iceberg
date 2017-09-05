import React from 'react';

import './authorization.scss';
import { Icon, Button } from '../';

const Authorization = () => (
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
                <Button text="яндекс" size="max-width" background="#ffcc00" />
            </section>
        </div>
    </main>
);

export default Authorization;
