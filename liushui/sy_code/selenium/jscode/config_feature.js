var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://config.hxddz.shangyoo.com/login');

driver.findElement(By.id('nick_name')).sendKeys('pttest');
driver.findElement(By.id('password')).sendKeys('222222');
driver.findElement(By.id('login_confirm')).click(); 



driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=ad_ext_rule&item_showname=广告用户标签应用&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=act_chal_utype&item_showname=新星挑战令用户类型&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=ad_ext_rule&item_showname=广告用户标签应用&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=anti_addiction_config&item_showname=实名认证配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=anti_addiction_gameover&item_showname=实名认证牌局结束推荐&has_modal=true")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=user_care_config&item_showname=神秘来信触发配置&has_modal=true")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=bankrupt_subsidy_base&item_showname=破产基础配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=bankrupt_subsidy_ext&item_showname=破产额外配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=bankruptcy_room_user_type&item_showname=新破产房间用户类型&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=bargain_user_type&item_showname=用户类型&has_modal=true")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=beanvine_user_type&item_showname=豆子藤用户类型&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=client_ui_new&item_showname=新UI开关配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=exchange_user_type&item_showname=兑奖中心玩家配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=expand_bean_user_type&item_showname=金豆膨胀条件配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=func_guide_conf&item_showname=功能引导配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=game_ad_scenes&item_showname=游戏情景总次数配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=game_layout&item_showname=游戏大厅布局配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=game_promote_config&item_showname=游戏推广配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=game_room_user_type&item_showname=用户类型配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=game_rule_channel&item_showname=游戏渠道属性&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=honor_vip_exchange&item_showname=会员定制配置&has_modal=true")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=login_target_user&item_showname=登录推荐匹配配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=new_robot_rule&item_showname=新机器人子规则配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=newer_guide_conf&item_showname=新手引导配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=panic_buy&item_showname=限量抢购配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=prop_deduction&item_showname=道具抵扣配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=quit_popup_config&item_showname=退出弹窗配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=recommend_priority&item_showname=推荐树优先级&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=rpkt_user_type&item_showname=用户条件类型配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=unite_ex_user_type&item_showname=兑换用户类型&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=unite_fwin_user_type&item_showname=首胜见面礼用户类型&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=unite_rpkt&item_showname=异业红包配置&has_modal=false")')
driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=unite_wel_conf&item_showname=迎新见面礼总配置&has_modal=false")')
// driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hx?sid=1&item_name=vouchers_provide&item_showname=礼包发放配置&has_modal=false")')



//   driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hl?sid=2&item_name=anti_addiction_config&item_showname=实名认证配置&has_modal=false")')
//   driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hl?sid=2&item_name=anti_addiction_gameover&item_showname=实名认证牌局结束推荐&has_modal=false")')
//   driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hl?sid=2&item_name=bankruptcy_room_user_type&item_showname=新破产房间用户类型&has_modal=false")')
//   driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hl?sid=2&item_name=client_ui_new&item_showname=新UI开关配置&has_modal=false")')
//   driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hl?sid=2&item_name=exchange_user_type&item_showname=兑奖中心玩家配置&has_modal=false")')
//   driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hl?sid=2&item_name=expand_bean_user_type&item_showname=金豆膨胀条件配置&has_modal=false")')
//   driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hl?sid=2&item_name=game_layout&item_showname=游戏大厅布局配置&has_modal=false")')
//   driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hl?sid=2&item_name=game_promote_config&item_showname=游戏推广配置&has_modal=false")')
//   driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hl?sid=2&item_name=game_rule_channel&item_showname=游戏渠道属性&has_modal=false")')
//   driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hl?sid=2&item_name=login_target_user&item_showname=登录推荐匹配配置&has_modal=false")')
//   driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hl?sid=2&item_name=new_robot_rule&item_showname=新机器人子规则配置&has_modal=false")')
//   driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hl?sid=2&item_name=panic_buy&item_showname=限量抢购配置&has_modal=false")')
//   driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hl?sid=2&item_name=prop_deduction&item_showname=道具抵扣配置&has_modal=false")')
//   driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hl?sid=2&item_name=rpkt_user_type&item_showname=用户条件类型配置&has_modal=false")')
//   driver.executeScript('window.open("http://config.hxddz.shangyoo.com/running/init/hl?sid=2&item_name=vouchers_provide&item_showname=礼包发放配置&has_modal=false")')