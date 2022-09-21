window.env = {
    applogicUrl: 'http://www.app.local/api/v2/applogic',
    authUrl: 'http://www.app.local/api/v2/barong',
    peatioUrl: 'http://www.app.local/api/v2/peatio',
    finexUrl: 'http://www.app.local/api/v2/finex',
    msAlertDisplayTime: '5000',
    tablePageLimit: 50,
    minutesUntilAutoLogout: '35',
    finex: false,
    aml: false,
    captcha: {
        captchaType: 'none',
        siteKey: 'changeme',
    },
    labelSwitcher: [
        { name: 'email', label: [{ email: 'verified' }] },
        { name: 'phone', label: [{ phone: 'verified' }] },
        { name: 'identity', label: [{ profile: 'partial' }, { id_document: 'verified' }, { liveness: 'verified' }] },
        { name: 'residence', label: [{ document: 'verified' }] },
    ],
    plugins: [],
    roleTypes: [
        {
            value: 'Admin',
            key: 'admin',
        },
        {
            value: 'Member',
            key: 'member',
        },
        {
            value: 'Super Admin',
            key: 'superadmin',
        },
        {
            value: 'Accountant',
            key: 'accountant',
        },
        {
            value: 'Compliance',
            key: 'compliance',
        },
        {
            value: 'Technical',
            key: 'technical',
        },
        {
            value: 'Support',
            key: 'support',
        },
        {
            value: 'Trader',
            key: 'trader',
        },
        {
            value: 'Broker',
            key: 'broker',
        },
    ],
    allowedRoles: [
        'admin',
        'superadmin',
        'accountant',
        'compliance',
        'support',
        'technical',
        'manager',
    ],
    withCredentials: false,
    sentryEnabled: false,
    devMode: true,
    minutesBeforeWarningMessage: '1',
};
