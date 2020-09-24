const {
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_PORT,
    DB_BASE,
    DB_AUTHBASE,
    APP_URL,
    APP_PORT,
    JWT_KEY,
    JWT_EXPIRES,
    MAIL_HOST,
    MAIL_PORT,
    MAIL_SECURE,
    MAIL_USER,
    MAIL_PASS,
} = process.env
export default () => ({
    db: {
        user: DB_USER,
        pass: DB_PASS,
        host: DB_HOST,
        port: DB_PORT,
        database: DB_BASE,
        authSource: DB_AUTHBASE,
    },
    host: {
        url: APP_URL,
        port: APP_PORT,
    },
    jwt: {
        secretOrKey: JWT_KEY,
        expiresIn: JWT_EXPIRES,
    },
    mail: {
        host: MAIL_HOST,
        port: MAIL_PORT,
        secure: MAIL_SECURE,
        user: MAIL_USER,
        pass: MAIL_PASS,
    },
})
