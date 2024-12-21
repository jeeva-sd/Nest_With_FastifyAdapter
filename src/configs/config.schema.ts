import * as yup from 'yup';

// ------------------------------------------- server -----------------------------------------------------

const serverConfigRule = yup.object().shape({
    logger: yup.boolean().required(),
    bodyLimit: yup.number().required(),
    caseSensitive: yup.boolean().required(),
    ignoreTrailingSlash: yup.boolean().required(),
    ignoreDuplicateSlashes: yup.boolean().required(),
    port: yup.number().required(),
    routePrefix: yup.string().required(),
    version: yup.string().required()
});

const payloadConfigRule = yup.object().shape({
    abortEarly: yup.boolean().required(),
    stripUnknown: yup.boolean().required(),
    recursive: yup.boolean().required()
});

const multipartConfigRule = yup.object().shape({
    limits: yup.object().shape({
        fileSize: yup.number().required(), // 5MB
        fieldSize: yup.number().required(), // 1MB
        fields: yup.number().required(),
        files: yup.number().required()
    })
});

const authConfigRule = yup.object().shape({
    encryptionKey: yup.string().required(),
    jwt: yup.object().shape({
        secret: yup.string().required(),
        expiresIn: yup.string().required() // 7 days
    })
});

const corsConfigRule = yup.object().shape({
    allowedDomains: yup.array().of(yup.string().trim().required()).required(),
    credentials: yup.boolean().required()
});

// ----------------------------------------------------------------------------------------------------------

export const AppConfigRule = yup.object().shape({
    server: serverConfigRule,
    cors: corsConfigRule,
    auth: authConfigRule,
    payloadValidation: payloadConfigRule,
    multiPart: multipartConfigRule
});

// ------------------------------------------------------------------------------------------------------------------

export type AppConfig = yup.InferType<typeof AppConfigRule>;

// ------------------------------------------------------------------------------------------------------------------
