

export default class NavigationUitl {
    
    /// 返回首页
    static resetToHomePage(params) {
        const {navigation} = params;
        navigation.navigate('Main');
    }

    /// 返回上一页
    static resetToPrevious(navigation) {
        navigation.goBack();
    }
}