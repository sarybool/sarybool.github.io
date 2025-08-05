var posts=["2025/08/05/终于把文章的图片换掉了，记录一下/","2025/08/04/值得纪念的日子/","2025/08/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };