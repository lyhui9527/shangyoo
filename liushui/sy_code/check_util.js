//----------------------------------------------------------------------
//- check_util2.js
//- @author: chana
//- @date:  2018-10-25 18:04:22
//----------------------------------------------------------------------
/**
 * 旧版本的检查函数只能对一个对象里面的key是的值是基本数据类型做检查
 * 这个版本能做到任意格式数据的检查
 * 如果检查不通过就返回报错信息，也就是tip
 * 检查通过返回undefined
 * _this_ 占用名，代表检查本身，没有则不检查
 */

/**
测试代码
// 基本数据类型
function test1() {
    var data = 'a'
    var rule = {
        _this_ : [
            { type : 'required', args : [], tip : 'data为空' },
            { type : 'num',      args : [], tip : 'data必须是数字'}
        ]
    }
    console.log('result', check_util2(data, rule))
}

// 对象
function test2() {
    var data = {
        a : 1,
        b : 2
    }
    // 检查本身的情况下，value==self
    var custom_fun = function(value, self) {
        return Object.keys(value).length < 3
    }
    var rule = {
        _this_ : [
            {type : 'fun',     args : [custom_fun], tip : '对象的key不能大于3'}
        ],
        a : [
            { type : 'required', args : [], tip : 'a为空' },
            { type : 'num',      args : [], tip : 'a必须是数字'}
        ]
    }
    console.log('result', check_util2(data, rule))
}

// 基本数据类型数组
function test3() {
    var data = [1, 2, '3']

    var all_num = function(value, self) {
        return value.every(function(v) {
            return typeof v == 'number'
        })
    }
    var rule = {
        _this_ : [
            { type : 'required', args : [], tip : 'data为空' },
            { type : 'fun',      args : [all_num], tip : 'data必须全部为数字' }
        ]
    }
    console.log('result', check_util2(data, rule))
}

// 对象数组
function test4() {
    var data = [
        {
            a : 2,
            b : 'ok'
        },
        {
            // a : 3,
            b : 'haha'
        }
    ]
    var rule = {
        a : [
            { type : 'num',  args : [], tip : 'a必须是数字'}
        ]
    }
    console.log('result', check_util2(data, rule))   
}

// 任意组合
function test5() {
    var data = [
        {
            a_num : 2,
            b_list : [
                {
                    b_str : 'haha',
                    b_li : [
                        {
                            b_li_str : 'suprise'
                        }
                    ]
                }
            ],
            c_obj : {
                c_obj_num : 999
            }
        }
    ]

    var must_array = function(value, self) {
        return Array.isArray(value)
    }

    var rule = {
        _this_ : [
            { type : 'fun', args : [must_array], tip : 'data必须是数组' }
        ],
        a_num : [
            { type : 'num',  args : [], tip : 'a_num必须是数字'}
        ],
        b_list : {
            b_str : [
                { type : 'required', args : [], tip : 'b_str必填' },
            ],
            b_li : {
                _this_ : [
                    { type : 'required', args : [], tip : 'b_li必填' }
                ],
                b_li_str : [
                    { type : 'required', args : [], tip : 'b_li_str必填' }
                ],
                b_li_ce : [
                    { type : 'required', args : [], tip : 'b_li_ce必填' }
                ]
                
            }
        },
        c_obj : {
            c_obj_num : [
                { type : 'num',  args : [], tip : 'c_obj_num必须是数字'}
            ]
        }
    }
    console.log('result', check_util2(data, rule))
}

test5()
return

*/

;
(function() {
    // 检查函数，第一个参数为要检查的值，第二个参数为所在的对象
    var check_fun = {
        // 非假值检查，args为空
        not_falsity: function(v, _this) {
            return !!v
        },
        // 必填检查，args为空
        required: function(v, _this) {
            if (v === null || v === undefined || v === '') {
                return 0
            }
            if (Array.isArray(v)) {
                return v.length > 0
            }
            if (typeof v === 'object') {
                return Object.keys(v).length > 0
            }
            return 1
        },
        //正则匹配检查，args 传一个正则表达式
        re: function(v, _this, re_expr) {
            return re_expr.test(v)
        },
        //范围检查，args 传最小值，最大值
        range: function(v, _this, min, max) {
            return v >= min && v <= max
        },
        min: function(v, _this, min) {
            return v >= min
        },
        max: function(v, _this, max) {
            return v <= max
        },
        num: function(v, _this) {
            return /^\d+$/.test(v)
        },
        //自定义检查，args 传一个自定义的检查函数
        fun: function(v, _this, func) {
            return func(v, _this)
        }
    }

    var do_check = function(v, self, rule_array) {
        for (var i in rule_array) {
            var check_item = rule_array[i]
            var args = [v, self].concat(check_item.args || [])

            var t = check_fun[check_item.type].apply(null, args)
            if (!t) {
                return check_item.tip
            }
        }
    }

    var check_multi = function(data, check_rules, ignore_del) {
        // console.log('check_multi', data, check_rules, !Array.isArray(data))
        var check_result = ''

        // 如果有检查本身
        if (check_rules._this_) {
            check_result = do_check(data, data, check_rules._this_)
            if (check_result) {
                return check_result
            }
        }

        if (!Array.isArray(data)) {
            return check_one(data, check_rules, ignore_del)
        }

        for (var i = 0; i < data.length; i++) {
            check_result = check_one(data[i], check_rules)
            if (check_result) {
                return check_result
            }
        }
    }

    var check_one = function(obj, check_rules, ignore_del) {
        if (ignore_del && (!obj || obj.__is_del == 1)) {
            return
        }
        for (var k in check_rules) {
            if (k == '_this_') {
                continue
            }
            check_result = check_one_key(k, obj, check_rules[k], ignore_del)
            if (check_result) {
                return check_result
            }
        }
    }

    var check_one_key = function(key, value, check_rule, ignore_del) {
        var v = value[key]
        var check_result = ''
        // 如果check_rules[k]是数组，说明里面存的是检查规则，直接进行检查
        if (Array.isArray(check_rule)) {
            check_result = do_check(v, value, check_rule)
            if (check_result) {
                return check_result
            }
        } else {
            return check_multi(value[key], check_rule, ignore_del)
        }
    }

    var export_fun = check_multi
    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function() {
            return export_fun
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = export_fun
    } else {
        window.shangyoo = window.shangyoo || {}
        window.shangyoo.check_util2 = export_fun
    }
}());