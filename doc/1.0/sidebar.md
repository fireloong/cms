---
layout: sidebar
title: 文档首页
---
<nav class="col-md-2 bg-light sidebar">
<div class="sidebar-sticky">
  <ul class="list-unstyled">
    <li>
      <div class="wholerow"></div>
      <i class="iconfont">&ensp;</i>
      <a href="#">序言</a>
    </li>
    <li>
      <div class="wholerow"></div>
      <i class="iconfont icon-caret-right"></i>
      <a href="#">基础</a>
      <ul class="list-unstyled collapse">
        <li>
          <div class="wholerow"></div>
          <i class="iconfont">&ensp;</i>
          <a href="#">开发规范</a>
        </li>
        <li>
          <div class="wholerow"></div>
          <i class="iconfont">&ensp;</i>
          <a href="#">开发规范</a>
        </li>
        <li>
          <div class="wholerow"></div>
          <i class="iconfont">&ensp;</i>
          <a href="#">开发规范</a>
        </li>
      </ul>
    </li>
    <li>
      <div class="wholerow"></div>
      <i class="iconfont icon-caret-right"></i>
      <a href="#">基础</a>
      <ul class="list-unstyled collapse">
        <li>
          <div class="wholerow"></div>
          <i class="iconfont">&ensp;</i>
          <a href="#">开发规范</a>
        </li>
        <li>
          <div class="wholerow"></div>
          <i class="iconfont">&ensp;</i>
          <a href="#">开发规范</a>
        </li>
        <li>
          <div class="wholerow"></div>
          <i class="iconfont">&ensp;</i>
          <a href="#">开发规范</a>
        </li>
      </ul>
    </li>
  </ul>
</div>
</nav>
<style>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 56px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}
.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}
@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}
.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}
.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}
.sidebar .nav-link.active {
  color: #007bff;
}
.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}
.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}
</style>