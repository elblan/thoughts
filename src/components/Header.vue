<template>
  <div id="header">
    <div id="header-left">
      <div id="title">Thoughts</div>
      <div id="counter">{{ count }}</div>
    </div>
    <div id="header-right">
      <div id="options"><img src="@/assets/user.png" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped lang="scss">
#header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 1.3rem 1.5rem 0.5rem 1.5rem;

  #header-left {
    display: flex;

    #title {
      margin-right: 0.5rem;
      font-size: 150%;
      font-family: Source-serif pro;
      color: $blue1;
      font-weight: 800;
    }
    #counter {
      background-color: $blue2;
      font-size: 100%;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      opacity: 0.8;
      color: $green3;
    }
  }
  #header-right {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 25px;
    }
    #options {
      background-color: $blue3;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
    }
  }
}
</style>
