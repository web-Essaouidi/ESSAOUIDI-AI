const _0x2bb7bb = _0x203c;
(function (_0x1deb88, _0x2a55dd) {
    const _0xd0f63c = _0x203c,
        _0x6934f9 = _0x1deb88();
    while (!![]) {
        try {
            const _0x404c82 = -parseInt(_0xd0f63c(0x157)) / 0x1 + parseInt(_0xd0f63c(0x128)) / 0x2 * (-parseInt(_0xd0f63c(0xd5)) / 0x3) + parseInt(_0xd0f63c(0xa9)) / 0x4 + parseInt(_0xd0f63c(0x165)) / 0x5 * (-parseInt(_0xd0f63c(0xa8)) / 0x6) + parseInt(_0xd0f63c(0xd1)) / 0x7 * (-parseInt(_0xd0f63c(0xde)) / 0x8) + parseInt(_0xd0f63c(0x141)) / 0x9 + -parseInt(_0xd0f63c(0xd7)) / 0xa * (-parseInt(_0xd0f63c(0x113)) / 0xb);
            if (_0x404c82 === _0x2a55dd) break;
            else _0x6934f9['push'](_0x6934f9['shift']());
        } catch (_0x3f64fa) {
            _0x6934f9['push'](_0x6934f9['shift']());
        }
    }
}(_0x5601, 0x98b1e), process['env'][_0x2bb7bb(0x11b)] = '1');
import './config.js';
import './api.js';
import {
    createRequire
} from 'module';
import _0x37f144, {
    join
} from 'path';
import {
    fileURLToPath,
    pathToFileURL
} from 'url';
import {
    platform
} from 'process';
import * as _0x1edf0f from 'ws';
import {
    readdirSync,
    statSync,
    unlinkSync,
    existsSync,
    readFileSync,
    rmSync,
    watch
} from 'fs';
import _0x30263b from 'yargs';
import {
    spawn
} from 'child_process';
import _0x7b656a from 'lodash';
import _0x4ef6a9 from 'chalk';
import _0x503b29 from 'syntax-error';
import {
    tmpdir
} from 'os';
import {
    format
} from 'util';
import _0x563cb0 from 'pino';
import _0x35276e from 'pino';
import _0x1d7795 from 'pino';
import {
    Boom
} from '@hapi/boom';
import {
    makeWASocket,
    protoType,
    serialize
} from './lib/simple.js';
import {
    Low,
    JSONFile
} from 'lowdb';
import {
    mongoDB,
    mongoDBV2
} from './lib/mongoDB.js';
import _0x1de1ac from './lib/store.js';

function _0x203c(_0x10e896, _0x1f1da3) {
    const _0x560180 = _0x5601();
    return _0x203c = function (_0x203cdd, _0x468ec2) {
        _0x203cdd = _0x203cdd - 0xa4;
        let _0x47b4ab = _0x560180[_0x203cdd];
        return _0x47b4ab;
    }, _0x203c(_0x10e896, _0x1f1da3);
}
const {
    proto
} = (await import(_0x2bb7bb(0xaa)))['default'], {
    DisconnectReason,
    useMultiFileAuthState,
    MessageRetryMap,
    fetchLatestBaileysVersion,
    makeCacheableSignalKeyStore,
    jidNormalizedUser,
    PHONENUMBER_MCC
} = await import(_0x2bb7bb(0xaa));
import _0x5ba28e from 'readline';
import _0x15b805 from 'node-cache';
const {
    CONNECTING
} = _0x1edf0f, {
    chain
} = _0x7b656a, PORT = process['env']['PORT'] || process[_0x2bb7bb(0xf0)][_0x2bb7bb(0x14c)] || 0xbb8;
protoType(), serialize(), global[_0x2bb7bb(0x12b)] = function filename(_0x2b6896 =
    import.meta[_0x2bb7bb(0xe1)], _0x4d86f8 = platform !== _0x2bb7bb(0x13f)) {
    const _0x1b9761 = _0x2bb7bb;
    return _0x4d86f8 ? /file:\/\/\// [_0x1b9761(0xbe)](_0x2b6896) ? fileURLToPath(_0x2b6896) : _0x2b6896 : pathToFileURL(_0x2b6896)[_0x1b9761(0x154)]();
}, global[_0x2bb7bb(0xe5)] = function dirname(_0x4a23d3) {
    const _0x807e5d = _0x2bb7bb;
    return _0x37f144[_0x807e5d(0xa4)](global['__filename'](_0x4a23d3, !![]));
}, global[_0x2bb7bb(0xef)] = function require(_0x5272a =
    import.meta['url']) {
    return createRequire(_0x5272a);
}, global[_0x2bb7bb(0x14a)] = (_0x418aa8, _0x31690c = '/', _0x55642a = {}, _0x324539) => (_0x418aa8 in global[_0x2bb7bb(0x144)] ? global['APIs'][_0x418aa8] : _0x418aa8) + _0x31690c + (_0x55642a || _0x324539 ? '?' + new URLSearchParams(Object[_0x2bb7bb(0xd2)]({
    ..._0x55642a,
    ..._0x324539 ? {
        [_0x324539]: global['APIKeys'][_0x418aa8 in global[_0x2bb7bb(0x144)] ? global['APIs'][_0x418aa8] : _0x418aa8]
    } : {}
})) : ''), global[_0x2bb7bb(0x116)] = {
    'start': new Date()
}, global[_0x2bb7bb(0x10a)] = [], global[_0x2bb7bb(0x163)] = [];
const __dirname = global['__dirname'](
    import.meta[_0x2bb7bb(0xe1)]);
