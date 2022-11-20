import { createAction } from '@reduxjs/toolkit';

export const login = createAction('LOGIN');
export const logout = createAction('LOGOUT');

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
