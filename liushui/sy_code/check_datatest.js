

var check_util = require('./check_util')

function test5() {
    var data = [
        {
            a_num : 2,
            b_list : [
                {
                    b_str : 'haha',
                    b_li : ['','','']
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

    // var all_num = function(value, self) {
    //     return value.every(function(v) {
    //         return typeof v == 'number'
    //     })
    // }

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
                   { type : 'required', args : [], tip : 'b_li必填' },
                   { type : 'fun', args : [must_array], tip : 'b_li数组' },
                 
                ],

                
            }
        },
        c_obj : {
            c_obj_num : [
                { type : 'required',  args : [], tip : 'c_obj_num必填'},
               { type : 'num',  args : [], tip : 'c_obj_num必须是数字'}

            ]
        }
    }
    console.log('result', check_util(data, rule))
}

test5()
return