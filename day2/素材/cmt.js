$(function() {
    function getCommenList() {
        $.ajax({
            url: 'http://www.liulongbin.top:3006/api/cmtlist',
            method: 'get',
            data: {},
            success: function(res) {
                // console.log(res);
                if (res.status !== 200) {
                    alert('获取数据失败')
                } else {
                    var rows = [];
                    $.each(res.data, function(i, item) {
                        var str = '<li class="list-group-item"><span class="badge" style="background-color:#F0AD4E;">评论时间:' + item.time + '</span>' + item.content + '<span class="badge" style="background-color:#5BC0DE">评论人:' + item.username + '</span></li>'
                        rows.push(str);

                    })
                    $('#comment-list').empty().append(rows.join(''));

                }
            }
        })
    }
    getCommenList()

    $('#formAddCmt').on('submit', function(e) {
        e.preventDefault();
        var data = $('#formAddCmt').serialize();
        // console.log(data);
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, function(res) {
            if (res.status !== 201) {
                return alert('发表评论失败');
            }
            getCommenList();
            $('#formAddCmt')[0].reset();

        })
    })
})