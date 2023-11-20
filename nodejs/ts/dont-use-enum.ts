enum LOG_LEVEL {
   DEBUG = 'DEBUG',
   WARNING = 'WARNING',
   ERROR = 'ERROR',
}

type LOG_LEVEL3 = 'DEBUG' | 'WARNING' | 'ERROR';

const levels = {
   DEBUG: 'DEBUG',
   WARNING: 'WARNING',
   ERROR: 'ERROR',
} as const;

type LOG_LEVEL2<T> = T[keyof T];

function logLevel(level: LOG_LEVEL2<typeof levels>) {
   console.log(level);
}

function logLevel3(level: LOG_LEVEL3) {
   console.log(level);
}

console.log(logLevel('DEBUG'));
console.log(logLevel3('DEBUG'));
