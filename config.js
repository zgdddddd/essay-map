/* 只需要改这里（如果仓库名和下面不同）
 * owner：数据仓库所在的 GitHub 用户名或组织名
 * repo ：数据仓库名（私有仓库，里面放 data.json 和 assets.json）
 */
window.MAP_CONFIG = {
  owner: 'zgdddddd',
  repo: 'essay-map-data',
  branch: 'main',
  dataPath: 'data.json',          // 三栏卡片和连线
  assetsPath: 'assets.json',      // 附件和图片
  commentsPath: 'comments.json',  // 评论（第一次有人评论时自动创建，不用上传）
  autoSyncSeconds: 15,            // 停止编辑多少秒后自动同步
  pollSeconds: 20                 // 多少秒检查一次别人的新修改和新评论
};
