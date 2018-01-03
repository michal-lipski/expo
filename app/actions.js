export function loginSuccess(accessToken) {
    return {
        type: 'LOGIN_SUCCESS',
        accessToken
    };
}

export function loginError() {
    return {
        type: 'LOGIN_ERROR'
    };
}

export function reportWork(worklog) {
    return {
        type: 'REPORT_WORK',
        worklog
    };
}