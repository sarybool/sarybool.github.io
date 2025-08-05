var posts=["2025/08/05/博客基本定型，犒劳一下/","2025/08/05/更新了文章的图片，记录一下/","2025/08/04/值得纪念的日子/","2025/08/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };