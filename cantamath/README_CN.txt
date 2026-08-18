DYAA Canta Math Master v6

新增：
- 每次 Check Answer 都算 1 Run，不管答对还是答错。
- 默认 1 Run = 30 秒。
- Final Score Time = Actual Time + Total Runs × Run Time。
- Run Mode 记录“第一次尝试做错”的题号，每题只记录一次。
- 最终结果自动提交到 Google Sheet 的 `Canta Math` 工作表。

Google Sheet 字段：
Received At
Student
Year
Grade
Mode
Actual Time
Total Runs
Run Seconds
Run Time Added
Final Score Time
Wrong Attempts
Run Mode - Wrong on First Attempt

例如第一次做错 Q2、Q7、Q15：
Q2, Q7, Q15

Google Sheet 设置：
1. 打开你的 Google Sheet。
2. Extensions -> Apps Script。
3. 把 `Google_Sheet_Code.gs` 内容复制进去。
4. Deploy -> New deployment -> Web app。
5. Execute as: Me。
6. Who has access: Anyone。
7. Deploy 后复制 `/exec` URL。
8. 打开 `settings.js`，填写：
   window.CANTAMATH_GOOGLE_SHEET_URL = "你的 /exec URL";
9. 保存。

当前题库：
2009 / Year 10
2010 / Year 10
2015 / Year 10


v6.1 Result 页面规则
===================
Exercise Mode:
- 不需要所有题都答对才能结束。
- 页面有 `Finish & View Results`。
- 点击后会显示当前成绩，并自动上传 Google Sheet。
- 没有按 `Check Answer` 的题不会增加 Run。
- 已按 `Check Answer` 的每次提交（答对或答错）都增加 1 Run。

Run Mode:
- 仍然必须按顺序答对每一道题。
- Q20 答对后自动进入 Results 页面并上传 Google Sheet。


v6.2 新增题库
=============
- 2008 / Year 10

当前 Year 10 题库：
- 2008
- 2009
- 2010
- 2015

2008 的题目直接从原 PDF 裁切，原有图形和图片均保留。
答案按提供的 2008 答案 PDF 录入。
