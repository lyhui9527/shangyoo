#!/usr/bin/python
#coding=utf-8

from urllib import request



url = 'http://192.168.16.102:80/duiduipeng/init_task'
headers = { "content-type": "application/json", "host": "party3hxddz.syyx.com" }
method = 'POST'

data = {
    'appid': '1404',
    'ver': '0',
    'imei': '862856040459879',
    'chn': '10006',
    'uid': '2080305979',
    'nickname': '昵称大王',
    'sex': '1',
    'beans': '0',
    'win': '0',
    'lose': '0',
    'cert': '9A8F5ED7595641541DAC0DDAF4FDA8A3',
    'net': 'unkown',
    'phonenumber': '',
    'serverid': '1',
    'server_id': '1',
    'servercode': '500'
}



response=request.Request(url=url,headers=headers,data=data,method=method)

print(response)















# print('561212照片那个的\n')

# l1 =[1,2,3]
# l2=[4,5,6]

# dic = {}
# dic['list1'] = l1
# dic['list1'][2]=9


# print ("asdasd"+"12535")
# # print  'last : %s, %s'  (dic['list1'][2],l1[2])
# # print 'last :',dic['list1'][2],',',l1[2]


# # if True:
# #     print "jfjfjff"

# a1=1
# a2=2
# ret=a2+a1
# i=1
# n=20
# while i < n :
#     a1=a2
#     a2=ret
#     ret=a1+a2
#     print(ret)
#     i+=1


