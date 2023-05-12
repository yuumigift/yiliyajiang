<template>
    <div class="sticky" style="margin-left: 45%;width: 130px;">
        <p v-for="(item, index) in arr" :key="index">
            {{ item }}
        </p>
    </div>
</template>
<script>
export default {
    props:{
        arr:{
            type:[]
        }
    },
    mounted() {
        const h1s = document.querySelectorAll('p');
        let delay = 2000;
        h1s.forEach((h1) => {
            h1.style.setProperty('--percentage', `${0}%`);

            setTimeout(() => {
                let scrolled = 0;
                setInterval(() => {
                    if (scrolled !== 10) {
                        scrolled++
                    }
                    h1.style.setProperty('--percentage', `${scrolled * 10}%`);
                }, 200);
            }, delay);
            delay += 2000;
        });
    }
}
</script>
<style scoped lang="scss">
:root {
  --percentage: 0%;
}

body {
  background-color: #000;
  margin: 0;
  height: 300vh;
}

.sticky {
  position: sticky;
  top: 0;
  justify-content: center;
  align-items: center;
}

p {
  display: inline-block; /* 或者 display: inline; */
    margin: 0 5px;
  font-family: ysbth;
  font-size: 10px;
  width: 150px;
  letter-spacing: -0.3px;
  background-image: linear-gradient(75deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 33.33%, rgba(255, 255, 255, 0) 66.67%, rgba(255, 255, 255, 0) 100%);
  background-size: 300% 100%;
  background-position-x: calc(100% - var(--percentage));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>