global[_0x2bb7bb(0xe6)] = new Object(_0x30263b(process[_0x2bb7bb(0x148)][_0x2bb7bb(0x156)](0x2))[_0x2bb7bb(0x135)](![])[_0x2bb7bb(0x12c)]()), global['prefix'] = new RegExp('^[' + (opts[_0x2bb7bb(0xab)] || _0x2bb7bb(0x15a))['replace'](/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']'), global['db'] = new Low(/https?:\/\// [_0x2bb7bb(0xbe)](opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile((opts['_'][0x0] ? opts['_'][0x0] + '_' : '') + _0x2bb7bb(0x166))), global[_0x2bb7bb(0xb8)] = global['db'], global[_0x2bb7bb(0xdf)] = async function loadDatabase() {
    const _0x1e98dc = _0x2bb7bb;
    if (global['db'][_0x1e98dc(0xe2)]) return new Promise(_0xfc8e63 => setInterval(async function () {
        const _0x1b0e7b = _0x1e98dc;
        !global['db'][_0x1b0e7b(0xe2)] && (clearInterval(this), _0xfc8e63(global['db'][_0x1b0e7b(0xbd)] == null ? global[_0x1b0e7b(0xdf)]() : global['db'][_0x1b0e7b(0xbd)]));
    }, 0x1 * 0x3e8));
    if (global['db'][_0x1e98dc(0xbd)] !== null) return;
    global['db']['READ'] = !![], await global['db'][_0x1e98dc(0xcd)]()[_0x1e98dc(0x158)](console[_0x1e98dc(0x101)]), global['db'][_0x1e98dc(0xe2)] = null, global['db'][_0x1e98dc(0xbd)] = {
        'users': {},
        'chats': {},
        'stats': {},
        'msgs': {},
        'sticker': {},
        'settings': {},
        ...global['db']['data'] || {}
    }, global['db'][_0x1e98dc(0x150)] = chain(global['db'][_0x1e98dc(0xbd)]);
}, loadDatabase(), global[_0x2bb7bb(0xc1)] = new Low(new JSONFile(_0x37f144['join'](__dirname, '/db/chatgpt.json'))), global[_0x2bb7bb(0xa6)] = async function loadChatgptDB() {
    const _0x1b1809 = _0x2bb7bb;
    if (global[_0x1b1809(0xc1)][_0x1b1809(0xe2)]) return new Promise(_0x56afd5 => setInterval(async function () {
        const _0x442e86 = _0x1b1809;
        !global[_0x442e86(0xc1)][_0x442e86(0xe2)] && (clearInterval(this), _0x56afd5(global[_0x442e86(0xc1)]['data'] === null ? global['loadChatgptDB']() : global[_0x442e86(0xc1)][_0x442e86(0xbd)]));
    }, 0x1 * 0x3e8));
    if (global[_0x1b1809(0xc1)][_0x1b1809(0xbd)] !== null) return;
    global[_0x1b1809(0xc1)]['READ'] = !![], await global[_0x1b1809(0xc1)]['read']()[_0x1b1809(0x158)](console[_0x1b1809(0x101)]), global[_0x1b1809(0xc1)][_0x1b1809(0xe2)] = null, global[_0x1b1809(0xc1)][_0x1b1809(0xbd)] = {
        'users': {},
        ...global[_0x1b1809(0xc1)][_0x1b1809(0xbd)] || {}
    }, global['chatgpt'][_0x1b1809(0x150)] = _0x7b656a[_0x1b1809(0x150)](global[_0x1b1809(0xc1)][_0x1b1809(0xbd)]);
}, loadChatgptDB(), global['authFile'] = _0x2bb7bb(0x143);
const {
    state,
    saveState,
    saveCreds
} = await useMultiFileAuthState(global[_0x2bb7bb(0x133)]), msgRetryCounterMap = _0x21593a => {}, msgRetryCounterCache = new _0x15b805(), {
    version
} = await fetchLatestBaileysVersion();
let phoneNumber = global[_0x2bb7bb(0xe9)];
const pairingCode = !!phoneNumber || process['argv'][_0x2bb7bb(0xb5)]('--pairing-code'),
    useMobile = process[_0x2bb7bb(0x148)]['includes']('--mobile'),
    rl = _0x5ba28e[_0x2bb7bb(0x12e)]({
        'input': process[_0x2bb7bb(0x15d)],
        'output': process[_0x2bb7bb(0xba)]
    }),
    question = _0x2d2d26 => new Promise(_0x493960 => rl[_0x2bb7bb(0xf2)](_0x2d2d26, _0x493960)),
    connectionOptions = {
        'logger': _0x35276e({
            'level': 'silent'
        }),
        'printQRInTerminal': !pairingCode,
        'mobile': useMobile,
        'browser': [_0x2bb7bb(0xf7), '', ''],
        'auth': {
            'creds': state['creds'],
            'keys': makeCacheableSignalKeyStore(state[_0x2bb7bb(0xd6)], _0x1d7795({
                'level': _0x2bb7bb(0xfa)
            })[_0x2bb7bb(0x161)]({
                'level': _0x2bb7bb(0xfa)
            }))
        },
        'markOnlineOnConnect': !![],
        'generateHighQualityLinkPreview': !![],
        'getMessage': async _0x4076e2 => {
            const _0x16ffd7 = _0x2bb7bb;
            let _0x232a1c = jidNormalizedUser(_0x4076e2[_0x16ffd7(0x14e)]),
                _0xb94484 = await _0x1de1ac[_0x16ffd7(0x103)](_0x232a1c, _0x4076e2['id']);
            return _0xb94484?. ['message'] || '';
        },
        'msgRetryCounterCache': msgRetryCounterCache,
        'msgRetryCounterMap': msgRetryCounterMap,
        'defaultQueryTimeoutMs': undefined,
        'version': version
    };

function _0x5601() {
    const _0x27caa7 = ['*[ ℹ️ ] The group invite link has been reset.*', 'read', 'loggedOut', 'updateProfileStatus', '*[ ℹ️ ] The group name has been changed.*', '4834949AdoOuJ', 'entries', 'endsWith', '[ ⚠ ] Connection timed out, reconnecting...', '6EEVaME', 'keys', '119090VCaoVd', ' and scan again.', '-frames:v', 'sRevoke', 'badSession', 'red', ' successfully deleted', '8wFtyVP', 'loadDatabase', 'syntax error while loading \'', 'url', 'READ', 'ffmpeg', 'groupsUpdate', '__dirname', 'opts', 'Archive ', 'reloadHandler', 'botnumber', '*[ ℹ️ ] The group profile photo has been changed.*', 'isChats', 'credsUpdate', 'push', 'match', '__require', 'env', 'startsWith', 'question', 'connect', 'server', 'call', '👋 ¡See you later!\x0a@user', 'Chrome (Linux)', 'open', ' not deleted', 'fatal', 'redBright', 'info', 'magick', 'Please write your WhatsApp number.\x0aExample: +212605784394 : ', 'warn', 'Start with the country code of your WhatsApp number.\x0aExample: +212605784394', 'error', '[ ⚠ ] Unknown disconnection reason. ', 'loadMessage', 'find', 'conn', 'output', 'deleted plugin - \'', 'now', 'callUpdate', 'videoList', '[ ⚠ ]Incorrect session, please delete the folder ', 'participantsUpdate', '[🌟] Connected successfully.', 'messages.upsert', 'bind', 'payload', 'bgBlack', '?update=', '1111aGRIzJ', './JitossaSession', 'log', 'timestamp', 'deleteUpdate', 'greenBright', 'groups.update', 'removeAllListeners', 'NODE_TLS_REJECT_UNAUTHORIZED', 'Can t use a pairing code with the Mobile API', 'bold', '--version', 'creds.update', 'tmp', 'sort', 'logger', 'connection.update', 'handler', 'color', '@g.us', 'some', '541096RMBQUJ', 'connectionLost', 'mtimeMs', '__filename', 'parse', 'jadibts', 'createInterface', 'exit', 'fromEntries', 'new plugin - \'', 'default', 'authFile', 'socket', 'exitProcess', 'ffprobe', 'webp', 'connectionUpdate', 'plugins', 'map', 'onDelete', '*[ ℹ️ ] @user He was demoted from administrator.*', 'length', 'padStart', 'win32', 'creds.json', '9059103ePKkOv', 'chats', 'JitossaSession', 'APIs', './tmp', 'floor', 'uncaughtException', 'argv', 'user', 'API', '-amin', 'SERVER_PORT', 'uptime', 'remoteJid', 'black', 'chain', './jadibts/', 'off', '*[ ℹ️ ] The group description has been modified.*', 'toString', 'filter', 'slice', '831678mPZlMx', 'catch', 'support', '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-.@', '👋 ¡Welcome/to!\x0a@user', 'error require plugin \'', 'stdin', '[😉] Scan the QR code or enter the pairing code in WhatsApp.', ' updated plugin - \'', 'bgGreen', 'child', 'freeze', 'videoListXXX', '[ 😁 ] Charging...\x0a', '5UISvRy', 'database.json', 'dirname', 'replace', 'loadChatgptDB', '[ ⚠ ] Lost connection to the server, reconnecting...', '3676902hTcSqT', '4369440ltNEDq', '@whiskeysockets/baileys', 'prefix', 'white', './JitossaSession/', 'welcome', 'forEach', './plugins/index', 'pre-key-', 'yellow', 'localeCompare', 'onCall', 'includes', 'then', '➚ ிEssaouidi ⎙ ✓ BOT [ ⏳ ] Uptime: ', 'DATABASE', 'statusCode', 'stdout', '-type', 'green', 'data', 'test', 'bye', 'authState', 'chatgpt', 'sdemote', './handler.js?update=', 'isInit', '-delete', '[ ⚠ ] Connection closed, please delete the folder ', './handler.js', 'join', 'close', 'reload', 'isFile'];
    _0x5601 = function () {
        return _0x27caa7;
    };
    return _0x5601();
}
global[_0x2bb7bb(0x105)] = makeWASocket(connectionOptions);
if (pairingCode && !conn[_0x2bb7bb(0xc0)]['creds']['registered']) {
    if (useMobile) throw new Error(_0x2bb7bb(0x11c));
    let numeroTelefono;
    !!phoneNumber ? (numeroTelefono = phoneNumber[_0x2bb7bb(0xa5)](/[^0-9]/g, ''), !Object[_0x2bb7bb(0xd6)](PHONENUMBER_MCC)[_0x2bb7bb(0x127)](_0x5a5d01 => numeroTelefono[_0x2bb7bb(0xf1)](_0x5a5d01)) && (console['log'](_0x4ef6a9['bgBlack'](_0x4ef6a9[_0x2bb7bb(0xfb)]('Start with the country code of your WhatsApp number.\x0aExample: +212605784394'))), process[_0x2bb7bb(0x12f)](0x0))) : (numeroTelefono = await question(_0x4ef6a9[_0x2bb7bb(0x111)](_0x4ef6a9[_0x2bb7bb(0x118)]('Please write your WhatsApp number.\x0aExample:+212605784394 : '))), numeroTelefono = numeroTelefono[_0x2bb7bb(0xa5)](/[^0-9]/g, ''), !Object[_0x2bb7bb(0xd6)](PHONENUMBER_MCC)['some'](_0xa39e0c => numeroTelefono[_0x2bb7bb(0xf1)](_0xa39e0c)) && (console[_0x2bb7bb(0x115)](_0x4ef6a9['bgBlack'](_0x4ef6a9[_0x2bb7bb(0xfb)](_0x2bb7bb(0x100)))), numeroTelefono = await question(_0x4ef6a9[_0x2bb7bb(0x111)](_0x4ef6a9[_0x2bb7bb(0x118)](_0x2bb7bb(0xfe)))), numeroTelefono = numeroTelefono[_0x2bb7bb(0xa5)](/[^0-9]/g, ''), rl[_0x2bb7bb(0xc9)]())), setTimeout(async () => {
        const _0x12a61c = _0x2bb7bb;
        let _0x14b0a3 = await conn['requestPairingCode'](numeroTelefono);
        _0x14b0a3 = _0x14b0a3?. [_0x12a61c(0xee)](/.{1,4}/g)?. ['join']('-') || _0x14b0a3, console[_0x12a61c(0x115)](_0x4ef6a9['black'](_0x4ef6a9[_0x12a61c(0x160)]('Your pairing code: ')), _0x4ef6a9[_0x12a61c(0x14f)](_0x4ef6a9[_0x12a61c(0xac)](_0x14b0a3)));
    }, 0xbb8);
}
conn[_0x2bb7bb(0xc4)] = ![], conn['well'] = ![], conn[_0x2bb7bb(0x122)]['info'](_0x2bb7bb(0x164));
!opts['test'] && (global['db'] && setInterval(async () => {
    const _0x4d1ee4 = _0x2bb7bb;
    if (global['db'][_0x4d1ee4(0xbd)]) await global['db']['write']();
    if (opts['autocleartmp'] && (global[_0x4d1ee4(0x159)] || {})[_0x4d1ee4(0x104)]) tmp = [os['tmpdir'](), _0x4d1ee4(0x120), _0x4d1ee4(0x12d)], tmp[_0x4d1ee4(0xaf)](_0x232d33 => cp['spawn'](_0x4d1ee4(0x104), [_0x232d33, _0x4d1ee4(0x14b), '3', _0x4d1ee4(0xbb), 'f', _0x4d1ee4(0xc5)]));
}, 0x1e * 0x3e8));
if (opts[_0x2bb7bb(0xf4)])(await import('./server.js'))['default'](global[_0x2bb7bb(0x105)], PORT);

function clearTmp() {
    const _0x336cce = _0x2bb7bb,
        _0x65f2f3 = [join(__dirname, _0x336cce(0x145))],
        _0x2acc0f = [];
    return _0x65f2f3[_0x336cce(0xaf)](_0x4eb755 => readdirSync(_0x4eb755)[_0x336cce(0xaf)](_0x14385f => _0x2acc0f[_0x336cce(0xed)](join(_0x4eb755, _0x14385f)))), _0x2acc0f[_0x336cce(0x13a)](_0x27c951 => {
        const _0x520e3f = _0x336cce,
            _0x398d22 = statSync(_0x27c951);
        if (_0x398d22[_0x520e3f(0xcb)]() && Date[_0x520e3f(0x108)]() - _0x398d22['mtimeMs'] >= 0x3e8 * 0x3c * 0x3) return unlinkSync(_0x27c951);
        return ![];
    });
}

function purgeSession() {
    const _0x552425 = _0x2bb7bb;
    let _0x5edbf8 = [],
        _0x3e231a = readdirSync(_0x552425(0x114)),
        _0x5e5234 = _0x3e231a[_0x552425(0x155)](_0x4d749f => {
            const _0x5500a3 = _0x552425;
            return _0x4d749f[_0x5500a3(0xf1)](_0x5500a3(0xb1));
        });
    _0x5edbf8 = [..._0x5edbf8, ..._0x5e5234], _0x5e5234['forEach'](_0x589967 => {
        const _0x3ef14a = _0x552425;
        unlinkSync(_0x3ef14a(0xad) + _0x589967);
    });
}

function purgeSessionSB() {
    const _0x151816 = _0x2bb7bb;
    try {
        let _0x4cd045 = readdirSync(_0x151816(0x151)),
            _0x22d927 = [];
        _0x4cd045['forEach'](_0x5be26f => {
            const _0xd2b3ad = _0x151816;
            if (statSync('./jadibts/' + _0x5be26f)['isDirectory']()) {
                let _0x2e99ea = readdirSync(_0xd2b3ad(0x151) + _0x5be26f)['filter'](_0x650d36 => {
                    const _0x8a0885 = _0xd2b3ad;
                    return _0x650d36['startsWith'](_0x8a0885(0xb1));
                });
                _0x22d927 = [..._0x22d927, ..._0x2e99ea], _0x2e99ea[_0xd2b3ad(0xaf)](_0x28db06 => {
                    const _0x134ae4 = _0xd2b3ad;
                    unlinkSync(_0x134ae4(0x151) + _0x5be26f + '/' + _0x28db06);
                });
            }
        });
        if (_0x22d927[_0x151816(0x13d)] === 0x0) return;
    } catch (_0x2e0a6b) {
        console[_0x151816(0x115)](_0x4ef6a9[_0x151816(0x11d)][_0x151816(0xdc)]('[😔] Something went wrong during deletion, files not deleted'));
    }
}

function purgeOldFiles() {
    const _0x120af3 = _0x2bb7bb,
        _0x534b75 = [_0x120af3(0xad), _0x120af3(0x151)],
        _0x4f65d0 = Date[_0x120af3(0x108)]() - 0x3c * 0x3c * 0x3e8;
    _0x534b75[_0x120af3(0xaf)](_0x5980a1 => {
        readdirSync(_0x5980a1, (_0x33e69f, _0x5360ae) => {
            const _0x1e6670 = _0x203c;
            if (_0x33e69f) throw _0x33e69f;
            _0x5360ae[_0x1e6670(0xaf)](_0x2e6582 => {
                const _0x21e131 = _0x37f144['join'](_0x5980a1, _0x2e6582);
                stat(_0x21e131, (_0x57e864, _0x3ad32f) => {
                    const _0x37f2eb = _0x203c;
                    if (_0x57e864) throw _0x57e864;
                    _0x3ad32f[_0x37f2eb(0xcb)]() && _0x3ad32f[_0x37f2eb(0x12a)] < _0x4f65d0 && _0x2e6582 !== _0x37f2eb(0x140) ? unlinkSync(_0x21e131, _0x17aecd => {
                        const _0x2dc9f4 = _0x37f2eb;
                        if (_0x17aecd) throw _0x17aecd;
                        console[_0x2dc9f4(0x115)](_0x4ef6a9[_0x2dc9f4(0x11d)][_0x2dc9f4(0xbc)](_0x2dc9f4(0xe7) + _0x2e6582 + _0x2dc9f4(0xdd)));
                    }) : console[_0x37f2eb(0x115)](_0x4ef6a9[_0x37f2eb(0x11d)][_0x37f2eb(0xdc)](_0x37f2eb(0xe7) + _0x2e6582 + _0x37f2eb(0xf9) + _0x57e864));
                });
            });
        });
    });
}
async function connectionUpdate(_0x10e440) {
    const _0x51e57d = _0x2bb7bb,
        {
            connection: _0x20f11f,
            lastDisconnect: _0x51c478,
            isNewLogin: _0x19a3f7
        } = _0x10e440;
    global['stopped'] = _0x20f11f;
    if (_0x19a3f7) conn[_0x51e57d(0xc4)] = !![];
    const _0x22b629 = _0x51c478?. [_0x51e57d(0x101)]?. ['output']?. [_0x51e57d(0xb9)] || _0x51c478?. [_0x51e57d(0x101)]?. [_0x51e57d(0x106)]?. [_0x51e57d(0x110)]?. [_0x51e57d(0xb9)];
    _0x22b629 && _0x22b629 !== DisconnectReason[_0x51e57d(0xce)] && conn?. ['ws'][_0x51e57d(0x134)] == null && (await global[_0x51e57d(0xe8)](!![])[_0x51e57d(0x158)](console['error']), global[_0x51e57d(0x116)][_0x51e57d(0xf3)] = new Date());
    if (global['db'][_0x51e57d(0xbd)] == null) loadDatabase();
    _0x10e440['qr'] != 0x0 && _0x10e440['qr'] != undefined && console[_0x51e57d(0x115)](_0x4ef6a9[_0x51e57d(0xb2)](_0x51e57d(0x15e)));
    _0x20f11f == _0x51e57d(0xf8) && console[_0x51e57d(0x115)](_0x4ef6a9[_0x51e57d(0xb2)](_0x51e57d(0x10d)));
    let _0x210259 = new Boom(_0x51c478?. [_0x51e57d(0x101)])?. [_0x51e57d(0x106)]?. ['statusCode'];
    if (_0x20f11f === _0x51e57d(0xc9)) {
        if (_0x210259 === DisconnectReason[_0x51e57d(0xdb)]) conn[_0x51e57d(0x122)][_0x51e57d(0x101)](_0x51e57d(0x10b) + global[_0x51e57d(0x133)] + _0x51e57d(0xd8));
        else {
            if (_0x210259 === DisconnectReason['connectionClosed']) conn['logger'][_0x51e57d(0xff)]('[ ⚠ ] Connection closed, reconnecting...'), await global['reloadHandler'](!![])[_0x51e57d(0x158)](console[_0x51e57d(0x101)]);
            else {
                if (_0x210259 === DisconnectReason[_0x51e57d(0x129)]) conn[_0x51e57d(0x122)]['warn'](_0x51e57d(0xa7)), await global[_0x51e57d(0xe8)](!![])[_0x51e57d(0x158)](console[_0x51e57d(0x101)]);
                else {
                    if (_0x210259 === DisconnectReason['connectionReplaced']) conn['logger'][_0x51e57d(0x101)]('[ ⚠ ] Connection replaced, another new session has been opened. Please log out of the current session first.');
                    else {
                        if (_0x210259 === DisconnectReason['loggedOut']) conn['logger'][_0x51e57d(0x101)](_0x51e57d(0xc6) + global['authFile'] + _0x51e57d(0xd8));
                        else {
                            if (_0x210259 === DisconnectReason['restartRequired']) conn['logger']['info']('[ ⚠ ] Reboot required, restart the server if you have any problems.'), await global[_0x51e57d(0xe8)](!![])[_0x51e57d(0x158)](console[_0x51e57d(0x101)]);
                            else _0x210259 === DisconnectReason['timedOut'] ? (conn[_0x51e57d(0x122)]['warn'](_0x51e57d(0xd4)), await global[_0x51e57d(0xe8)](!![])[_0x51e57d(0x158)](console[_0x51e57d(0x101)])) : (conn[_0x51e57d(0x122)]['warn'](_0x51e57d(0x102) + (_0x210259 || '') + ': ' + (_0x20f11f || '')), await global[_0x51e57d(0xe8)](!![])[_0x51e57d(0x158)](console[_0x51e57d(0x101)]));
                        }
                    }
                }
            }
        }
    }
}
process['on'](_0x2bb7bb(0x147), console[_0x2bb7bb(0x101)]);
let isInit = !![],
    handler = await import(_0x2bb7bb(0xc7));
global[_0x2bb7bb(0xe8)] = async function (_0x1339f3) {
    const _0x4c8980 = _0x2bb7bb;
    try {
        const _0x37a24d = await import(_0x4c8980(0xc3) + Date[_0x4c8980(0x108)]())['catch'](console[_0x4c8980(0x101)]);
        if (Object['keys'](_0x37a24d || {})[_0x4c8980(0x13d)]) handler = _0x37a24d;
    } catch (_0x4933e1) {
        console['error'](_0x4933e1);
    }
    if (_0x1339f3) {
        const _0x1310b9 = global['conn'][_0x4c8980(0x142)];
        try {
            global[_0x4c8980(0x105)]['ws']['close']();
        } catch {}
        conn['ev'][_0x4c8980(0x11a)](), global[_0x4c8980(0x105)] = makeWASocket(connectionOptions, {
            'chats': _0x1310b9
        }), isInit = !![];
    }!isInit && (conn['ev'][_0x4c8980(0x152)](_0x4c8980(0x10e), conn[_0x4c8980(0x124)]), conn['ev'][_0x4c8980(0x152)]('group-participants.update', conn[_0x4c8980(0x10c)]), conn['ev'][_0x4c8980(0x152)]('groups.update', conn[_0x4c8980(0xe4)]), conn['ev'][_0x4c8980(0x152)]('message.delete', conn[_0x4c8980(0x13b)]), conn['ev']['off'](_0x4c8980(0xf5), conn[_0x4c8980(0xb4)]), conn['ev'][_0x4c8980(0x152)](_0x4c8980(0x123), conn[_0x4c8980(0x138)]), conn['ev']['off'](_0x4c8980(0x11f), conn[_0x4c8980(0xec)]));
    conn[_0x4c8980(0xae)] = _0x4c8980(0x15b), conn[_0x4c8980(0xbf)] = _0x4c8980(0xf6), conn['spromote'] = '*[ ℹ️ ] @user He was promoted to administrator.*', conn[_0x4c8980(0xc2)] = _0x4c8980(0x13c), conn['sDesc'] = _0x4c8980(0x153), conn['sSubject'] = _0x4c8980(0xd0), conn['sIcon'] = _0x4c8980(0xea), conn[_0x4c8980(0xda)] = _0x4c8980(0xcc), conn[_0x4c8980(0x124)] = handler[_0x4c8980(0x124)][_0x4c8980(0x10f)](global['conn']), conn[_0x4c8980(0x10c)] = handler['participantsUpdate'][_0x4c8980(0x10f)](global[_0x4c8980(0x105)]), conn[_0x4c8980(0xe4)] = handler[_0x4c8980(0xe4)]['bind'](global['conn']), conn[_0x4c8980(0x13b)] = handler[_0x4c8980(0x117)][_0x4c8980(0x10f)](global[_0x4c8980(0x105)]), conn[_0x4c8980(0xb4)] = handler[_0x4c8980(0x109)][_0x4c8980(0x10f)](global[_0x4c8980(0x105)]), conn[_0x4c8980(0x138)] = connectionUpdate[_0x4c8980(0x10f)](global['conn']), conn[_0x4c8980(0xec)] = saveCreds[_0x4c8980(0x10f)](global[_0x4c8980(0x105)], !![]);
    const _0x52286f = new Date(),
        _0x372646 = new Date(conn['ev']);
    if (_0x52286f >= _0x372646) {
        const _0x31fd3a = Object['entries'](conn[_0x4c8980(0x142)])[_0x4c8980(0x155)](([_0x2e4b74, _0x41df9d]) => !_0x2e4b74[_0x4c8980(0xd3)](_0x4c8980(0x126)) && _0x41df9d['isChats'])['map'](_0xe20d51 => _0xe20d51[0x0]);
    } else {
        const _0x58a22f = Object[_0x4c8980(0xd2)](conn['chats'])['filter'](([_0x257279, _0x2d9aa9]) => !_0x257279[_0x4c8980(0xd3)]('@g.us') && _0x2d9aa9[_0x4c8980(0xeb)])[_0x4c8980(0x13a)](_0x30c43e => _0x30c43e[0x0]);
    }
    return conn['ev']['on'](_0x4c8980(0x10e), conn[_0x4c8980(0x124)]), conn['ev']['on']('group-participants.update', conn[_0x4c8980(0x10c)]), conn['ev']['on'](_0x4c8980(0x119), conn[_0x4c8980(0xe4)]), conn['ev']['on']('message.delete', conn[_0x4c8980(0x13b)]), conn['ev']['on']('call', conn[_0x4c8980(0xb4)]), conn['ev']['on'](_0x4c8980(0x123), conn[_0x4c8980(0x138)]), conn['ev']['on'](_0x4c8980(0x11f), conn[_0x4c8980(0xec)]), isInit = ![], !![];
};
const pluginFolder = global['__dirname'](join(__dirname, _0x2bb7bb(0xb0))),
    pluginFilter = _0xe0f368 => /\.js$/ [_0x2bb7bb(0xbe)](_0xe0f368);
global[_0x2bb7bb(0x139)] = {};
async function filesInit() {
    const _0x4b0374 = _0x2bb7bb;
    for (const _0xcc5d33 of readdirSync(pluginFolder)[_0x4b0374(0x155)](pluginFilter)) {
        try {
            const _0x5ae7b4 = global[_0x4b0374(0x12b)](join(pluginFolder, _0xcc5d33)),
                _0x226737 = await import(_0x5ae7b4);
            global[_0x4b0374(0x139)][_0xcc5d33] = _0x226737[_0x4b0374(0x132)] || _0x226737;
        } catch (_0x1258a2) {
            conn[_0x4b0374(0x122)][_0x4b0374(0x101)](_0x1258a2), delete global['plugins'][_0xcc5d33];
        }
    }
}
filesInit()[_0x2bb7bb(0xb6)](_0x5e8bf5 => Object['keys'](global[_0x2bb7bb(0x139)]))[_0x2bb7bb(0x158)](console[_0x2bb7bb(0x101)]), global['reload'] = async (_0x30a981, _0x2870f0) => {
    const _0xb3af39 = _0x2bb7bb;
    if (pluginFilter(_0x2870f0)) {
        const _0x53cd9f = global[_0xb3af39(0x12b)](join(pluginFolder, _0x2870f0), !![]);
        if (_0x2870f0 in global['plugins']) {
            if (existsSync(_0x53cd9f)) conn[_0xb3af39(0x122)]['info'](_0xb3af39(0x15f) + _0x2870f0 + '\'');
            else return conn[_0xb3af39(0x122)][_0xb3af39(0xff)](_0xb3af39(0x107) + _0x2870f0 + '\''), delete global['plugins'][_0x2870f0];
        } else conn[_0xb3af39(0x122)][_0xb3af39(0xfc)](_0xb3af39(0x131) + _0x2870f0 + '\'');
        const _0x52cc45 = _0x503b29(readFileSync(_0x53cd9f), _0x2870f0, {
            'sourceType': 'module',
            'allowAwaitOutsideFunction': !![]
        });
        if (_0x52cc45) conn['logger'][_0xb3af39(0x101)](_0xb3af39(0xe0) + _0x2870f0 + '\'\x0a' + format(_0x52cc45));
        else try {
            const _0x1055b3 = await import(global['__filename'](_0x53cd9f) + _0xb3af39(0x112) + Date[_0xb3af39(0x108)]());
            global[_0xb3af39(0x139)][_0x2870f0] = _0x1055b3[_0xb3af39(0x132)] || _0x1055b3;
        } catch (_0x166abe) {
            conn[_0xb3af39(0x122)][_0xb3af39(0x101)](_0xb3af39(0x15c) + _0x2870f0 + '\x0a' + format(_0x166abe) + '\'');
        } finally {
            global[_0xb3af39(0x139)] = Object[_0xb3af39(0x130)](Object[_0xb3af39(0xd2)](global['plugins'])[_0xb3af39(0x121)](([_0x42cefc], [_0x233345]) => _0x42cefc[_0xb3af39(0xb3)](_0x233345)));
        }
    }
}, Object[_0x2bb7bb(0x162)](global[_0x2bb7bb(0xca)]), watch(pluginFolder, global[_0x2bb7bb(0xca)]), await global[_0x2bb7bb(0xe8)]();
async function _quickTest() {
    const _0x3084e6 = _0x2bb7bb,
        _0x412cc6 = await Promise['all']([spawn(_0x3084e6(0xe3)), spawn(_0x3084e6(0x136)), spawn(_0x3084e6(0xe3), ['-hide_banner', '-loglevel', _0x3084e6(0x101), '-filter_complex', _0x3084e6(0x125), _0x3084e6(0xd9), '1', '-f', _0x3084e6(0x137), '-']), spawn('convert'), spawn(_0x3084e6(0xfd)), spawn('gm'), spawn('find', [_0x3084e6(0x11e)])]['map'](_0x44e036 => {
            return Promise['race']([new Promise(_0x5d4fe6 => {
                const _0xab9d09 = _0x203c;
                _0x44e036['on'](_0xab9d09(0xc9), _0x88f286 => {
                    _0x5d4fe6(_0x88f286 !== 0x7f);
                });
            }), new Promise(_0x526f50 => {
                const _0x1e9a9f = _0x203c;
                _0x44e036['on'](_0x1e9a9f(0x101), _0x47e125 => _0x526f50(![]));
            })]);
        })),
        [_0x286dc5, _0x1a3a62, _0x1f368e, _0x37c695, _0x52fd23, _0xe5dcc2, _0x5bbd85] = _0x412cc6,
        _0x578015 = global[_0x3084e6(0x159)] = {
            'ffmpeg': _0x286dc5,
            'ffprobe': _0x1a3a62,
            'ffmpegWebp': _0x1f368e,
            'convert': _0x37c695,
            'magick': _0x52fd23,
            'gm': _0xe5dcc2,
            'find': _0x5bbd85
        };
    Object[_0x3084e6(0x162)](global[_0x3084e6(0x159)]);
}
setInterval(async () => {
    const _0x492a93 = _0x2bb7bb;
    if (stopped === _0x492a93(0xc9) || !conn || !conn['user']) return;
    const _0x20625c = await clearTmp();
}, 0x2bf20), setInterval(async () => {
    const _0x490336 = _0x2bb7bb;
    if (stopped === _0x490336(0xc9) || !conn || !conn['user']) return;
    await purgeSession();
}, 0x3e8 * 0x3c * 0x3c), setInterval(async () => {
    const _0x32d9c5 = _0x2bb7bb;
    if (stopped === _0x32d9c5(0xc9) || !conn || !conn[_0x32d9c5(0x149)]) return;
    await purgeSessionSB();
}, 0x3e8 * 0x3c * 0x3c), setInterval(async () => {
    const _0x1dcb6d = _0x2bb7bb;
    if (stopped === _0x1dcb6d(0xc9) || !conn || !conn[_0x1dcb6d(0x149)]) return;
    await purgeOldFiles();
}, 0x3e8 * 0x3c * 0x3c), setInterval(async () => {
    const _0x5d1fdb = _0x2bb7bb;
    if (stopped === _0x5d1fdb(0xc9) || !conn || !conn[_0x5d1fdb(0x149)]) return;
    const _0x1c36d6 = process[_0x5d1fdb(0x14d)]() * 0x3e8,
        _0x44299f = clockString(_0x1c36d6),
        _0x3697f9 = _0x5d1fdb(0xb7) + _0x44299f;
    await conn[_0x5d1fdb(0xcf)](_0x3697f9)['catch'](_0x30e2c6 => _0x30e2c6);
}, 0xea60);

function clockString(_0x507dd3) {
    const _0x96a652 = _0x2bb7bb,
        _0x4c6d79 = isNaN(_0x507dd3) ? '--' : Math[_0x96a652(0x146)](_0x507dd3 / 0x5265c00),
        _0x2bf351 = isNaN(_0x507dd3) ? '--' : Math[_0x96a652(0x146)](_0x507dd3 / 0x36ee80) % 0x18,
        _0x1f5bcd = isNaN(_0x507dd3) ? '--' : Math[_0x96a652(0x146)](_0x507dd3 / 0xea60) % 0x3c,
        _0xcae4d8 = isNaN(_0x507dd3) ? '--' : Math[_0x96a652(0x146)](_0x507dd3 / 0x3e8) % 0x3c;
    return [_0x4c6d79, 'd ️', _0x2bf351, 'h ', _0x1f5bcd, 'm ', _0xcae4d8, 's '][_0x96a652(0x13a)](_0x529fe7 => _0x529fe7['toString']()[_0x96a652(0x13e)](0x2, 0x0))[_0x96a652(0xc8)]('');
}
_quickTest()['catch'](console[_0x2bb7bb(0x101)]);
