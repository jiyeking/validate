import assert from 'power-assert';
import Schema from '../src';

/* global describe, it */
describe('format', () => {

    describe('validate', () => {
        describe('url', () => {
            it('works for empty string', done => {
                new Schema({
                    v: {
                        format: 'url',
                    },
                }).validate(
                    {
                        v: '',
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for ip url', done => {
                new Schema({
                    v: {
                        format: 'url',
                    },
                }).validate(
                    {
                        v: 'http://10.218.136.29/talent-tree/src/index.html',
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for type url', done => {
                new Schema({
                    v: {
                        format: 'url',
                    },
                }).validate(
                    {
                        v: 'http://www.taobao.com',
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for type url has query', done => {
                new Schema({
                    v: {
                        format: 'url',
                    },
                }).validate(
                    {
                        v: 'http://www.taobao.com/abc?a=a',
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for type url has hash', done => {
                new Schema({
                    v: {
                        format: 'url',
                    },
                }).validate(
                    {
                        v: 'http://www.taobao.com/abc#!abc',
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for type url has query and has', done => {
                new Schema({
                    v: {
                        format: 'url',
                    },
                }).validate(
                    {
                        v: 'http://www.taobao.com/abc?abc=%23&b=a~c#abc',
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for type not a valid url', done => {
                new Schema({
                    v: {
                        format: 'url',
                    },
                }).validate(
                    {
                        v: 'http://www.taobao.com/abc?abc=%23&b=  a~c#abc    ',
                    },
                    errors => {
                        assert(errors.length === 1);
                        assert(errors[0].message === 'v 不是合法的 URL 地址');
                        done();
                    }
                );
            });
    
            it('support skip schema', done => {
                new Schema({
                    v: {
                        format: 'url',
                    },
                }).validate(
                    {
                        v: '//g.cn',
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });
        });
    
        describe('email', () => {
            it('works for empty string', done => {
                new Schema({
                    v: {
                        format: 'email',
                    },
                }).validate(
                    {
                        v: '',
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for normal email', done => {
                new Schema({
                    v: {
                        format: 'email',
                    },
                }).validate(
                    {
                        v: 'bindoon@sina.com',
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });

            it('works for chinese email', done => {
                new Schema({
                    v: {
                        format: 'email',
                    },
                }).validate(
                    {
                        v: 'bindoon@sina.中国',
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('not valid email', done => {
                new Schema({
                    v: {
                        format: 'email',
                    },
                }).validate(
                    {
                        v: 'bindoon@sina .com',
                    },
                    errors => {
                        assert(errors.length === 1);
                        assert(errors[0].message === 'v 不是合法的 email 地址');
                        done();
                    }
                );
            });
        });
    
        describe('number', () => {
            it('works for empty string', done => {
                new Schema({
                    v: {
                        format: 'number',
                    },
                }).validate(
                    {
                        v: '',
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for string number', done => {
                new Schema({
                    v: {
                        format: 'number',
                    },
                }).validate(
                    {
                        v: '123456',
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for integer number', done => {
                new Schema({
                    v: {
                        format: 'number',
                    },
                }).validate(
                    {
                        v: 123456,
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('not valid number', done => {
                new Schema({
                    v: {
                        format: 'number',
                    },
                }).validate(
                    {
                        v: '1zbcd',
                    },
                    errors => {
                        assert(errors.length === 1);
                        assert(errors[0].message === 'v 不是合法的数字');
                        done();
                    }
                );
            });
        });
    
        describe('tel', () => {
            it('works for empty string', done => {
                new Schema({
                    v: {
                        format: 'tel',
                    },
                }).validate(
                    {
                        v: '',
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for string tel', done => {
                new Schema({
                    v: {
                        format: 'tel',
                    },
                    v2: {
                        format: 'tel',
                    },
                    v3: {
                        format: 'tel',
                    },
                }).validate(
                    {
                        v: '15688888888',
                        v2: '400-800-8888',
                        v3: '0513-8888888',
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('not valid tel', done => {
                new Schema({
                    v: {
                        format: 'tel',
                    },
                    v2: {
                        format: 'tel',
                    },
                }).validate(
                    {
                        v: '1zbcd',
                        v2: '15688888888abcd',
                    },
                    errors => {
                        assert(errors.length === 2);
                        assert(errors[0].message === 'v 不是合法的电话号码');
                        done();
                    }
                );
            });
        });

        describe('IDNumber', () => {
            it('works for empty string', done => {
                new Schema({
                    v: {
                        format: 'IDNumber',
                    },
                }).validate(
                    {
                        v: '',
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });

            it('works for normal IDNumber', done => {
                new Schema({
                    v: {
                        format: 'IDNumber',
                    },
                }).validate(
                    {
                        v: '53010219200508011X',
                    },
                    errors => {
                        assert(errors === null);
                        done();
                    }
                );
            });

            it('not valid IDNumber', done => {
                new Schema({
                    v: {
                        format: 'IDNumber',
                    },
                }).validate(
                    {
                        v: '1234566789012309872',
                    },
                    errors => {
                        assert(errors.length === 1);
                        assert(errors[0].message === 'v 不是合法的身份证号码');
                        done();
                    }
                );
            });
        });
    })

    describe('validatePromise', () => {
        describe('url', () => {
            it('works for empty string', done => {
                new Schema({
                    v: {
                        format: 'url',
                    },
                }).validate(
                    {
                        v: '',
                    }).then(
                    ({errors}) => {
                        assert.equal(errors, null);
                        done();
                    }
                );
            });
    
            it('works for ip url', done => {
                new Schema({
                    v: {
                        format: 'url',
                    },
                }).validatePromise(
                    {
                        v: 'http://10.218.136.29/talent-tree/src/index.html',
                    }).then(({errors}) => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for type url', done => {
                new Schema({
                    v: {
                        format: 'url',
                    },
                }).validatePromise(
                    {
                        v: 'http://www.taobao.com',
                    }).then(({errors}) => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for type url has query', done => {
                new Schema({
                    v: {
                        format: 'url',
                    },
                }).validatePromise(
                    {
                        v: 'http://www.taobao.com/abc?a=a',
                    }).then(({errors}) => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for type url has hash', done => {
                new Schema({
                    v: {
                        format: 'url',
                    },
                }).validatePromise(
                    {
                        v: 'http://www.taobao.com/abc#!abc',
                    }).then(({errors}) => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for type url has query and has', done => {
                new Schema({
                    v: {
                        format: 'url',
                    },
                }).validatePromise(
                    {
                        v: 'http://www.taobao.com/abc?abc=%23&b=a~c#abc',
                    }).then(({errors}) => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for type not a valid url', done => {
                new Schema({
                    v: {
                        format: 'url',
                    },
                }).validatePromise(
                    {
                        v: 'http://www.taobao.com/abc?abc=%23&b=  a~c#abc    ',
                    }).then(({errors}) => {
                        assert(errors.length === 1);
                        assert(errors[0].message === 'v 不是合法的 URL 地址');
                        done();
                    }
                );
            });
    
            it('support skip schema', done => {
                new Schema({
                    v: {
                        format: 'url',
                    },
                }).validatePromise(
                    {
                        v: '//g.cn',
                    }).then(({errors}) => {
                        assert(errors === null);
                        done();
                    }
                );
            });
        });
    
        describe('email', () => {
            it('works for empty string', done => {
                new Schema({
                    v: {
                        format: 'email',
                    },
                }).validatePromise(
                    {
                        v: '',
                    }).then(({errors}) => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for normal email', done => {
                new Schema({
                    v: {
                        format: 'email',
                    },
                }).validatePromise(
                    {
                        v: 'bindoon@sina.com',
                    }).then(({errors}) => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('not valid email', done => {
                new Schema({
                    v: {
                        format: 'email',
                    },
                }).validatePromise(
                    {
                        v: 'bindoon@sina .com',
                    }).then(({errors}) => {
                        assert(errors.length === 1);
                        assert(errors[0].message === 'v 不是合法的 email 地址');
                        done();
                    }
                );
            });
        });
    
        describe('number', () => {
            it('works for empty string', done => {
                new Schema({
                    v: {
                        format: 'number',
                    },
                }).validatePromise(
                    {
                        v: '',
                    }).then(({errors}) => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for string number', done => {
                new Schema({
                    v: {
                        format: 'number',
                    },
                }).validatePromise(
                    {
                        v: '123456',
                    }).then(({errors}) => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for integer number', done => {
                new Schema({
                    v: {
                        format: 'number',
                    },
                }).validatePromise(
                    {
                        v: 123456,
                    }).then(({errors}) => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('not valid number', done => {
                new Schema({
                    v: {
                        format: 'number',
                    },
                }).validatePromise(
                    {
                        v: '1zbcd',
                    }).then(({errors}) => {
                        assert(errors.length === 1);
                        assert(errors[0].message === 'v 不是合法的数字');
                        done();
                    }
                );
            });
        });
    
        describe('tel', () => {
            it('works for empty string', done => {
                new Schema({
                    v: {
                        format: 'tel',
                    },
                }).validatePromise(
                    {
                        v: '',
                    }).then(({errors}) => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('works for string tel', done => {
                new Schema({
                    v: {
                        format: 'tel',
                    },
                    v2: {
                        format: 'tel',
                    },
                    v3: {
                        format: 'tel',
                    },
                }).validatePromise(
                    {
                        v: '15688888888',
                        v2: '400-800-8888',
                        v3: '0513-8888888',
                    }).then(({errors}) => {
                        assert(errors === null);
                        done();
                    }
                );
            });
    
            it('not valid tel', done => {
                new Schema({
                    v: {
                        format: 'tel',
                    },
                    v2: {
                        format: 'tel',
                    },
                }).validatePromise(
                    {
                        v: '1zbcd',
                        v2: '15688888888abcd',
                    }).then(({errors}) => {
                        assert(errors.length === 2);
                        assert(errors[0].message === 'v 不是合法的电话号码');
                        done();
                    }
                );
            });
        });
    })
});
