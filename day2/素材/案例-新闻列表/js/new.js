$(function() {
    function getCmtList() {
        $.get('http://www.liulongbin.top:3006/api/cmtlist', function(res) {
            if (res.status !== 200) {
                return alert('获取列表失败')
            }
            for (var i = 0; i < res.data.length; i++) {
                res.data[i].tags = res.data[i].tags
            }
            console.log(res);
            // console.log(res.data);
            var htmlStr = template('tpl-news', res);
            // console.log(htmlStr);
            $('#news-list').html(htmlStr);
        })
    }
    getCmtList()

})