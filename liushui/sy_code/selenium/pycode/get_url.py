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

