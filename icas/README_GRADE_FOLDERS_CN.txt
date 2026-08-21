DYAA ICAS — Grade 文件夹版本

当前结构：
  gradeB/
  gradeC/
  gradeD/
  gradeE/
  gradeG/

每个 Grade 下分别有：questions / answers / images。
根目录继续保留 index.html、catalog.js、student_grade_config.js。

以后新增试卷：
- Grade B 放入 gradeB/
- Grade C 放入 gradeC/
- Grade D 放入 gradeD/
- Grade E 放入 gradeE/
- Grade G 放入 gradeG/
同时在根目录 catalog.js 加入对应年份，并使用 gradeX/... 路径。

重要：
- config.js 不包含在本 ZIP 中；GitHub 上原有 config.js 请保留。
- 学生代码权限、10 分钟后离开/刷新自动提交、Pause、Timer、Google Sheet 逻辑保持不变。
