import stores from '../../vuex/index';



export default {
    /**
     * @param permissions 判断权限列表
     */
    includePermission: function (permissions) {
        if (!permissions.length) return true
        const permissionList:any = stores.state.list;
        return !!permissions.find(permission => permissionList.includes(permission))
    }

}