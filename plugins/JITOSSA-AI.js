(function (_0x20da21, _0x39abff) {
    const _0x2e4be6 = _0x554a,
        _0x1b49ce = _0x20da21();
    while (!![]) {
        try {
            const _0x3051f1 = parseInt(_0x2e4be6(0x16f)) / 0x1 * (parseInt(_0x2e4be6(0x15a)) / 0x2) + -parseInt(_0x2e4be6(0x16d)) / 0x3 * (-parseInt(_0x2e4be6(0x16a)) / 0x4) + parseInt(_0x2e4be6(0x163)) / 0x5 + -parseInt(_0x2e4be6(0x166)) / 0x6 + -parseInt(_0x2e4be6(0x16e)) / 0x7 + parseInt(_0x2e4be6(0x15f)) / 0x8 * (parseInt(_0x2e4be6(0x16c)) / 0x9) + parseInt(_0x2e4be6(0x15c)) / 0xa * (parseInt(_0x2e4be6(0x161)) / 0xb);
            if (_0x3051f1 === _0x39abff) break;
            else _0x1b49ce['push'](_0x1b49ce['shift']());
        } catch (_0x4aac45) {
            _0x1b49ce['push'](_0x1b49ce['shift']());
        }
    }
}(_0x61ab, 0x4f765));
import _0x17cc9d from 'axios';
let handler = async (_0x5d33c0, {
    conn: _0x353936
}) => {
    const _0x51bff8 = _0x554a;
    _0x353936[_0x51bff8(0x157)] = _0x353936[_0x51bff8(0x157)] ? _0x353936[_0x51bff8(0x157)] : {};
    if (!_0x5d33c0[_0x51bff8(0x158)] || _0x5d33c0['isBaileys'] || _0x5d33c0[_0x51bff8(0x158)][_0x51bff8(0x15b)]('http://') || _0x5d33c0[_0x51bff8(0x158)][_0x51bff8(0x15b)](_0x51bff8(0x160))) return;
    let _0x464cdc = 'JITOSSA AI';
    const _0x56c8ba = [{
        'role': _0x51bff8(0x15d),
        'content': 'أنا بوت واتساب، اسمي ' + _0xESSAOUIDI AI
    }, {
        'role': _0x51bff8(0x167),
        'content': _0x5d33c0['text']
    }];
    try {
        const _0x1c5833 = await _0x17cc9d[_0x51bff8(0x168)]('https://deepenglish.com/wp-json/ai-chatbot/v1/chat', {
                'messages': _0x56c8ba
            }),
            _0x45d0b4 = _0x1c5833['data'],
            _0x25580e = _0x45d0b4;
        _0x5d33c0['reply'](_0x25580e[_0x51bff8(0x159)]);
    } catch (_0x4b5b57) {
        console[_0x51bff8(0x171)]('حدث خطأ أثناء جلب البيانات:', _0x4b5b57);
        throw _0x4b5b57;
    }
};

function _0x61ab() {
    const _0x1a6771 = ['404899tXLEOi', 'isBaileys', '1456415xIKwrB', 'ESSAOUIDI AI', 'حدث خطأ أثناء جلب البيانات:', '2327310tcgLZg', 'user', 'post', 'https://deepenglish.com/wp-json/ai-chatbot/v1/chat', '5116oHeKPj', 'http://', '23346VBPwPI', '1269QZwYyW', '4285358zOeDHw', '16zyzpeo', 'reply', 'error', 'autoai', 'text', 'answer', '8882lXtFzp', 'includes', '40eEkaGb', 'system', 'data', '848fndFZy', 'https://'];
    _0x61ab = function () {
        return _0x1a6771;
    };
    return _0x61ab();
}
handler['before'] = async (_0x145c84, {
    conn: _0x1b1faf
}) => {
    const _0x587b0d = _0x554a;
    _0x1b1faf['autoai'] = _0x1b1faf[_0x587b0d(0x157)] ? _0x1b1faf['autoai'] : {};
    if (!_0x145c84['text'] || _0x145c84[_0x587b0d(0x162)] || _0x145c84[_0x587b0d(0x158)][_0x587b0d(0x15b)](_0x587b0d(0x16b)) || _0x145c84[_0x587b0d(0x158)][_0x587b0d(0x15b)]('https://')) return;
    let _0x3d95e4 = _0x587b0d(0x164);
    const _0x50d0cb = [{
        'role': _0x587b0d(0x15d),
        'content': 'أنا بوت واتساب، اسمي ' + _0xESSAOUIDI AI
    }, {
        'role': 'user',
        'content': _0x145c84[_0x587b0d(0x158)]
    }];
    try {
        const _0x5edae7 = await _0x17cc9d[_0x587b0d(0x168)](_0x587b0d(0x169), {
                'messages': _0x50d0cb
            }),
            _0x2c62c4 = _0x5edae7[_0x587b0d(0x15e)],
            _0x3fa33e = _0x2c62c4;
        _0x145c84[_0x587b0d(0x170)](_0x3fa33e['answer']);
    } catch (_0x58a095) {
        console['error'](_0x587b0d(0x165), _0x58a095);
        throw _0x58a095;
    }
};

function _0x554a(_0x15583f, _0x5c8d93) {
    const _0x61ab4a = _0x61ab();
    return _0x554a = function (_0x554a47, _0xddd092) {
        _0x554a47 = _0x554a47 - 0x157;
        let _0x5e360a = _0x61ab4a[_0x554a47];
        return _0x5e360a;
    }, _0x554a(_0x15583f, _0x5c8d93);
}
export default handler;
