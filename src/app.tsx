// The DOM React renders into, and the elements it can use. Must load first.
import './dom';
import { Application } from '@nativescript/core';
import { startReactApp } from '@nativescript-community/react';
import { Home } from './components/Home';

startReactApp({ Application, root: Home });
