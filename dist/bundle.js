(() => {
    var r = {
            790: (r) => {
                function n(r, n) {
                    var e = 'Hello',
                        o = ' and ',
                        u = '.',
                        f = ', ';
                    if (
                        ('fr' === n && ((e = 'Bonjour'), (o = ' et ')),
                        'nl' === n && ((e = 'Hallo'), (o = ' en ')),
                        t(r[0]) &&
                            ((e = o.toUpperCase() + e.toUpperCase()),
                            (o = o.toUpperCase()),
                            (u = '!'),
                            (f = ' ')),
                        1 === r.length)
                    )
                        return e + f + r[0] + u;
                    for (var i = 0; i < r.length; i++) {
                        if (i === r.length - 1) return e + o + r[i] + u;
                        e += i > 0 ? ', ' + r[i] : f + r[i];
                    }
                }
                function t(r) {
                    return r === r.toUpperCase();
                }
                r.exports = function (r) {
                    if (Array.isArray(r)) {
                        var e = n(
                                (function (r) {
                                    return r.filter(function (r) {
                                        return (
                                            !t(r) && 'fr' !== r && 'nl' !== r
                                        );
                                    });
                                })(r),
                                r[r.length - 1]
                            ),
                            o = (function (r) {
                                return r.filter(function (r) {
                                    return t(r) && 'fr' !== r && 'nl' !== r;
                                });
                            })(r);
                        return 0 === o.length ? e : e + n(o, r[r.length - 1]);
                    }
                    return (function (r) {
                        return !r || '' === r.trim();
                    })(r)
                        ? 'Hello, my friend.'
                        : t(r)
                        ? 'HELLO, ' + r + '!'
                        : 'Hello, ' + r + '.';
                };
            },
        },
        n = {};
    !(function t(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var u = (n[e] = { exports: {} });
        return r[e](u, u.exports, t), u.exports;
    })(790);
})();
