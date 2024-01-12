document.addEventListener('DOMContentLoaded', () => {
    const memo = document.getElementById('memo');

    // ローカルストレージからメモを読み込む
    memo.value = localStorage.getItem('memo') || '';

    // メモの内容が変更されたら保存する
    memo.addEventListener('input', () => {
        localStorage.setItem('memo', memo.value);
    });
});