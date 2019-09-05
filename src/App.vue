<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link>| -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
  </div>
</template>

<style>
.nav-bar {
  color: #fff;
  height: 0.8rem;
  background: #099;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.nav-btn {
  width: 1.6rem;
  height: 0.8rem;
  padding: 0 0.1rem;
  line-height: 0.8rem;
  text-align: center;
}
.txt-abr {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.nav-title {
  width: 4.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
}
</style>
