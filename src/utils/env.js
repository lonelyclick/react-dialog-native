export const isProd = process.env.NODE_ENV === 'production';
export const isDev = process.env.NODE_ENV !== 'production';
export const isServer = process.env.VUE_ENV === 'server';
export const isClient = process.env.VUE_ENV === 'client';
