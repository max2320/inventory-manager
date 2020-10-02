import React from 'react';
import { safeRender } from '../libs/helpers';

import '../stylesheets/application.scss';

import App from '../containers/App';

safeRender('#app', App);
