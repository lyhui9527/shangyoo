from selenium import webdriver
import time,os


driver = webdriver.Chrome()
# driver.get("http://www.baidu.com")

# driver.find_element_by_id("kw").send_keys("Unable to add the Win32_PerfRawData_PerfDisk_PhysicalDisk")
# driver.find_element_by_id("su").click()
# # driver.find_element_by_id("result_logo").click()

# # driver.quit()

file_path =  'F:/learn_hub/shangyoo/liushui/sy_code/selenium/pycode/js.html'

driver.get(file_path)
driver.implicitly_wait(5)

driver.execute_script("$('#tooltip').fadeOut();")
# time.sleep(5)#第二种方法：
# button = driver.find_element_by_class_name('btn')
# driver.execute_script('$(arguments[0]).fadeOut()',button)
# time.sleep(5)



主题: 捕鱼运营-资产管理风险点告知

HI 探长，永澄
即将上线的捕鱼运营-资产管理功能中，因为需要定时查询全部用户的数据（现在暂定每隔15分钟查询一次数据，查询完成时间大概耗时7秒）。
出现以下问题：
1、可能会在查询过程中，导致一定程度的数据库同步延迟问题。
2、可能会在查询过程中，导致其他功能如玩家基本/详细信息的相关查询受到影响。
3、随着玩家数量增多，这个影响可能会越来越明显。

目前我们暂定每隔15分钟查询一次数据，功能上线后，麻烦永澄留意一下影响范围和程度。
后续如果发现实际影响过大，可以再把查询间隔时间适当延长，或者需要探长提供支持，优化方案。

请知悉，并回复是否能接受，谢谢
